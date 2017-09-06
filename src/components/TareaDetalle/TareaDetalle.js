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
    notValid: function () {
      var mensaje = "";
      if (!this.tareaFiltrada.Nombre || this.tareaFiltrada.Nombre.length <= 0 || this.tareaFiltrada.Nombre.length > 40) {
        mensaje += "&#9888; Nombre tiene que tener entre 1 y 40 caracteres.<br>";
      }
      if (!this.tareaFiltrada.Descripcion || this.tareaFiltrada.Descripcion.length <= 0 || this.tareaFiltrada.Descripcion.length > 100) {
        mensaje += "&#9888; Descripcion tiene que tener entre 1 y 100 caracteres.<br>";
      }
      if (!this.tareaFiltrada.Tipo || this.tareaFiltrada.Tipo.length <= 0 || this.tareaFiltrada.Tipo.length > 40) {
        mensaje += "&#9888; Tipo tiene que tener entre 1 y 40 caracteres.<br>";
      }
      var fecha = new Date(this.tareaFiltrada.Fecha);
      if (!this.tareaFiltrada.Fecha) {
        mensaje += "&#9888; Introduzca fecha.<br>";
      } else if (fecha instanceof Date && !isNaN(fecha.valueOf())) {
        mensaje += "&#9888; Fecha ha de ser una fecha válida.<br>";
      }
      if (!this.tareaFiltrada.Programacion || this.tareaFiltrada.Programacion.length <= 0 || this.tareaFiltrada.Programacion.length > 100) {
        mensaje += "&#9888; Programacion tiene que tener entre 1 y 100 caracteres.<br>";
      }
      if (!this.tareaFiltrada.Formato || this.tareaFiltrada.Formato.length <= 0 || this.tareaFiltrada.Formato.length > 40) {
        mensaje += "&#9888; Formato tiene que tener entre 1 y 40 caracteres.<br>";
      }
      return mensaje;
    },
    cancelarEdicion() {
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
      var mensaje = this.notValid()
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
