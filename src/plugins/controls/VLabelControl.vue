<template>
    <div>
        <p class="v-row">
            <span class="v-label" :class="internalProperty.labelClass">{{label}}:</span>
            <span class="v-text" :class="internalProperty.textClass">{{value}}</span>
        </p>
    </div>
</template>

<script>
export default {
  name: "vLabelControl",
  data() {
    return {
      internalProperty: {
        labelClass: "col-md-3",
        textClass: "col-md-9"
      }
    };
  },
  props: {
    label: String,
    value: { 
      validator(val) {
        return true;
      }
    },
    propertyObject: Object
  },
  beforeMount() {

      if(this.propertyObject) {
          this.internalProperty.labelClass = this.propertyObject.labelClass || "col-md-3";
          this.internalProperty.textClass = this.propertyObject.textClass || "col-md-9";
      }
  }
};
</script>

<style scoped>
.v-row {
  width: 100%;
  padding: 0.6em;
}
.v-row::after {
  display: table;
  clear: both;
  content: "";
}
.v-label {
  background: #eee;
  padding: 10px;
  font-weight: bolder;
  text-align: right;
}

.v-text {
  padding: 10px;
  font-size: 1em;
  border-bottom: 1px solid #e6e9ed;
  height: 40px;
}
</style>
