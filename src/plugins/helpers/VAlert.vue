<template>
    <div id="vAlertDialog" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-md" role="document">
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
                    <button type="button" class="btn btn-default" @click="close(false)"> Cancel</button>
                    <button type="button" class="btn btn-primary"  @click="close(true)"> Ok</button>
                </div>
                <div v-else>
                    <button type="button" class="btn btn-default" @click="close(true)"> Ok</button>
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
      EventBus.$emit("vAlert.close", result);
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

