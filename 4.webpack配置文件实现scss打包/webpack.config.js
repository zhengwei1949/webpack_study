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
                test:/\.scss$/,//打包scss文件
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    }
}