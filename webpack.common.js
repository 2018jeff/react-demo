/**
 * 打包公共配置.
 */

const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const manifestPlugin = require('webpack-manifest-plugin');
module.exports = {
  entry: {
    app: './src/app/app.js',
    bind: './src/bind/bind.js',
  },
  // 输出
  output: {
    filename:'[name]/[name].bundle.js',
    chunkFilename:'[name].chunk.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }
    ]
  },
  // 插件...
  plugins: [
    new cleanPlugin(['dist']),
    new htmlPlugin({
      title: 'react-demo',
      filename: './app/index.html',
      inject: 'body',
      chunks:['app']
    }),
    new htmlPlugin({
      title: 'react-demo bind',
      filename: './bind/index.html',
      inject: 'body',
      chunks:['bind']
    }),
    new manifestPlugin()
  ]
}