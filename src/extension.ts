// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { debounce } from 'radash';
import * as fs from 'fs';
import pkgJson from '../package.json';

function extractMermaidDiagramsModern(mdContent: string): string[] {
  const pattern = /```mermaid\s*\n([\s\S]*?)```/g;
  const results: string[] = [];
  let match: RegExpExecArray | null;
  // 使用 exec 循环，兼容性最好
  while ((match = pattern.exec(mdContent)) !== null) {
    results.push(match[1].trim());
  }

  return results;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const preview = MermaidPreview.create(context);

	const disposable = vscode.commands.registerCommand(`${pkgJson.name}.ShowPreview`, () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const activeEditor = vscode.window.activeTextEditor;
		const editors = vscode.window.visibleTextEditors;
		if (!editors.length || activeEditor?.document.languageId !== 'mermaid') {
			// 提示
			vscode.window.showInformationMessage('Please preview a mermaid file!');
			return;
		}
		if(activeEditor?.document.fileName.endsWith('.md')) {
			const graph = extractMermaidDiagramsModern(activeEditor?.document.getText() ?? '');
			if(graph) {
				preview.createOrShow(JSON.stringify(graph));
				return;
			}
		}
		preview.createOrShow(activeEditor?.document.getText() ?? '');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
	MermaidPreview.clear();
}

class MermaidPreview {
	static viewType = 'mermaid-graph.ShowPreview';
	static viewTitle = 'Mermaid Preview';
	#ctx: vscode.ExtensionContext;
	#panel: vscode.WebviewPanel | null = null;
	#disposables: vscode.Disposable[] = [];
	#webviewSourceRootPath: string;
	#nonce: string;

	static #instance: MermaidPreview | null = null;

	static create(ctx: vscode.ExtensionContext) {
		if (!this.#instance) {
			this.#instance = new MermaidPreview(ctx);
		}

		return this.#instance;
	}

	static clear() {
		if (this.#instance) {
			this.#instance.dispose();
			this.#instance = null;
		}
	}

	private constructor(ctx: vscode.ExtensionContext) {
		this.#ctx = ctx;
		this.#webviewSourceRootPath = path.join(ctx.extensionPath, 'webview');
		this.#nonce = getNonce();
	}

	createOrShow(code: string) {
		if (this.#panel) {
			this.render(code);
			this.#panel.reveal(this.otherColumn);
			return;
		}
		this.createPanel();
		setTimeout(() => {
			this.render(code);
		}, 100);
	}

	createPanel() {
		this.#panel = vscode.window.createWebviewPanel(MermaidPreview.viewType, MermaidPreview.viewTitle, this.otherColumn, {
			enableScripts: true,
			localResourceRoots: [this.webviewSourceRootURI],
			retainContextWhenHidden: true,
		});
		this.#panel.webview.html = this.html;

		this.#panel.onDidDispose(() => this.dispose(), null, this.#disposables);


		vscode.workspace.onDidChangeTextDocument(debounce({ delay: 100 }, (e) => {
			if (e.document.languageId !== 'mermaid') { return; }
			if (e.document.uri.toString() === vscode.window.activeTextEditor?.document.uri.toString()) {
				this.render(e.document.getText());
			}
		}), null, this.#disposables);

		vscode.workspace.onDidChangeConfiguration(debounce({ delay: 100 }, (e) => {
			if (e.affectsConfiguration('mermaid')) {
				if (vscode.window.activeTextEditor?.document.languageId !== 'mermaid') { return; }
				this.render(vscode.window.activeTextEditor?.document.getText() ?? '');
			}
		}), null, this.#disposables);

		vscode.window.onDidChangeActiveTextEditor(() => {
			if (vscode.window.activeTextEditor?.document.languageId !== 'mermaid') { return; }
			this.render(vscode.window.activeTextEditor?.document.getText() ?? '');
		}, null, this.#disposables);
	}

	render(code: string) {
		this.#panel?.webview.postMessage({
			type: 'renderMermaid',
			content: code,
		});
	}

	dispose() {
		this.#panel?.dispose();
		this.#panel = null;

		for (const e of this.#disposables) {
			try {
				e.dispose();
			} catch (error) {
				console.error(error);
			}
		}
		this.#disposables = [];
		this.#panel = null;
	}

	get html(): string {
		if (!this.#panel) { return ''; }
		const htmlPath = path.join(
			this.#ctx.extensionPath,
			'webview',
			'index.html'
		);
		let html = fs.readFileSync(htmlPath, 'utf-8');
		const webviewDir = path.dirname(htmlPath);
		html = html.replace(
			/(href|src)=["']\.?\/?([^"']+)["']/g,
			(_, attr, file) => {
				const uri = this.#panel!.webview.asWebviewUri(
					vscode.Uri.file(path.join(webviewDir, file))
				);
				return `${attr}="${uri}"`;
			}
		);
		return html;
	}

	get webviewSourceRootURI(): vscode.Uri {
		return vscode.Uri.file(this.#webviewSourceRootPath);
	}

	get otherColumn(): vscode.ViewColumn {
		const activeEditor = vscode.window.activeTextEditor;
		let res: vscode.ViewColumn | null = null;
		const editors = vscode.window.visibleTextEditors;

		if (editors.length === 2) {
			const otherEditors = editors.filter(c => c.viewColumn !== activeEditor?.viewColumn);
			const otherEditor = otherEditors[0];
			res = otherEditor.viewColumn!;
		}

		return res ?? vscode.ViewColumn.Beside;
	}
}

function getNonce(): string {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
