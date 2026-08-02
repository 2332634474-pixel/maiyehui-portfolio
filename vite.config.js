import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署在子目录，base 必须与仓库名一致（含首尾斜杠）。
// 若以后更换仓库名，请同步修改这里的 base。
export default defineConfig({
  plugins: [react()],
  base: '/maiyehui-portfolio/',
})
