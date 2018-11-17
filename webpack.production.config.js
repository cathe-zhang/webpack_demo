const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',  // 模式 development 或 production
  entry: __dirname + '/app/main.js',
  // optimization: {
  //   minimize: true,
  // },
  output: {
    path: __dirname + '/build',
    filename: 'bundle_[hash].js'
  },
  devtool: 'null',  // 设置为null可以大大压缩打包代码
  devServer: {
    contentBase: '/public',  // 本地服务器所加载的页面所在的目录
    historyApiFallback: true,  // 不跳转
    inline: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        // })
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('powered by cellerchan'),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.teml.html',  // new一个插件实例，并传入相关参数
    }),
    new webpack.HotModuleReplacementPlugin(),  // 热加载插件
    // new webpack.optimize.OccurrenceOrderPlugin(),  // 为组件分配id，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的Id
    // new webpack.optimization.minimize(),  // 压缩js代码
    // new ExtractTextPlugin("style.css"),  // 分离css和js文件
    new CleanWebpackPlugin('build/*.*',{
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
}