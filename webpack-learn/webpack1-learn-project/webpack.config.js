const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { //多个页面入口
        main: "./src/index.js", //主页面
        page2: "./src/pages/page2/index.js",
        page3: "./src/pages/page3/index.js"
    },
    output: {
        path: './build',
        filename: "js/[name]-[chunkhash].js" //打包的文件使用name+chunkhash命名一遍更新迭代和保密,js会放在js文件夹下
    },
    plugins: [
//对各html文件进行处理和打包,多个页面就多次调用插件函数HtmlwebpackPlugin对每个html文件进行处理即可
//主页面
        new HtmlwebpackPlugin({
            template: 'index.html', //对根目录下的那个html文件打包并插入上面的js
            filename: 'index.html', //多个页面必须要有不同的template和生成的filename，否则只生成一个文件
            chunks: ['main'] //页面用到了哪些入口文件，每个页面最好只引用自己需要的js(对应上面的entry写)
        }),
//page2
        new HtmlwebpackPlugin({
            template: 'page2.html',
            filename: 'page2.html',
            chunks: ['page2']
        }),
//page3
        new HtmlwebpackPlugin({
            template: 'page3.html',
            filename: 'page3.html',
            chunks: ['page3']
        })
    ]
}