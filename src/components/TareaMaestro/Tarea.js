import $ from 'jquery'
export default {
  name: 'TareaMaestro',
  data () {
    return {
      items: [
      ]
    }
  },
  methods: {
    getTodos: function () {
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
    }
    },
    created: function () {
      console.log("Entro")
      this.getTodos()
    }
  }