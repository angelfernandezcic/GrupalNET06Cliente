var _ = require('lodash');
export default {
  name: 'TipoDetalle',
  data() {
    return {
      tipoFiltrada: {},
      tipoFiltradaBackUp: {},
      isEditable: true
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
      this.tipoFiltrada = JSON.parse(JSON.stringify(this.tipoFiltradaBackUp))
    },
    activarEdicion () {
      if (this.isEditable) {
        this.cancelarEdicion()
      }
    },
    getID() {
      const _self = this
      this.idTipo = this.$route.params.id
      $.ajax({
        type: 'GET',
        url: 'http://localhost:51952/api/TipoTareas/'+this.idTipo,   
        success: function (response) {
          _self.tipoFiltrada = JSON.parse(JSON.stringify(response))
          _self.tipoFiltradaBackUp = JSON.parse(JSON.stringify(response))
        },
        error: function () {
          alert('Problemas al cargar el listado')
          debugger
        }
      })
    },
    guardarDatos () {
      let _this = this
      console.log(_this.itemInsercion)
      $.ajax({
        type: 'POST',
        url: 'http://localhost:51952/api/TipoTareas/',
        data: _this.itemInsercion,
        success: (response) => {
          console.log(response)
        },
        error: function () {
          console.log('Error insercion')
          debugger
        },
        complete: function () {
          _this.getTodos()
        }
    })
    }
  },
  components: {

  }
}
