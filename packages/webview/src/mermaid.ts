import mermaid, { type MermaidConfig } from 'mermaid';
import svgPanZoom from 'svg-pan-zoom';
import './styles/mermaid.css';
import { debounce, throttle } from 'radash';

export interface SetupMermaidOptions {
  ID?: string;
  messageType?: string;
  debounceDelay?: number;
}

const DEFAULT_MERMAID_ID = 'mermaid-graph-canvas';
const DEFAULT_MESSAGE_TYPE = 'renderMermaid';

export function setupMermaid({ ID = DEFAULT_MERMAID_ID, messageType = DEFAULT_MESSAGE_TYPE, debounceDelay = 100 }: SetupMermaidOptions = {}) {
  let svgPanZoomInstance: ReturnType<typeof svgPanZoom> | null = null;

  const mermaidConfig: MermaidConfig = {
    theme: 'base',
    flowchart: {
      curve: 'basis',
    },
    startOnLoad: true,
  }

  mermaid.initialize(mermaidConfig);

  const renderMermaid = (code: string) => {
    const container = (() => {
      let el = document.querySelector(`#${ID}`)
      if (!el) {
        el = document.createElement('div')
        el.id = ID
        el.className = 'canvas'
        document.body.appendChild(el)
      }
      return el
    })()

    mermaid.render('mermaid-graph-' + ID, code).then((res) => {
      container.innerHTML = res.svg
      setTimeout(() => {
        svgPanZoomInstance = svgPanZoom(container.querySelector('svg') as SVGElement, {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
        })
      }, 20)
    })
  }

  window.renderMermaid = renderMermaid

  const debouncedRenderMermaid = debounce({delay: debounceDelay}, renderMermaid)

  window.addEventListener('message', (event) => {
    const { data } = event
    if (data.type === messageType) {
      debouncedRenderMermaid(data.content)
    }
  })

  window.addEventListener('resize', throttle({interval: 100}, () => {
    svgPanZoomInstance?.resize();
  }))
}
