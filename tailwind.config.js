/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 定义黑白灰层级
        'bg-main': '#ffffff',
        'bg-alt': '#f8f8f8',
        'text-main': '#111111',
        'text-muted': '#666666',
        'border-color': '#e5e5e5',
      },
      fontFamily: {
        // 使用系统无衬线字体，保持现代感
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'], // 论文标题等可用衬线体增加学术感
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
