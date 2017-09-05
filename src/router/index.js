import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import TareaMaestro from '../components/TareaMaestro'
import TareaDetalle from '../components/TareaDetalle'
import TipoMaestro from '../components/TipoMaestro'
import TipoDetalle from '../components/TipoDetalle'
import EjecucionMaestro from '../components/EjecucionMaestro'
import EjecucionDetalle from '../components/EjecucionDetalle'

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
    },
    {
      path: '/TipoMaestro/',
      name: 'TipoMaestro',
      component: TipoMaestro
    },
    {
      path: '/TipoDetalle/',
      name: 'TipoDetalle',
      component: TipoDetalle
    },
    {
      path: '/TipoDetalle/:id',
      name: 'TipoDetalle',
      component: TipoDetalle
    }
  ],
  mode: 'hash'
})
