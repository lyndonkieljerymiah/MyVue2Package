<template>
    <div class="row">
        <div class="col-md-12">
            <v-panel header="Form Example">
                <v-control-wrapper label="Tenant Type">
                    <v-input-control v-model="data.tenantType"></v-input-control>
                </v-control-wrapper>
            </v-panel>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          data: {
              tenantType: '',
              fullName: '',
              company: '',
              qatarId: '',
              bday: null,
              gender: ''
          }
      }
  }
}
</script>

