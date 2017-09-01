<template>
  <div id="app">
    <headerComp :header="header"></headerComp>
    <router-view></router-view>
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

