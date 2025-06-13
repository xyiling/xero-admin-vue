import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useUserStore } from '@/stores/useUserStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const token = userStore.token; //从cookies中获取是否已登陆过的信息
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({
        replace: true,
        path: '/login',
      })
    }
  }
})

export default router
