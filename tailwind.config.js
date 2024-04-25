/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      '1': '1px'
    },
    colors: {
      'myColorNight': '#0A0F0D',
      'myColorBlue': '#7CC6FE',
      'myColorGreen': '#2DD881',
      'myColorPurple': '#6247AA',
      'myColorGray': '#D2D5DD',
    },
    fontFamily: {
      'navFont': '"Retro Team"',
      'bannerFont': '"Hacker Kerx"',
    }
  },
  plugins: [],
}

