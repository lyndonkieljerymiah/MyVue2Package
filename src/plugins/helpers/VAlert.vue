<template>
    <div id="vAlertDialog" class="modal fade" role="dialog">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" @click="close(false)" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">{{dialogTitle}}</h4>
            </div>
            <div class="modal-body">
                <p>{{textContent}}</p>
            </div>
            <div class="modal-footer">
                <div v-if="groupType == 'OkCancel'">
                    <button type="button" class="btn btn-default" @click="close(false)"><i class="fa fa-close"></i>Cancel</button>
                    <button type="button" class="btn btn-primary"><i class="fa fa-save fa-fw" @click="close(true)" :class="{'fa-spinner fa-spin':loadingAnimation}"></i>Ok</button>
                </div>
                <div v-else>
                    <button type="button" class="btn btn-default" @click="close(false)"><i class="fa fa-close"></i> Ok</button>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import { EventBus } from "../../index";

export default {
  name: "vAlert",
  data() {
    return {
      dialogTitle: "",
      textContent: "",
      groupType: ""
    };
  },
  methods: {
    show() {
      $("#vAlertDialog").modal("show");
    },
    close(result) {
      $("#vAlertDialog").modal("hide");
      this.$emit("close", result);
    }
  },
  mounted() {
    EventBus.$on("vAlert.show", (dialogTitle, textContent, groupType) => {
      this.textContent = textContent;
      this.dialogTitle = dialogTitle;
      this.groupType = groupType;

      this.show();
    });
  }
};
</script>

