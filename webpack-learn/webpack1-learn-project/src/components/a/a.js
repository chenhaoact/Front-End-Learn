/**
 * Created by chenhaoact on 2017/6/11.
 */
import tpl from './a.html'

function a() {
    /**
     * 这里的组件直接使用es6的模板引入html的模板代码
     * */
    return {
        name:'a',
        tpl: tpl
    }
}

export default a;