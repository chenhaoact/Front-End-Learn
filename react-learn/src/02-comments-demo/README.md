一个react实现的简单的评论组件，可以浏览以往的评论列表，也可以发表评论。

源代码参考：https://github.com/reactjs/react-tutorial

为了简化，本demo的前端使用的是直接加载cdn上的react等库的js文件引用依赖，
未通过npm安装依赖和webpack搭建环境。

但提供后端服务采用node的express搭建（代码在server.js中），
需要npm安装express，body-parser，具体可见package.json

执行 node server.js 即可启动服务,打开http://localhost:3000/看效果

具体的react代码分析见public/scripts下的example.js

