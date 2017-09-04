import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import TareaDetalle from '../components/TareaDetalle'
import TareaMaestro from '../components/TareaMaestro'
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
      path: '/TareaMaestro/',
      name: 'TareaMaestro',
      component: TareaMaestro
    },
    {
      path: '/TareaDetalle/:id',
      name: 'TareaDetalle',
      component: TareaDetalle
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
