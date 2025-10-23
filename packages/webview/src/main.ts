import { setupMermaid } from './mermaid.ts';
import './styles/index.css';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  const mermaidInstance = setupMermaid();
  if (import.meta.env.DEV) {
    mermaidInstance.test();
  }
}
