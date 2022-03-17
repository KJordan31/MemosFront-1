import { createRouter, createWebHistory } from 'vue-router'
import Principal from '../layout/dashboardLayout.vue'
import { auth } from '/firebase'



import loginRouter from '../modules/Auth/router/index'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal,
    meta: {
        requiresAuth: true
    },
    children:[
      {
        path: '',
        name: 'Home',
        component: () => import( '../views/Principal.vue'),
      },
      {
        path: '/usuario',
        name: 'Usuario',
        component: () => import(/* webpackChunkName: "Usuario" */ '../views/Usuario.vue'),
      },
      {
        path: '/bandeja',
        name: 'NavCorreo',
        component: () => import(/* webpackChunkName: "bandeja" */ '../views/NavCorreo.vue'),
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
          },
          {
            path: 'correo',
            name: 'Correo',
            component: () => import( '../views/Correo.vue'),
          }
        ]
      },
      {
        path: '/configuracion',
        name: 'Configuracion',
        component: () => import(/* webpackChunkName: "Configuration" */ '../views/Configuracion.vue')
      },
      {
        path: '/memorandum',
        name: 'Memorandum',
        component: () => import(/* webpackChunkName: "Configuration" */ '../views/Memorandum.vue')
      },
      
      {
        path: '/buscar',
        name: 'Buscar',
        component: () => import(/* webpackChunkName: "Buscar" */ '../views/Buscar.vue'),
       
      },
      {
        path: '/modificar',
        name: 'ModUsuario',
        component: () => import(/* webpackChunkName: "about" */ '../views/ModUsuario.vue'),
       
      },
      {
        path: '/plantilla',
        name: 'Plantilla',
        component: () => import(/* webpackChunkName: "about" */ '../views/Plantillas.vue'),
        children : [
          {
            path: 'seleccion',
            name: 'Seleccion',
            component: () => import( '../views/VistaPlantilas.vue'),
          }
        ]
       
      },
      {
        path: '/administracion',
        name: 'Administration',
        
        component: () => import(/* webpackChunkName: "administracion" */ '../views/Administration.vue'),
        children : [
          {
            path: 'catalogo',
            name: 'Catalogs',
            component: () => import( '../views/AdministrationCatalogs.vue'),
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    ...loginRouter
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }


  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router
