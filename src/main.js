import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 三级联动组件
import TypeNav from '@/components/TypeNav'
import Pagnation from '@/components/Paganation'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'

// 引入mockjs
import '@/mock/mockServe'
import { reqCategoryList } from '@/api'

import "swiper/css/swiper.css"
Vue.component('TypeNav', TypeNav)
Vue.component('Pagnation', Pagnation)
Vue.use(Button)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
