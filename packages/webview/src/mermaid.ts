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

  const getMermaidSvg = (code: string) => {
    const id = crypto.randomUUID()
    return mermaid.render('mermaid-graph-' + id, code).then((res) => {
      return res.svg
    })
  }

  const mergeMermaidSvg = (svgs: string[]) => {
    const parser = new DOMParser()

    // 解析每个 SVG 并提取信息
    const svgElements = svgs.map(svgString => {
      const doc = parser.parseFromString(svgString, 'image/svg+xml')
      const svg = doc.querySelector('svg')
      if (!svg) return null

      // 从 viewBox 或 width/height 属性中获取尺寸
      const viewBox = svg.getAttribute('viewBox')
      let width: number
      let height: number

      if (viewBox) {
        const [, , w, h] = viewBox.split(/\s+/).map(Number)
        width = w
        height = h
      } else {
        width = Number.parseFloat(svg.getAttribute('width') || '0')
        height = Number.parseFloat(svg.getAttribute('height') || '0')
      }

      return {
        element: svg,
        width,
        height
      }
    }).filter((item): item is NonNullable<typeof item> => item !== null)

    if (svgElements.length === 0) return null

    // 布局配置
    const padding = 20 // 每个图表内边距
    const spacing = 30 // 图表之间的间距
    const borderRadius = 8 // 圆角

    // 计算总尺寸（横向布局）
    let currentX = 0
    let maxHeight = 0

    const positions = svgElements.map(svg => {
      const cardWidth = svg.width + padding * 2
      const cardHeight = svg.height + padding * 2

      const pos = {
        x: currentX,
        y: 0,
        width: svg.width,
        height: svg.height,
        cardWidth,
        cardHeight
      }

      currentX += cardWidth + spacing
      maxHeight = Math.max(maxHeight, cardHeight)

      return pos
    })

    const totalWidth = currentX - spacing

    // 创建容器 SVG
    const containerSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    containerSvg.setAttribute('width', totalWidth.toString())
    containerSvg.setAttribute('height', maxHeight.toString())
    containerSvg.setAttribute('viewBox', `0 0 ${totalWidth} ${maxHeight}`)
    containerSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

    // 添加样式定义（磨玻璃效果）
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')

    // 创建阴影滤镜
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter')
    filter.setAttribute('id', 'card-shadow')
    filter.setAttribute('x', '-50%')
    filter.setAttribute('y', '-50%')
    filter.setAttribute('width', '200%')
    filter.setAttribute('height', '200%')

    // 阴影效果
    const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur')
    feGaussianBlur.setAttribute('in', 'SourceAlpha')
    feGaussianBlur.setAttribute('stdDeviation', '3')

    const feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset')
    feOffset.setAttribute('dx', '0')
    feOffset.setAttribute('dy', '2')
    feOffset.setAttribute('result', 'offsetblur')

    const feFlood = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood')
    feFlood.setAttribute('flood-color', 'rgba(0, 0, 0, 0.2)')

    const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite')
    feComposite.setAttribute('in2', 'offsetblur')
    feComposite.setAttribute('operator', 'in')

    const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge')
    const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode')
    const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode')
    feMergeNode2.setAttribute('in', 'SourceGraphic')

    feMerge.appendChild(feMergeNode1)
    feMerge.appendChild(feMergeNode2)

    filter.appendChild(feGaussianBlur)
    filter.appendChild(feOffset)
    filter.appendChild(feFlood)
    filter.appendChild(feComposite)
    filter.appendChild(feMerge)
    defs.appendChild(filter)

    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style')
    style.textContent = `
      .mermaid-card-bg {
        fill: rgba(255, 255, 255, 0.4);
        stroke: rgba(200, 200, 200, 0.6);
        stroke-width: 1.5;
        filter: url(#card-shadow);
      }
    `
    defs.appendChild(style)
    containerSvg.appendChild(defs)

    // 渲染每个图表
    svgElements.forEach((svgData, index) => {
      const pos = positions[index]

      // 创建卡片组
      const cardGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      cardGroup.setAttribute('class', `mermaid-card mermaid-card-${index}`)

      // 添加背景卡片
      const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      background.setAttribute('class', 'mermaid-card-bg')
      background.setAttribute('x', pos.x.toString())
      background.setAttribute('y', pos.y.toString())
      background.setAttribute('width', pos.cardWidth.toString())
      background.setAttribute('height', maxHeight.toString())
      background.setAttribute('rx', borderRadius.toString())
      background.setAttribute('ry', borderRadius.toString())
      cardGroup.appendChild(background)

      // 嵌入原始 SVG（保留所有属性和样式）
      const svg = svgData.element.cloneNode(true) as SVGSVGElement

      // 设置明确的尺寸和位置（横向布局）
      svg.setAttribute('width', pos.width.toString())
      svg.setAttribute('height', pos.height.toString())
      svg.setAttribute('x', (pos.x + padding).toString())
      svg.setAttribute('y', (pos.y + padding).toString())

      cardGroup.appendChild(svg)
      containerSvg.appendChild(cardGroup)
    })

    return containerSvg
  }

  const renderSvg = (svg: string | SVGSVGElement) => {
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

    if (typeof svg === 'string') {
      container.innerHTML = svg
    } else {
      container.appendChild(svg)
    }
    setTimeout(() => {
      svgPanZoomInstance = svgPanZoom(container.querySelector('svg') as SVGElement, {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
      })
    }, 20)
  }

  const renderMermaid = async (code: string | string[]) => {
    let arr: string[] = []
    if (typeof code === 'string') {
      try {
        if (code.length === 0) return
        const res = JSON.parse(code)
        arr = res.map((item: string) => item.trim())
      } catch (error) {
        arr = [code.trim()]
      }
    } else {
      arr = code.map(item => item.trim())
    }
    if (arr.length === 0) return
    if (arr.length === 1) {
      const svg = await getMermaidSvg(arr[0])
      renderSvg(svg)
      return
    }
    const svgs = await Promise.all(arr.map(item => getMermaidSvg(item)))
    const mergedSvg = mergeMermaidSvg(svgs)
    renderSvg(mergedSvg as SVGSVGElement)
  }

  window.renderMermaid = renderMermaid

  const debouncedRenderMermaid = debounce({ delay: debounceDelay }, renderMermaid)

  window.addEventListener('message', (event) => {
    const { data } = event
    if (data.type === messageType) {
      debouncedRenderMermaid(data.content)
    }
  })

  window.addEventListener('resize', throttle({ interval: 100 }, () => {
    svgPanZoomInstance?.resize();
  }))

  function test() {
    const demoCode = `
    flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
  `

    const demo2Code = `
    gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
  `

    renderMermaid(JSON.stringify([demoCode, demo2Code]))
  }


  return {
    test
  }
}
