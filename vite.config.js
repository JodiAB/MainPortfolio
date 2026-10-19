import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// Match the canonical directory route used by static hosting, in dev and preview.
const canonicalCaseStudy = {
  name: 'canonical-case-study',
  configureServer: redirectCaseStudy,
  configurePreviewServer: redirectCaseStudy,
}
function redirectCaseStudy(server) {
  server.middlewares.use((request, response, next) => {
    const url = request.url || ''
    const path = url.split('?', 1)[0]
    if (path !== '/projects/possibility-engine') return next()
    response.writeHead(308, { Location: url.replace(path, `${path}/`) })
    response.end()
  })
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react(),canonicalCaseStudy],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        possibilityEngine: fileURLToPath(new URL('./projects/possibility-engine/index.html', import.meta.url)),
      },
    },
  },
})
