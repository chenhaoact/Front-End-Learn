/**
 * Created by chenhaoact on 2017/6/6.
 */
import a from './components/a/layer';

//引入css
import './css/common.css'

//构造函数
const App = function () {
  const dom = document.getElementById('container')
  //一个（带html元素，样式与js行为的）类就可以作为一个组件，这里进行实例化
  const a1 = new a()

  dom.innerHTML = a1.tpl
}

//实例化一个实例并执行
new App()
