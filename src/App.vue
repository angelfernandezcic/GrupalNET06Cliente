<template>
  <div id="app">
    <headerComp :header="header"></headerComp>
     <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import './assets/css/style.css'
export default {
  name: 'app',
  data () {
    return {
      header: {
        logo: require('./assets/img/checklist.png'),
        nombre: 'registo_tareas'
      }
    }
  },
  components: {
    'headerComp': require('./components/Header/')
  }
}
</script>

