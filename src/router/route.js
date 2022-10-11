import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'

export default [
  {
    path:'/',
    redirect: 'home'
  },
  {
    path: '/trade',
    name: 'trade',
    component: Trade,
    meta: { show: true }
  },
  {
    path: '/paysuccess',
    name: 'paysuccess',
    component: PaySuccess,
    meta: { show: true }
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
    meta: { show: true }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart,
    meta: { show: true }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/detail/:skuid',
    name: 'detail',
    component: Detail,
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