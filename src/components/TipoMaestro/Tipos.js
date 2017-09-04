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
          alert('Problemas al cargar el listado')
          debugger
        }
      })
    }
  },
  created: function () {
    //console.log('1')
    this.getTodos()
  }
}