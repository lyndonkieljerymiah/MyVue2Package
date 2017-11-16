<template>
    <div class="row">
        <div class="col-md-12">
            <v-toolbar  :menus="toolbar.menu"></v-toolbar>
            <v-panel header="Form Example">
                <div class="col-md-8">
                    <v-form class="form-horizontal" v-model="errValidation" @submit="save">
                        <v-control-wrapper label="Tenant Type">
                            <v-combo-box 
                                v-model="data.tenantType" 
                                :options="lookups.tenantType" 
                                :include-default="true"></v-combo-box>
                        </v-control-wrapper>
                        <v-control-wrapper label="Full Name">
                            <v-input-control 
                                v-model="data.fullName" 
                                :error-val="errValidation" 
                                name="fullName"></v-input-control>
                        </v-control-wrapper>
                        <v-control-wrapper label="Company">
                            <v-input-control 
                                v-model="data.company"
                                :error-val="errValidation"
                                name="company"></v-input-control>
                        </v-control-wrapper>
                        <div class="form-group">
                            <button class="btn btn-info" type="submit">Save</button>
                        </div>
                    </v-form>
                </div>
            </v-panel>
        </div>
    </div>
</template>

<script>

import { ErrorValidations } from "../../../dist/my-vue2-package";

export default {
  data() {
    return {
      data: {
        tenantType: "",
        fullName: "",
        company: "",
        qatarId: "",
        bday: null,
        gender: ""
      },
      lookups: {
        tenantType: [
          { value: "in", text: "Individual" },
          { value: "co", text: "Corporate" }
        ]
      },
      toolbar: {
          menu: [
              {name: 'add',icon:'fa fa-print'},
              {name: 'add',icon:'fa fa-floppy-o'},
          ]
      },
      errValidation: new ErrorValidations()
    };
  },
  methods: {
      save() {
          
          this.errValidation.register({
              'fullName': ['Error in FullName'],
              'company' : ['Company Error']
            });
      }
  }
};
</script>

