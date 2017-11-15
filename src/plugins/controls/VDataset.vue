<script>

import {EventBus} from "../../events/eventbus";
import {DatasetStore} from "../../supports/datasetStore";

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
        DatasetStore.fetchData(api.fetch + "/" + primaryKey,(response) => {
            this.$store[dataset.namespace].state =    
            
            dataset.data = response.data;
            if(response.lookups !== undefined) {
                dataset.lookups = response.lookups;
            }
        });
      }
  }
}
</script>



