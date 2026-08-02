/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F4F1EA', // 骨白底
        ink: '#232321', // 近黑文字
        ash: '#6E6A62', // 暖灰次级
        clay: '#C26B4A', // 陶土橙（点睛）
        mist: '#6E8CA0', // 雾蓝（点睛）
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', '"Noto Sans SC"', 'sans-serif'],
        sans: ['Inter', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
