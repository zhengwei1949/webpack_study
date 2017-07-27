const path = require('path');
const htmlwp = require('html-webpack-plugin');

module.exports = {
    entry:'./src/main.js',//指定打包的入口文件
    output:{
        path:path.resolve(__dirname,'dist'),//打包后的文件所在的文件夹路径
        filename:'build.js'//打包后的js的名字
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.less$/,//打包less文件
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif)$/,//打包url请求的资源文件
                loader:'url-loader?limit=40000'//limit表示限制图片的大小为40k,小于则以base64形式存，大于则还是保持图片形式
            }
        ]
    },
    plugins:[
        new htmlwp({
          title: '首页',  //生成的页面标题<head><title>首页</title></head>
          filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
          template: 'index1.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
        })
    ]
}