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
    guardarDatos () {
      let _this = this
      console.log(_this.itemInsercion)
      $.ajax({
        type: 'POST',
        url: 'http://localhost:51952/api/Tarea/',
        data: _this.itemInsercion,
        success: (response) => {
          console.log(response)
        },
        error: () => {
          console.log('Error insercion')
          debugger
        },
        complete: () => {
          _this.getTodos()
        }
    })
    },
    eliminarObjeto (id) {
      let _this = this
      console.log(_this.itemInsercion)
      $.ajax({
        type: 'DELETE',
        url: 'http://localhost:51952/api/Tarea/' + id,
        success: (response) => {
          console.log(response)
        },
        error: () => {
          console.log('Error eliminacion')
          debugger
        },
        complete: () => {
          _this.getTodos()
        }
      })
    }
  },
  created: function () {
    this.getTodos()
  }
}