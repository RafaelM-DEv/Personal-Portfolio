module.exports = {
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit'
}
