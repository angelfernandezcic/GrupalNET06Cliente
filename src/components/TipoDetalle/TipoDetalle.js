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
    cancelar () {
      this.tipoFiltrada = JSON.parse(JSON.stringify(this.tipoFiltradaBackUp));
      this.$router.push('/TipoMaestro');
      
    },
    activarEdicion () {
      if (this.isEditable) {
        this.tipoFiltrada = JSON.parse(JSON.stringify(this.tipoFiltradaBackUp));
      }
    },
    getID() {
      const _self = this
      this.idTipo = this.$route.params.id
      if(this.$route.params.id){
        $.ajax({
          type: 'GET',
          url: 'http://localhost:51952/api/TipoTareas/'+this.idTipo,   
          success: function (response) {
            _self.tipoFiltrada = JSON.parse(JSON.stringify(response))
            _self.tipoFiltradaBackUp = JSON.parse(JSON.stringify(response))
          },
          error: function () {
            //alert('Problemas al cargar el listado')
            debugger
          }
        })
      } else {
        //Ahora no casca al dar insertar
      }
      
    },
    guardar () {
      let _this = this;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:51952/api/TipoTareas/',
        data: _this.tipoFiltrada,
        success: function (response) {
          _this.tipoFiltrada= {};
          //console.log(response)
        },
        error: function () {
          //console.log('Error insercion')
          debugger
        },
        complete: function () {
          //Ir al maestro
        }
    })
    },
    actualizar () {
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
              url: 'http://localhost:51952/api/TipoTareas/'+_this.idTipo,
              data: _this.tipoFiltrada,
              success: function (response) {
                _this.tipoFiltrada = {};
              },
              error: function () {
                debugger
              },
              complete: function () {
                //Ir al maestro
              }
            });
          }
        }
      });
    }
  },
  components: {

  }
}
