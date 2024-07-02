module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'background': '#282C33',
        'hover': '#4B5563',
      }),
      textColor: theme => ({
        'greyText': '#ABB2BF',
        'purpleText': '#C778DD',
      }),
      fontFamily: {
        'mainText': ["Fira Code", "monospace"],
      },
      borderColor: theme => ({
        'purpleText': '#C778DD',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}