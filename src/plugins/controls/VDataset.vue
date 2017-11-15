<script>



export default {
  props: {
      dataset: {
          validator(val) {
              return (!!val) && (val.constructor === Object);
          }
      },
      api: {
         validator(val) {
              return (!!val) && (val.constructor === Object);
          } 
      }
  },
  beforeMount() {
    
    //listener
    EventBus.$on("dataset.fetch", (pimaryKey) => {
        this.fetchData(primaryKey);
    });
  },
  methods: {
      
      fetchData(primaryKey) {
       
      }
  }
}
</script>



