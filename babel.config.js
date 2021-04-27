module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
          esmodules: true,
        },
      },
    ],
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
