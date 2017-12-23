<template>
  <form @submit.prevent="onSubmit" @keydown="clearForm($event.target.name)">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "vBindingForm",
  props: {
    api: {
      type: Object,
      default: {},
      required: true
    },
    value: {
      type: Object
    },
    options: Object
  },
  beforeMount() {},
  mounted() {},
  methods: {
    /*---------------------------------- 
    * Clear Form
    *--------------------------------------*/
    clearForm(targetName) {
      if(this.options.errors) {
        this.options.errors.clear(targetName)
      }
    },
    /*---------------------------------- 
    * On Submit Form
    *--------------------------------------*/
    onSubmitForm() {
        this.save();
    },
    /*---------------------------------- 
    * Call create to pull create data from server with end point
    *--------------------------------------*/
    create() {

      //get data as initial 
      const apiCreate = this.api.apiCreate || "";
      const pointer = this.options.basePointer;

      axios.get(apiCreate).then((response) => {
        this.$emit("input",response.data[pointer]);
        this.$emit("onCreate",response.data);
      });
    },
    /*---------------------------------- 
    * Call create to pull create data from server with end point
    *--------------------------------------*/
    save() {

      const apiStore = this.api.apiStore || "";

      axios.post(apiStore,this.value)
        .then((response) => {
          this.$emit("onSaved",response.data);
        })
        .catch((errors) => {
          if(this.options.errors) {
            if(errors.response.status === 422) {
              this.options.errors.register(errors.response.data);
            }
          }
        })
    },
     /*---------------------------------- 
    * Call create to pull create data from server with end point
    *--------------------------------------*/
    update() {},
    edit() {
      
      const apiGet = this.api.apiGet || false;
      const pointer = this.options.basePointer;
      const parameterId = this.options.parameterId || "";

      if(apiGet) {
        apiGet = apiGet + (parameterId !== "") ? "/" + parameterId : "";
        axios.get(apiGet).then((response) => {
          this.$emit("input", response.data[pointer]);
          this.$emit("onEdit",response.data);
        });
      }
    }
  }
};
</script>

