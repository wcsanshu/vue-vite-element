import { createRouter, createWebHashHistory } from 'vue-router'
import { ElMessage } from 'element-plus'

//引入首页
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: "首页" },
    component: Home,
    redirect: "/welcome",
    children: [
      {
        path: '/welcome',
        name: "欢迎页面",

        component: () => import('../views/welcome/welcome.vue')
      },
      {
        path: '/system/user',
        name: '用户管理',
        meta: { title: "用户管理", requireAuth: true },
        component: () => import('@/views/usersystem/user.vue')
      }

    ]
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem('token')
      if (token) {
        next({
          path: '/'
        })
      } else {
        next()
      }
    },
    component: () => import('../views/login/login.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫 
router.beforeEach((to, from, next) => {

  // 获取token
  let token = localStorage.getItem('token')
  // 如果进入需要登录权限的页面
  if (to.meta.requireAuth == true) {
    // 获取不到token 
    if (!token) {
      //  则调到login页面进行登录
      ElMessage.warning('请先进行登录哦~');
      next({
        path: '/login'
      })
    } else {
      // 获取到token 则进行下一步
      return next();
    }
  } else {
    // 不需要登录权限的路由直接进行下一步                   
    return next();
  }
})


export default router
