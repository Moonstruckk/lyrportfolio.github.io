/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 你原本定义的黑白灰层级
        'bg-main': '#ffffff',
        'bg-alt': '#f8f8f8',
        'text-main': '#111111',
        'text-muted': '#666666',
        'border-color': '#e5e5e5',

        // 👈 新增：完美对应你 index.css 里的 ig- 命名，让打包通过
        'ig-bg': '#ffffff',      // 对应页面背景色（白色）
        'ig-text': '#111111',    // 对应主文字颜色（深灰/接近黑）
        'ig-black': '#111111',   // 对应选中文本时的黑色背景
        'ig-border': '#e5e5e5',  // 对应边框和分割线颜色
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'], 
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}