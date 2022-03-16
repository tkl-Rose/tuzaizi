import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




//element-ui的按需引入
import {
  Button,
  MessageBox,
  Message,
  Input
} from 'element-ui';
// Vue.component(Button.name, Button);    上线两种形式一样
Vue.use(Button)
Vue.use(Input)

//这就是第二类组件的注册方式
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

import * as API from '@/api'

Vue.config.productionTip = false



const vm = new Vue({
  router,
  store, // 和vm对象进行关联
  beforeCreate() { // 注册全局事件总线
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
}).$mount('#app')

console.log('mainvm', vm);