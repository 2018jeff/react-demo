/**
 * 开发环境配置
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


const dev = merge(common,{
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    // publicPath: './dist',
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: {
      rewrites: [
        // shows views/landing.html as the landing page
        { from: /^\/*/, to: '/app/index.html' },
        // shows views/subpage.html for all routes starting with /subpage
        { from: /^\/app/, to: '/app/index.html' },
        // shows views/404.html on all other pages
        { from: /./, to: '/views/404.html' },
      ],
    },
    port: 8080, //如果省略，默认8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ]
});
console.log('prod entry', dev);
module.exports = dev;
