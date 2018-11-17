const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {  // 本地开发服务器配置
    contentBase: 'public',  // 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
    port: '8080', // 监听端口
    inline: true,  // 当源文件改变时会自动刷新页面
    historyApiFallback: true,  // 开发单页应用时非常有用，依赖于HTML5 history Api, 如果设置为true，则所有的跳转将指向index.html
  },
  entry: __dirname + '/app/main.js',  // 唯一入口文件
  output: {
    path: __dirname + '/build',   // 打包后的文件存放的地方
    filename: 'bundle.js'  // 打包后输入文件的文件名
  },
  // loaders
  // 通过使用不同的loader, webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如分析转换less为css，或者把下一代的js文件转换为现代浏览器兼容的js文件，对react的开发而言，合适的loaders可以把react种用到的jsx文件转换为js文件
  // loaders需要单独安装并且需要在webpack.config.js中的modules关键字下进行配置，配置包括以下几方面：
  // - test: 一个用于匹配loaders所处理文件的拓展名的正则表达式（必须）
  // - loader: loader的名称（必须）
  // - include/exclude 手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
  // - query 为loaders提供额外的设置选项（可选）

  // babel
  // babel是一个编译js的平台，它可以编译代码以达到以下目的：
  // - 能使用最新的ES语法，而不用管新标准是否被当前使用的浏览器完全支持
  // - 能使用基于js进行了拓展的语言，比如react的jsx
  // babel

  // webpack提供两个工具处理样式表
  // css-loader 使你能供使用类似@import和url(...)的方法实现require()的功能
  // style-loader将所有的计算后的样式加入页面中
  // 二者组合在一起使你能够把样式表嵌入webpack打包后的js文件中


  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [
          //     'env','react'  // 支持es6及jsx语法
          //   ]
          // }
        },
        exclude: /node_modules/,
      },
      {
        test: /(\.css$)/,
        use: [   // 同一文件引入多个loader必须一条一条，因为每一项loader都是可以配置options的
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            // css module 也是一个很大的主题，可以了解更多
            options: {
              modules: true, // 指定启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]'  //指定css的类名格式
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      // 通常情况下，css会和js打包到同一个文件中，并不会打包成一个单独的css文件，不过通过合适的配置webpack也可以把css打包为单独的文件
    ]
  },

  // babel 处理js的平台
  // postcss 处理css的平台

  // plugins 插件 数组
  // webpack有很多内置插件，也有很多第三方插件，可以完成更加丰富的功能
  // 和loaders的区别：
  // - loaders是在打包构建过程中用来处理源文件的（jsx,scss,less），一次处理一个，
  // - 插件并不直接操作单个文件，它直接对整个构建过程起作用
  plugins: [
    new Webpack.BannerPlugin('authored by cellerchan'),  // 打包后的js文件(现在是bundle.js)顶部添加版权注释
    new HtmlWebpackPlugin({  // 作用：依据一个简单的index.html模板，自动添加所依赖的css,js,favicon等文件，生成一个自动引用打包后的js文件的新的index.html,这在每次生成的js文件名称不同时非常有用
      template: __dirname + '/app/index.teml.html'  // new一个此插件的实例, 并传入相关的参数
    }),
    new Webpack.HotModuleReplacementPlugin(),  // 热加载
    
  ]
}