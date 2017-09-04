import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import TareaDetalle from '../components/TareaDetalle'
import TareaMaestro from '../components/TareaMaestro'
import TipoMaestro from '../components/TipoMaestro'
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
      path: '/Ejecuciones/',
      name: 'Ejecuciones',
      component: Ejecuciones
    }
  ],
  mode: 'hash'
})
