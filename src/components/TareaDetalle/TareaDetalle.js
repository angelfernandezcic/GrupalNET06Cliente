export default {
  name: 'Detail',
  data() {
    return {
    }
  },
  created (){
  	this.getID()
  },
  watch: {
    '$route': 'getID'
  },
  methods: {
    getID() {
      const _self = this
      this.idTicket = this.$route.params.id
      this.ticketFiltrado = _.filter(_self.list, {'ID_TICKET':parseInt(_self.idTicket)})[0];
    }
  },
  components: {

  }
}
