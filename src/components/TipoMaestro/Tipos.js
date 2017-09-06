import $ from 'jquery'
export default {
  name: 'TipoMaestro',
  data () {
    return {
      items: [],
      isOpen: false,
      itemInsercion: {}
    }
  },
  methods: {
    getTodos () {
      let _this = this
      $.ajax({
        type: 'GET',
        url: 'http://localhost:51952/api/TipoTareas',   
        success: function (response) {
          _this.items = JSON.parse(JSON.stringify(response))
        },
        error: function(){          
          //alert('Problemas al cargar el listado')
          debugger
        }
      })
    },
    eliminarObjeto (id) {
      let _this = this;
      bootbox.confirm({
        message: "¿Eliminar de forma permanente?",
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
            if(result){
              $.ajax({
                type: 'DELETE',
                url: 'http://localhost:51952/api/TipoTareas/' + id,
                success: function (response) {
                  //alert('Eliminando item: '+ id)
                },
                error: function(){
                  //console.log('Error eliminacion')
                  debugger
                },
                complete: function(){
                  _this.getTodos()
                }
              })
            }
          }
      });
    },
    nuevoitem: function() {
      this.$router.push('/TipoDetalle');
    }
  },
  created: function () {
    this.getTodos()
  }
}