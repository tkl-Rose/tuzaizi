//引入并使用插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)


//原型上修改push方法
const originPush = VueRouter.prototype.push // 先将之前的存储到一个变量当中
const originReplace = VueRouter.prototype.replace // 同上

// 修改VueRouter原型上的push 用于解决重复跳转时报错的问题
VueRouter.prototype.push = function (location, okCallBack, errCallBack) {
  if (okCallBack === undefined && errCallBack === undefined) {
    // 上面的判断成立的话，表示没有传递这两个参数
    originPush.call(this, location).catch(() => {}) // 统一处理报错的问题 一劳永逸
  } else {
    originPush.call(this, location, okCallBack, errCallBack)
  }
}

// 修改VueRouter原型上的replace 用于解决重复跳转时报错的问题
VueRouter.prototype.replace = function (location, okCallBack, errCallBack) {
  if (okCallBack === undefined && errCallBack === undefined) {
    // 上面的判断成立的话，表示没有传递这两个参数
    originReplace.call(this, location).catch(() => {}) // 统一处理报错的问题 一劳永逸
  } else {
    originReplace.call(this, location, okCallBack, errCallBack)
  }
}

// 3. 创建路由实例并添加路由规则 
const router = new VueRouter({
  mode: 'history', // 设置路由模式  不要#
  // routes:routes
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(to,from);
    // to 表示要跳转到的页面 是一个路由规则对象 
    // from 表示从哪里跳转过来 也是一个路由规则对象
    // savedPosition 记录之前的页面位置  当浏览器的前进或后退按钮被单击的时候会触发
    // console.log(savedPosition);
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router