# app.js:11 Uncaught TypeError: Cannot read property 'Component' of undefined
- 忘记在webpack.config.js里配置
  resolve: {
    extensions: ['*','.js', '.json']
  }

# arning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
  react-router-dom


# react-router ，用basename="/app" , 子route, /log,  然后浏览器访问/app/log就访问不了，为什么?
 web-dev-server history 支持
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