var _ = require('lodash');
export default {
  name: 'Detail',
  data() {
    return {
      tareaFiltrada: {},
      tareaFiltradaBackUp: {},
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
      this.tareaFiltrada = JSON.parse(JSON.stringify(this.tareaFiltradaBackUp))
    },
    activarEdicion () {
      if (this.isEditable) {
        this.cancelarEdicion()
      }
    },
    getID() {
      const _self = this
      this.idTarea = this.$route.params.id
      $.ajax({
        type: 'GET',
        url: 'http://localhost:51952/api/Tarea/'+this.idTarea,   
        success: function (response) {
          _self.tareaFiltrada = JSON.parse(JSON.stringify(response))
          _self.tareaFiltradaBackUp = JSON.parse(JSON.stringify(response))
        },
        error: () => {
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
        url: 'http://localhost:51952/api/Tarea/',
        data: _this.itemInsercion,
        success: (response) => {
          console.log(response)
        },
        error: () => {
          console.log('Error insercion')
          debugger
        },
        complete: () => {
          _this.getTodos()
        }
    })
    }
  },
  components: {

  }
}
