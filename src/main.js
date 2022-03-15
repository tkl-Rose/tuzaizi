import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import * as API from '@/api'

const vm = new Vue({
  router,
  store, // 和vm对象进行关联
  render: h => h(App),
}).$mount('#app')

console.log('mainvm', vm);