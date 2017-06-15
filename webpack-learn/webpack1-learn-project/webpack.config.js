//使用nodejs的path模块确定路径，详细参考：https://nodejs.org/docs/latest/api/path.html 和 https://www.npmjs.com/package/path
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { //多个页面入口
    main: "./src/index.js", //主页面
    page2: "./src/pages/page2/index.js",
    page3: "./src/pages/page3/index.js"
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "js/[name]-[chunkhash].js" //打包的文件使用name+chunkhash命名一遍更新迭代和保密,js会放在js文件夹下
  },
  module: {
    loaders: [
      {
        /**
         * 注意，这里是正则表达式，不是把正则表达式写在''字符串里，那样匹配不了任何文件，
         * loader也就不起任何作用
         * */
        test: /\.js$/,
        loader: 'babel-loader', //下边可以写query指定babel配置，这里也可以将babel配置放到了.babelrc文件中
        query:{
          presets: ['env']
        },
        include: [ //解析哪一部分
          //path.resolve(__dirname,得到的运行时的绝对路径，后面可在加上该路径下的相对路径
          path.resolve(__dirname, "src")
        ],
        //loader处理的排除范围哪些不需要处理,node_modules默认是排除的，是否指定不会影响打包速度
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        //css-loader,让webpack支持处理css文件,js等文件中就可以引用css,参考：https://github.com/webpack-contrib/css-loader
        //style-loader,使css在html中生效，css生成style标签插入到html的head中.importLoaders=1参数只import引入的文件也使用后面几个loader处理
        //postcss-loader 支持postcss处理，https://github.com/postcss/postcss-loader
        //下面的！串联写法是经过postcss-loade再经过css-loader处理完的css文件的内容再通过style-loader插入html的style标签中（！后的先调用）
        // loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        //使用less-loader时css-loader不用加?importLoaders=几的
        // loader: 'style-loader!css-loader!postcss-loader!less-loader'
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.scss$/,
        //使用less-loader时css-loader不用加?importLoaders=几的
        // loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.html$/,
        //使用less-loader时css-loader不用加?importLoaders=几的
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loaders: [
          //使用file-loader对上面这些文件类型进行打包处理,
          // 打包之后文件在css中可以直接用相对路径，目前也可以在模板中使用相对路径
          //加？参数等效于写query后在里边配置各属性，一般多个loader连用写在loaders属性里时简易这样加参数去配置query
          //配置打包的文件名为name-hash值.文件后缀名，入口相关文件引用到的资源文件才会被打包
          'file-loader?name=assets/[name]-[hash].[ext]',
          //image-webpack-loader配合file-loader或url-loader，
          // 可以压缩图片文件大小,默认可以压缩几倍到几十倍，压缩比与质量也可以灵活配置
          'image-webpack-loader'
        ]
      }
    ]
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
