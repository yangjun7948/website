import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
          title: '小猿智能科技 - 专业软件定制方案服务商',
          description: '十年研发经验，为企业提供一站式软件定制开发解决方案',
          keywords: '软件定制,CRM系统,WMS系统,溯源平台,智能客服'
        }
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      }
    ]
  },
  // 其他不需要主布局的路由
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
