
### benchmark tests 基准测试.

### index.html
htmlwebpackplugin会自动生成index.html, 覆盖自己编写的index.html.
### 指定环境
library通过与process.env.NODE_ENV环境变量相关,以绝对library应该应用哪些内容, 当处于生产环境,可能添加额外的日志和测试,
可以使用webpack内置的DefinePlugin为所有的依赖定义这个变量.
### 代码发生变化后自动编译代码.
- webpack watch mode
- [webpack dev server](https://doc.webpack-china.org/configuration/dev-server)
- webpack dev middleware

webpack-dev-middleware 是一个warpper(容器),它可以把webpack处理后的问题就传递给一个服务器(server),
webpack-dev-server内部使用了webpack-dev-middleware,

```code
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
```
### HMR (Hot Module Replacement)
运行在运行时更新各种模块,而无需进行完全刷新,
### Dependency Graph 依赖图。
一个文件依赖于另一个文件,webpack就把此视为文件之间有依赖关系,webpack 从入口起点开始，递归地构建一个依赖图,这个依赖图包含着应用程序所需的每个模块,

### Code Splitting
1. entry 手动分离代码
2. CommonsChunkPlugin去重和分离chunk,
3. 模块的内联函数调用分离代码。

些对于代码分离很有帮助的插件和 loaders：
1. ExtractTextPlugin
2. bundle-loader
3. promise-loader


dynamic import:


webpack-chart: webpack 数据交互饼图。
webpack-visualizer: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
webpack-bundle-analyzer: 一款分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户。

- [react code splitting](https://reacttraining.com/react-router/web/guides/code-splitting);
- [vue code splitting](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/);
- [angular code splitting](https://medium.com/@var_bin/angularjs-webpack-lazyload-bb7977f390dd)


### Tree Shaking()
[Tree Shaking](https://doc.webpack-china.org/guides/tree-shaking) remove unsued code, ES2015的静态特性.
删除未引用代码(dead code)的压缩工具(minifier) - UglifyJSPlugin
npm install --save-dev uglifyjs-webpack-plugin
[webpack-rollup-loader](https://github.com/erikdesjardins/webpack-rollup-loader)


### 生产环境构建
development 和production
in development env: live reloading, hot module replacement的source map 和localhost server.
in production env: small bundle, small sourcemap, 更优化的资源,
彼此独立的配置, 保留一个通用的配置, 使用webpack-merge工具



### plugins;
- html-webpack-plugin:
    new HtmlWebpackPlugin({
      filename: 'bind/index.html',
      template: './bind/index.html',
      inject: true,
      chunks: ['bind'],   // 一定要[] 数组形式.
    }),

- clean-webpack-plugin:

      CleanPlugin(['dist'], { root: path.resolve(__dirname, '../') }),