<template>
    <div class="page-header v-page-header-bar">
        <h3 class="title">{{title}}</h3>
        <div v-if="showActionGroup" class="btn-group" role="group" aria-label="...">
            <button type="button" v-if="showAdd" class="btn btn-default" @click="onButtonClick('add')"><i class="fa fa-plus"></i> </button>
            <button type="button" v-if="showDelete" class="btn btn-default" @click="onButtonClick('delete')"><i class="fa fa-trash"></i> </button>
            <button type="button" v-if="showPrint" class="btn btn-default" @click="onButtonClick('print')"><i class="fa fa-print"></i> </button>
        </div>
    </div>
</template>

<script>
export default {
  name: "vPageHeaderBar",
  props: {
      title: {
          type: String,
          default: null
      },
      showActionGroup: {
          type:Boolean,
          default: true
      },
      showAdd: {
          type:Boolean,
          default: true
      },
      showDelete: {
          type:Boolean,
          default: true
      },
      showPrint: {
          type:Boolean,
          default: true
      }

  },
  methods: {
      onButtonClick(value) {
          this.$emit('click',value);
      }
  }
}
</script>

<style scoped>
    .v-page-header-bar {
        position:relative;
    }
    .v-page-header-bar .btn-group {
        position: absolute;
        top:0;
        right: 0;
    }
</style>

