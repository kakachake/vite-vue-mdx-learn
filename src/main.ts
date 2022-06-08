import { createSSRApp, Suspense } from 'vue'
import App from './App.jsx'
import { createRouter } from './router'
// 导出环境无关的（通用的）应用代码
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return { app, router }
}
