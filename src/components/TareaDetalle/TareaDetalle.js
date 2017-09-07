var _ = require('lodash');
export default {
  name: 'Detail',
  data() {
    
    return { tareaFiltrada: {Activa: true}, tareaFiltradaBackUp: {}, isEditable: false }
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
      if (!this.tareaFiltrada.Tipo || this.tareaFiltrada.Tipo.length <= 0 || this.tareaFiltrada.Tipo.length > 100) {
        mensaje += "&#9888; Tipo tiene que tener entre 1 y 100 caracteres.<br>";
      }
      if(!!this.tareaFiltrada.Fecha == false){
        mensaje += "&#9888; Introduzca una fecha de inicio<br>";
      }else if (isNaN(Date.parse(this.tareaFiltrada.Fecha.split('/').reverse().join('-')))) {
        mensaje += "&#9888; Fecha ha de ser una fecha valida, formato dd/mm/aaaa.<br>";
      }
      if(!!this.tareaFiltrada.Programacion == false){
        mensaje += "&#9888; Introduzca una fecha de programacion<br>";
      }else if (isNaN(Date.parse(this.tareaFiltrada.Programacion.split('/').reverse().join('-')))) {
        mensaje += "&#9888; Fecha ha de ser una fecha valida, formato dd/mm/aaaa.<br>";
      }
      if (!this.tareaFiltrada.Formato || this.tareaFiltrada.Formato.length <= 0 || this.tareaFiltrada.Formato.length > 100) {
        mensaje += "&#9888; Formato tiene que tener entre 1 y 100 caracteres.<br>";
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
      if (mensaje) {
        bootbox.alert({message: mensaje, size: 'small'})
      } else {
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
  }
    },
    actualizarDatos () {
      let _this = this
      if (this.notValid()) {
        bootbox.alert({
          message: this.notValid(),
          size: 'small'
        })
      } else {
      bootbox.confirm({
        message: "¿Seguro que desea actualizar?",
        buttons: {
            confirm: {label: 'Si',className: 'btn-success'},
            cancel: {label: 'No',className: 'btn-danger'}
        },
        callback: function (result) {
          if (result) {
            $.ajax({
              type: 'PUT',
              url: 'http://localhost:51952/api/Tarea/' + _this.tareaFiltrada.Id,
              data: _this.tareaFiltrada,
              success: (response) => {
                _this.tareaFiltrada = {};
                bootbox.alert({
                  message: "¡Actualización realizada con éxito!",
                  size: 'small',
                  callback: function () {
                    _this.$router.push('/TareaMaestro');
                  }
                })
              },
              error: _this.error
            })
          }
        }
    });
    }
  }
  },
  components: {

  }
}
