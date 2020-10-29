module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    backgroundColor: theme => ({
          ...theme('colors'),
           'purplecolor': '#8c30f5',
            }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
