
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// Los añado al arreglo que contiene los plugins
export default defineConfig({
  plugins: [react(),],
})

