import './styles/index.css'
import { setupMermaid } from './mermaid.ts'

const app = document.querySelector<HTMLDivElement>('#app')
if(app) {
  setupMermaid();
}
