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
      let _this = this
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
              _this.$router.push('/EjecucionMaestro');
            }
          })
        },
        error: _this.error
      })
    },
    actualizarDatos() {
      let _this = this
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
                    _this.$router.push('/EjecucionMaestro');
                  }
                })

              },
              error: _this.error
            })
          }
        }
      });
    },
    error: function (xhr, textStatus, errorThrown) {
      bootbox.alert("Error!->" + errorThrown + "-->" + xhr.responseText);
    }
  },
  components : {}
}
