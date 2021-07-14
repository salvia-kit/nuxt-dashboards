module.exports = {
  purge: ['./pages/**/*.{js,vue}', './components/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        mac: "url('https://res.cloudinary.com/beloved/image/upload/v1623547432/Assets/mac_mgnyjm.webp')",
      }),
      width: {
        99: 'calc(100% - 16rem);' /* get the width of the main content from lg:viewport by dividing
        (the total width by the width of the side navigation) */,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
