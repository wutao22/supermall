import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

export default router
