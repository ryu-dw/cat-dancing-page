import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: './' → GitHub Pages 하위 경로에서도 자산(JS/CSS)이 상대 경로로 로드되도록 설정
export default defineConfig({
  base: './',
  plugins: [react()],
})
