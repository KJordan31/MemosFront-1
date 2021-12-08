import { createRouter, createWebHistory } from 'vue-router'
import Principal from '../views/Principal.vue'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/bandeja',
    name: 'NavCorreo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NavCorreo.vue'),
    children : [
      {
        path: 'nuevo',
        name: 'NuevoCorreo',
        component: () => import( '../views/NuevoCorreo.vue'),
      },
      {
        path: 'entrada',
        name: 'Bandeja',
        component: () => import( '../views/Bandeja.vue'),
      }
    ]
  },
  {
    path: '/buscar',
    name: 'Buscar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Buscar.vue'),
   
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracion.vue')
  },
  {
    path: '/administracion',
    name: 'Administration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "administracion" */ '../views/Administration.vue'),
    children : [
      {
        path: 'catalogo',
        name: 'Catalogs',
        component: () => import( '../views/AdministrationCatalogs.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
