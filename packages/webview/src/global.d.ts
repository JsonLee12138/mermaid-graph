declare global {
  interface Window {
    renderMermaid: (code: string) => void;
  }
}
export {};
