import $ from 'jquery'
export default {
  name : 'EjecucionMaestro',
  data() {
    return {items: [], isOpen: false}
  },
  methods : {
    getTodos() {
      let _this = this
      $.ajax({
        type: 'GET',
        url: 'http://localhost:51952/api/Ejecuciones',
        success: function (response) {
          _this.items = JSON.parse(JSON.stringify(response))
        },
        error: _this.error
      })
    },
    eliminarObjeto(id) {
      let _this = this

      bootbox.confirm({
        message: "¿Eliminar de forma permanente?",
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
              type: 'DELETE',
              url: 'http://localhost:51952/api/Ejecuciones/' + id,
              success: function (response) {},
              error: _this.error,
              complete: function () {
                _this.getTodos();
                bootbox.alert({message: "¡Eliminación realizada con éxito!", size: 'small'})
              }
            })
          }
        }
      });
    },
    error: function (xhr, textStatus, errorThrown) {
      bootbox.alert("Error!->" + errorThrown + "-->" + xhr.responseText);
    },
    nuevoitem: function () {
      this
        .$router
        .push('/EjecucionDetalle');
    }
  },
  created : function () {
    this.getTodos()
  }
}