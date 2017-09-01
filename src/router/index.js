import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import Tarea from '../components/Tarea'
import Tipos from '../components/Tipos'
import Ejecuciones from '../components/Ejecuciones'

export default new Router({
  routes: [
    {
      path: '/',
      force: true,
      name: 'Home',
      component: Home
    },
    {
      path: '/Tarea/',
      name: 'Tarea',
      component: Tarea
    },
    {
      path: '/Tipos/',
      name: 'Tipos',
      component: Tipos
    },
    {
      path: '/Ejecuciones/',
      name: 'Ejecuciones',
      component: Ejecuciones
    }
  ],
  mode: 'hash'
})
