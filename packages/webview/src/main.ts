import './styles/index.css'
import { setupMermaid } from './mermaid.ts'

const app = document.querySelector<HTMLDivElement>('#app')
if(app) {
  const mermaidInstance = setupMermaid();
  if(import.meta.env.DEV) {
    mermaidInstance.test()
  }
}
