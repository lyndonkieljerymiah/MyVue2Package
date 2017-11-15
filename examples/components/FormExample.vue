<template>
    <v-panel class="container-fluid" header="Form Example">
        <v-panel :classic="true"  class="col-md-6">
            <v-label-control label="Tenant Code" v-model="data.tenant_code"></v-label-control>
            <v-label-control label="Full Name" v-model="data.full_name"></v-label-control>
            <v-label-control label="Email Address" v-model="data.email_address"></v-label-control>
        </v-panel>
        <v-panel :classic="true" class="col-md-6">
            <v-label-control label="Villa No" v-model="data.villa_no"></v-label-control>
            <v-label-control label="Rate Per Month" v-model="data.rate_per_month"></v-label-control>

        </v-panel>
        <v-panel :classic="true" col-md-6>
            <div style="position:relative">
                <v-date-picker v-model="data.period_start"></v-date-picker>
            </div>
            
        </v-panel>
        <div class="col-md-12">
            <button class="btn btn-info" @click="open">Open Dialog</button>
        </div>
        <form-dialog-example></form-dialog-example>

    </v-panel>
</template>

<script>

    import VPanel from "../plugins/containers/VPanel.vue";

    require("../assets/nopic.png");
    import FormDialogExample from "./FormDialogExample.vue";
    import {EventBus} from "../events/eventbus";

    export default {
        components: {
            VPanel,
            FormDialogExample
        },
        data() {
            return {
                data: {
                    period_start: '2017-11-15',
                    tenant_code: '28663401058',
                    full_name: 'Saoud Ali Khalid Ahmed Al Buainain',
                    email_address: 'it@nabcogroup.co',
                    tel_no: '50000280',
                    villa_no: 'S1-V02',
                    description: 'Fully Furnished',
                    rate_per_month: '13,000.00'
                },
                name: "Arnold",
                company: "",
                country: "",
                regId: "",
                type: "",
                cDate: moment(),
                lookups: [
                    {value: "company", text: "Company"},
                    {value: "individual", text: "Individual"}
                ],
                countries: [
                    {value: "phil", text: "Philippines"},
                    {value: "usa", text: "USA"}
                ]
            }
        },
        methods: {
            open() {
                EventBus.$emit("profile.show");
            }
        }
    }
</script>