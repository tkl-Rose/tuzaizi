import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//css样式引入
import './common/common.scss'

// 引入swiper样式文件
import 'swiper/css/swiper.min.css'

//引入vue视频插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

//element-ui的按需引入
import {
  Pagination,
  Checkbox,
  Button,
  MessageBox,
  Message,
  Input,
  Autocomplete,
  Carousel,
  Backtop
} from 'element-ui';
// Vue.component(Button.name, Button);    上线两种形式一样
Vue.use(Button)
Vue.use(Input)
Vue.use(Autocomplete)
Vue.use(Carousel)
Vue.use(Backtop)
Vue.use(Checkbox)
Vue.use(Pagination)

//这就是第二类组件的注册方式
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

import './mock/mockServer' // 引入进来之后开启服务器  相当于已经开启服务器了

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