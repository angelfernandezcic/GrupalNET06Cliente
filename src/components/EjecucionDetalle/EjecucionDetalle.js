var _ = require('lodash');
export default {
  name : 'Detail',
  data() {
    return {ejecucionFiltrada: {}, ejecucionFiltradaBackUp: {}, isEditable: false}
  },
  created() {
    this.getID()
  },
  watch : {
    '$route': 'getID'
  },
  computed : {
    disableUpdate: function () {
      var propiedades = [
        "Nombre",
        "Exito",
        "Mensaje",
        "FechaInicio",
        "FechaFinal",
        "ConsumoMemoria",
        "ConsumoRed"
      ];
      var disable = true;
      for (var i = 0; i < propiedades.length; i++) {
        if (this.ejecucionFiltrada[propiedades[i]] != this.ejecucionFiltradaBackUp[propiedades[i]]) {
          disable = false;
          break;
        }
      }
      return (disable || !this.isEditable);
    }
  },
  methods : {
    notValid: function () {
      var mensaje = "";
      if (!this.ejecucionFiltrada.Nombre || this.ejecucionFiltrada.Nombre.length <= 0 || this.ejecucionFiltrada.Nombre.length > 40) {
        mensaje += "&#9888; Nombre tiene que tener entre 1 y 40 caracteres.<br>";
      }
      if (!this.ejecucionFiltrada.Mensaje || this.ejecucionFiltrada.Mensaje.length <= 0 || this.ejecucionFiltrada.Mensaje.length > 100) {
        mensaje += "&#9888; Mensaje tiene que tener entre 1 y 100 caracteres.<br>";
      }
      if (!this.ejecucionFiltrada.ConsumoMemoria || this.ejecucionFiltrada.ConsumoMemoria <= 0) {
        mensaje += "&#9888; Consumo de memoria tiene que ser mayor que 0.<br>";
      }
      var fecha = new Date(this.ejecucionFiltrada.FechaInicio);
      if (!this.ejecucionFiltrada.FechaInicio) {
        mensaje += "&#9888; Introduzca fecha de inicio.<br>";
      } else if (fecha instanceof Date && !isNaN(fecha.valueOf())) {
        mensaje += "&#9888; Fecha de inicio ha de ser una fecha válida.<br>";
      }
      fecha = new Date(this.ejecucionFiltrada.FechaFinal);
      if (!this.ejecucionFiltrada.FechaFinal) {
        mensaje += "&#9888; Introduzca fecha final.<br>";
      } else if (!(fecha instanceof Date && !isNaN(fecha.valueOf()))) {
        mensaje += "&#9888; Fecha final ha de ser una fecha válida.<br>";
      }

      if (isNaN(parseFloat(this.ejecucionFiltrada.ConsumoRed))) {
        mensaje += "&#9888; Consumo de red tiene que ser un numero.<br>";
      } else if (!(fecha instanceof Date && !isNaN(fecha.valueOf()))) {
        mensaje += "&#9888; Consumo de red tiene que ser un numero mayor que 0<br>";
      }

      if (isNaN(parseFloat(this.ejecucionFiltrada.ConsumoMemoria))) {
        mensaje += "&#9888; Consumo de memoria tiene que ser un numero.<br>";
      } else if (this.ejecucionFiltrada.ConsumoMemoria <= 0) {
        mensaje += "&#9888; Consumo de memoria tiene que ser un numero mayor que 0<br>";
      }
      return mensaje;
    },
    cancelarEdicion() {
      this.ejecucionFiltrada = JSON.parse(JSON.stringify(this.ejecucionFiltradaBackUp))
    },
    goToMaestro() {
      this
        .$router
        .push('/EjecucionMaestro');
    },
    getID() {
      const _self = this
      this.idEjecucion = this.$route.params.id
      if (this.$route.params.id) {
        $.ajax({
          type: 'GET',
          url: 'http://localhost:51952/api/Ejecuciones/' + this.idEjecucion,
          success: function (response) {
            _self.ejecucionFiltrada = JSON.parse(JSON.stringify(response))
            _self.ejecucionFiltradaBackUp = JSON.parse(JSON.stringify(response))
            this.isEditable = false;
          },
          error: _self.error
        })
      } else {
        this.isEditable = true;
      }
    },
    guardarDatos() {
      let _this = this;
      var mensaje = this.notValid();
      if (mensaje) {
        bootbox.alert({message: mensaje, size: 'small'})
      } else {
        $.ajax({
          type: 'POST',
          url: 'http://localhost:51952/api/Ejecuciones/',
          data: _this.ejecucionFiltrada,
          success: (response) => {
            _this.ejecucionFiltrada = {};
            bootbox.alert({
              message: "¡Guardado realizado con éxito!",
              size: 'small',
              callback: function () {
                _this
                  .$router
                  .push('/EjecucionMaestro');
              }
            });
          },
          error: _this.error
        })
      }
    },
    actualizarDatos() {
      let _this = this;
      if (this.notValid()) {
        bootbox.alert({
          message: this.notValid(),
          size: 'small'
        })
      } else {
        bootbox.confirm({
          message: "¿Seguro que desea actualizar?",
          size: 'small',
          buttons: {
            confirm: {
              label: 'Si',
              className: 'btn-success'
            },
            cancel: {
              label: 'No',
              className: 'btn-danger'
            }
          },
          callback: function (result) {
            if (result) {
              $.ajax({
                type: 'PUT',
                url: 'http://localhost:51952/api/Ejecuciones/' + _this.idEjecucion,
                data: _this.ejecucionFiltrada,
                success: (response) => {
                  _this.ejecucionFiltrada = {};
                  bootbox.alert({
                    message: "¡Actualización realizada con éxito!",
                    size: 'small',
                    callback: function () {
                      _this
                        .$router
                        .push('/EjecucionMaestro');
                    }
                  })

                },
                error: _this.error
              })
            }
          }
        });
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      bootbox.alert("Error!->" + errorThrown + "-->" + xhr.responseText);
    },
    convertDateFormat: function (string) {
      var info = string
        .split('-')
        .reverse()
        .join('/');
      return info;
    }
  },
  components : {}
}