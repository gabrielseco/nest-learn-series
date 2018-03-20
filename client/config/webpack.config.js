const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { HOST, PORT, TITLE } = require('./env/dev.env');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'js/main.js',
    publicPath: '/'
  },
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: TITLE,
      template: './assets/index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  mode: 'development'
};
