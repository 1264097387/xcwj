import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Collec from '@/views/Collec'
import About from '@/views/About'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from "../views/Register.vue"
import Personal from "../views/Personal.vue"
import Details from '@/views/Details'
import Fenxiang from '@/views/Fenxiang'
Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Home', component: Home
  },
  {
    path: '/fenxiang',name: 'Fenxiang',component:Fenxiang
  },
  {
    path: '/details/:lid',name:'Details', component:Details,props:true
  },
  {
    path: '/search', name: 'Search', component: Search
  },
  {
    path: '/collec', name: 'Collec', component: Collec
  },
  {
    path: '/login', name: 'Login', component: Login
  },
  {
    path: "/register",name: 'Register',component: Register
  },
  {
    path: "/personal",name:'Personal',component: Personal
  },
  {
    path: '/about', name: 'About', component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
