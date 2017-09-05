var _ = require('lodash');
export default {
  name: 'TipoDetalle',
  data() {
    return {
      tipoFiltrada: {Id: '', Categoria: '', Descripcion: '', Repetitivo: '', Silenciable: '', Automatico: ''},
      tipoFiltradaBackUp: {},
      isEditable: true,
      isValido: true
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
      const _this = this
      this.idTipo = this.$route.params.id
      if(this.$route.params.id){
        $.ajax({
          type: 'GET',
          url: 'http://localhost:51952/api/TipoTareas/'+this.idTipo,   
          success: function (response) {
            _this.tipoFiltrada = JSON.parse(JSON.stringify(response))
            _this.tipoFiltradaBackUp = JSON.parse(JSON.stringify(response))
          },
          error: function () {
            //alert('Problemas al cargar el listado')
            debugger
          }
        })
      } else {
        //Ahora no casca al dar insertar
        this.isEditable = false;
      }
      
    },
    guardar () {
      let _this = this;
      let mensaje = this.validar();
      if (this.isValido) {
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
            _this.$router.push('/TipoMaestro');
          }
      })
      } else {
        bootbox.alert({ 
          size: "small",
          title: "Campos no válidos",
          message: mensaje, 
          //callback: function(){ /* your callback code */ }
        })
      }      
    },
    actualizar () {
      let _this = this
      let mensaje = this.validar();
      if (this.isValido) {
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
                  _this.$router.push('/TipoMaestro');
                }
              });
            }
          }
        });
      } else {
        bootbox.alert({ 
          size: "small",
          title: "Campos no válidos",
          message: mensaje, 
          //callback: function(){ /* your callback code */ }
        })
      }
    },
    validar() {
      let mensaje = '';
      this.isValido = true;
      if (!(this.tipoFiltrada.Categoria.length > 0 && this.tipoFiltrada.Categoria.length <= 15)) {
        this.isValido = false;
        //console.log(1);
        mensaje = mensaje.concat('El campo Categoría tiene que tener una longitud entre 0 y 15 caracteres.');
      };
      if (!(this.tipoFiltrada.Descripcion.length > 0 && this.tipoFiltrada.Descripcion.length <= 35)) {
        this.isValido = false;
        //console.log(2);
        mensaje = mensaje.concat('\n El campo Descripción tiene que tener una longitud entre 0 y 35 caracteres.');
      };
      //alert(mensaje);
      return mensaje;
    }
  },
  components: {

  }
}
