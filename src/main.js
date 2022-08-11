import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 三级联动组件
import TypeNav from '@/components/TypeNav'

// 引入mockjs
import '@/mock/mockServe'
import { reqCategoryList } from '@/api'

import "swiper/css/swiper.css"
Vue.component('TypeNav', TypeNav)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
