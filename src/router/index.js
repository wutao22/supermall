import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Register from '@/views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/search/:keyword',
    name: 'search',
    component: Search,
    meta: { show: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { show: false }
  }
]

const router = new VueRouter({
  routes
})

export default router
