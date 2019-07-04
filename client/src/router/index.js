import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '../components/User/Index.vue'
import UserCreate from '../components/User/CreateUser'
import UserEdit from '../components/User/EditUser'
import UserShow from '../components/User/ShowUser'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/user', //หมายถึงใช้ที่เรียกต่อจาก url หลัก ซึ่งในที่นี่คือ http://localhost:8080 นั่นเอง
      name: 'user',// ก็คือชื่อ ตอนนี้เรายังไม่ได้ใช้ แค่รู้ว่าเอาไว้ อ้างอิงครับ เสร็จแล้ว เมื่อถูก เรียกมาตาม path แล้ว เราก็ส่ง component ของเราไปให้ครับ
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
    path:'/user/edit',
    nmae: 'user-edit',
    component:UserEdit
    },
    {
      path:'/users',
      name: 'user',
      component: UserShow
    }
  ]
})

// {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }