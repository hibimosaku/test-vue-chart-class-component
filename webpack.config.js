module.exports = {
  mode: 'development',

  entry: './src/index.ts',

  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: [ '.js', '.ts' ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
};
