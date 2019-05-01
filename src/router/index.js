import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Details from '@/components/details'
import Details1 from '@/components/details1'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Upload from '@/components/Upload'
import SearchDetails from '@/components/search-details'
import UserPage from '@/components/UserPage'
import UserPage02 from '@/components/UserPage02'
import UserPage0201 from '@/components/UserPage0201'
import UserPage03 from '@/components/UserPage03'
import UserPage04 from '@/components/UserPage04'
import UserPage05 from '@/components/UserPage05'
import UserPage0501 from '@/components/UserPage0501'
import UserPage0502 from '@/components/UserPage0502'
import UserPage0503 from '@/components/UserPage0503'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/HomePage',
      component: HomePage
    }, {
      path: '/Details/:id',
      component: Details
    }, {
      path: '/Register',
      component: Register
    }, {
      path: '/Login',
      component: Login
    },{
      path: '/Upload',
      component: Upload
    },{
      path: '/SearchDetails/:id',
      component: SearchDetails
    },{
      path: '/UserPage',
      component: UserPage
    },{
      path: '/UserPage03',
      component: UserPage03
    },{
      path: '/UserPage04',
      component: UserPage04
    },{
      path: '/UserPage02',
      component: UserPage02
    },{
      path: '/UserPage0201',
      component: UserPage0201
    }, {
      path: '/Details1',
      component: Details1
    },{
      path: '/UserPage05',
      component: UserPage05
    },{
      path: '/UserPage0501',
      component: UserPage0501
    },{
      path: '/UserPage0502',
      component: UserPage0502
    },{
      path: '/UserPage0503',
      component: UserPage0503
    }
  ]
})
