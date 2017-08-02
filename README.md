# 注意点
- hash:特定于整个构建过程的
- chunkhash：特定于每个文件内容的
- 一行代码理解：loader : function(content) { return newContent}
- 如果修改的是css文件，则会局部刷新，如果修改的是客户端的js文件，则浏览器整页会刷新，如果修改的是后台代码，则后台服务器会重启，再刷新前端整页
- webpack-dev-server本质上是一个静态资源服务器
- webpack-dev-middleware和webpack-hot-middleware的静态资源服务只用于开发环境。到了线上环境，应该使用express.static()。

## vue-cli中的webpack模板的说明
- build:存放用于编译用的webpack配置与相关的辅助工具代码
- config 存放三大环境配置文件，用于设定环境变量和必要的路径信息
- test 存放e2e测试与单元测试文件以及相关的配置文件
- static 存放项目所需要的其他静态资源文件
- dist 存放运行npm run build指令后的生产环境输出文件，可直接部署到服务器对应的静态资源文件夹内，该文件夹只有运行build后才会生成

## 如何知道你要处理的资源用哪种loader?
- https://webpack.github.io/docs/list-of-loaders.html#basic

## 参考
- [参考手册](https://doc.webpack-china.org/configuration)
- https://vue-loader.vuejs.org/zh-cn/
- http://vuejs-templates.github.io/webpack/
- https://tutorialzine.com/2017/04/learn-webpack-in-15-minutes
- [webpack解惑：require的五种用法](http://www.cnblogs.com/laneyfu/p/6262321.html)
