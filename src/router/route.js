import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Register from '@/views/Register'
import Detail from '@/views/Detail'

export default [
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