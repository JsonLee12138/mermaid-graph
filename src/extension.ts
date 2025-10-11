// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { debounce } from 'radash';
import * as fs from 'fs';
import pkgJson from '../package.json';

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
		preview.createOrShow(activeEditor?.document.getText() ?? '');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
	MermaidPreview.clear();
}

class MermaidPreview {
	static viewType = 'mmdx.ShowPreview';
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
		console.log('html', html);
		return html;
		// const scriptUri = this.#panel.webview.asWebviewUri(vscode.Uri.file(path.join(this.#webviewSourceRootPath, 'index.js')));
		// const styleUri = this.#panel.webview.asWebviewUri(vscode.Uri.file(path.join(this.#webviewSourceRootPath, 'index.css')));
		// return `<!DOCTYPE html>
		//         <html lang="en">
		//         <head>
		//             <meta charset="UTF-8">
		//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
		//             <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${this.#panel.webview.cspSource} 'unsafe-inline'; script-src 'nonce-${this.#nonce}' ${this.#panel.webview.cspSource}; img-src ${this.#panel.webview.cspSource} data: blob:;">
		//             <title>Mermaid Preview</title>
		// 						<script type="module" crossorigin src="${scriptUri}" nonce="${this.#nonce}"></script>
		// <link rel="stylesheet" crossorigin href="${styleUri}" nonce="${this.#nonce}">
		//         </head>
		//         <body>
		//             <div id="root"></div>
		//         </body>
		//         </html>`;
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
