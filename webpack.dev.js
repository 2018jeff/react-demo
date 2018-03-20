/**
 * 开发环境配置
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const prod = merge(common,{
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/dev-server',
    './src/app/app.js',
    './src/bind/bind.js',
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/[name]/',
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080, //如果省略，默认8080
    publicPath: "/"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ]
});

module.exports = prod;