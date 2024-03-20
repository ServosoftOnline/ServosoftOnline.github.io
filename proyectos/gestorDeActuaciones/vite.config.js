import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Lo importo
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
})
