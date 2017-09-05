import $ from 'jquery'
export default {
  name: 'TareaMaestro',
  data () {
    return {
      items: [
      ],
      isOpen: false,
      itemInsercion: {}
    }
  },
  methods: {
    getTodos () {
      let _this = this
      $.ajax({
        type: 'GET',
        url: 'http://localhost:51952/api/Tarea',   
        success: function (response) {
          _this.items = JSON.parse(JSON.stringify(response))
        },
        error: () => {
          alert('Problemas al cargar el listado')
          debugger
        }
      })
    },
    eliminarObjeto (id) {
      let _this = this

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
                url: 'http://localhost:51952/api/Tarea/' + id,
                success: function (response) {
                },
                error: function(){
                  debugger
                },
                complete: function(){
                  _this.getTodos()
                }
              })
            }
        }
      });
    }
  },
  created: function () {
    this.getTodos()
  }
}