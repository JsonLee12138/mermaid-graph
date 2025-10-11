import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // 🔑 关键!使用相对路径
  build: {
    outDir: '../../webview',
    assetsDir: 'assets'
  }
});
