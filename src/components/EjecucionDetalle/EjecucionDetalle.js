var _ = require('lodash');
export default {
  name: 'Detail',
  data() {
    return {
      ejecucionFiltrada: {},
      ejecucionFiltradaBackUp: {},
      isEditable: false
    }
  },
  created (){
  	this.getID()
  },
  watch: {
    '$route': 'getID'
  },
  methods: {
    cancelarEdicion () {
      this.ejecucionFiltrada = JSON.parse(JSON.stringify(this.ejecucionFiltradaBackUp))
    },
    activarEdicion () {
      if (this.isEditable) {
        this.cancelarEdicion()
      }
    },
    getID() {
      const _self = this
      this.idEjecucion = this.$route.params.id
      if(this.$route.params.id){
        $.ajax({
          type: 'GET',
          url: 'http://localhost:51952/api/Ejecuciones/' + this.idEjecucion,
          success: function (response) {
            _self.ejecucionFiltrada = JSON.parse(JSON.stringify(response))
            _self.ejecucionFiltradaBackUp = JSON.parse(JSON.stringify(response))
            this.isEditable=false;
          },
          error: () => {
            alert('Problemas al cargar el listado')
            debugger
          }
        })
      }else{
        this.isEditable = true;
      }
    },
    guardarDatos () {
      let _this = this
      $.ajax({
        type: 'POST',
        url: 'http://localhost:51952/api/Ejecuciones/',
        data: _this.ejecucionFiltrada,
        success: (response) => {
          console.log(response)
          _this.ejecucionFiltrada = {};
          _this.$route.router.go('/EjecucionMaestro');
        },
        error: () => {
          console.log('Error insercion')
          debugger
        }
    })
    },actualizarDatos () {
      let _this = this
      $.ajax({
        type: 'PUT',
        url: 'http://localhost:51952/api/Ejecuciones/'+this.idEjecucion,
        data: _this.ejecucionFiltrada,
        success: (response) => {
          console.log(response)
          _this.ejecucionFiltrada = {};
          _this.$route.router.go('/EjecucionMaestro');
        },
        error: () => {
          console.log('Error insercion')
          debugger
        }
    })
    }
  },
  components: {

  }
}
