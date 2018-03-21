/**
 * 打包公共配置.
 */

const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const manifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractCSS = new ExtractTextPlugin('styles.css');
module.exports = {
  entry: {
    app: './src/app/index.js',
    bind: './src/bind/index.js',
  },
  // 输出
  output: {
    filename:'[name]/[name].bundle.js',
    chunkFilename:'[name].chunk.js',
    // path: __dirname + '/dist'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: [{
              loader: "babel-loader",
              options: { presets: ["react","es2015"] }
            }],
            exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: extractCSS.extract(['css-loader']),
          include: /src/
        }
    ]
  },
  // 插件...
  plugins: [
    new cleanPlugin(['dist']),
    extractCSS,
    new htmlPlugin({
      title: 'react-demo',
      filename: './app/index.html',      // 生成的路径.
      template: './src/app/index.html',  // src的实际路径
      inject: 'body',
      chunks:['app']
    }),
    new htmlPlugin({
      title: 'react-demo bind',
      filename: './bind/index.html',
      template: './src/bind/index.html',  // src的实际路径
      inject: 'body',
      chunks:['bind']
    }),
    new manifestPlugin()
  ],
  resolve: {
    extensions: ['*','.js', '.json']
  }
}