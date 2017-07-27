const path = require('path');
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
    }
}