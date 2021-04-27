import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        path: 'products',
        name: 'product detail',
        component: () => import('../views/product-detail.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'products/add',
        name: 'product create',
        component: () => import('../views/product-create.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'products/edit',
        name: 'product edit',
        component: () => import('../views/product-edit.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'products/delete',
        name: 'product delete',
        component: () => import('../views/product-delete.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'banners',
        name: 'banner detail',
        component: () => import('../views/banner-detail.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'banners/add',
        name: 'banner create',
        component: () => import('../views/banner-create.vue'),
        meta: {
          auth: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      auth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.access_token
  if (isLogged) {
    if (!to.meta.auth) next('/admin')
    else next()
  } else {
    if (!to.meta.auth) next()
    else next('/login')
  }
})

export default router
