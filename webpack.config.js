const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // carousel: './src/Carousel/Carousel.js',
    example: './example/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Carousel Example',
      chunks: ['example'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
