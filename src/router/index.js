import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import TareaDetalle from '../components/TareaDetalle'
import TareaMaestro from '../components/TareaMaestro'
import TipoMaestro from '../components/TipoMaestro'
import EjecucionDetalle from '../components/EjecucionDetalle'
import EjecucionMaestro from '../components/EjecucionMaestro'

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
      path: '/TareaDetalle/',
      name: 'TareaDetalle',
      component: TareaDetalle
    },
    {
      path: '/TareaDetalle/:id',
      name: 'TareaDetalle',
      component: TareaDetalle
    },
    {
      path: '/TipoMaestro/',
      name: 'TipoMaestro',
      component: TipoMaestro
    },
    {
      path: '/EjecucionMaestro/',
      name: 'EjecucionMaestro',
      component: EjecucionMaestro
    },
    {
      path: '/EjecucionDetalle/',
      name: 'EjecucionDetalle',
      component: EjecucionDetalle
    },
    {
      path: '/EjecucionDetalle/:id',
      name: 'EjecucionDetalle',
      component: EjecucionDetalle
    }
  ],
  mode: 'hash'
})
