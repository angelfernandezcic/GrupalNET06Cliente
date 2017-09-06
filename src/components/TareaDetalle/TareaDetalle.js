var _ = require('lodash');
export default {
  name: 'Detail',
  data() {
    return {
      tareaFiltrada: {},
      tareaFiltradaBackUp: {},
      isEditable: false
    }
  },
  created (){
  	this.getID()
  },
  watch: {
    '$route': 'getID'
  },
  computed: {
    disableUpdate: function () {
      var propiedades = [
        "Nombre",
        "Descripcion",
        "Tipo",
        "Fecha",
        "Activa",
        "Programacion",
        "Formato"
      ];
      var disable = true;
      for (var i = 0; i < propiedades.length; i++) {
        if (this.tareaFiltrada[propiedades[i]] != this.tareaFiltradaBackUp[propiedades[i]]) {
          disable = false;
          break;
        }
      }
      return (disable || !this.isEditable);
    }
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
      if(this.$route.params.id){
        $.ajax({
          type: 'GET',
          url: 'http://localhost:51952/api/Tarea/' + this.idTarea,
          success: function (response) {
            _self.tareaFiltrada = JSON.parse(JSON.stringify(response))
            _self.tareaFiltradaBackUp = JSON.parse(JSON.stringify(response))
            _self.isEditable=false;
          },
          error: (error) => {
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
        url: 'http://localhost:51952/api/Tarea/',
        data: _this.tareaFiltrada,
        success: (response) => {
          _this.tareaFiltrada = {};
          _this.$router.push('/TareaMaestro');
        },
        error: (error) => {
          debugger
        }
    })
    },
    actualizarDatos () {
      let _this = this
      bootbox.confirm({
        message: "¿Seguro que desea actualizar?",
        buttons: {
            confirm: {label: 'Si',className: 'btn-success'},
            cancel: {label: 'No',className: 'btn-danger'}
        },
        callback: function (result) {
          if(result){
            $.ajax({
              type: 'PUT',
              url: 'http://localhost:51952/api/Tarea/'+_this.idTarea,
              data: _this.tareaFiltrada,
              success: (response) => {
                _this.tareaFiltrada = {};
                _this.$router.push('/TareaMaestro');
              },
              error: (error) => {
                debugger
              }
            })
          }
        }
    });
    }
  },
  components: {

  }
}
