<template>
    <v-form-dialog modalId="profile" v-model="errors" @show="show" @submit="onSubmit" dialog-title="Profile" class="form-horizontal" :loading-animation="true">
        <v-control-wrapper
                label="Full Name">
            <v-input-control v-model="fullName" name="fullName"></v-input-control>
            <v-error-span v-model="errors" name="fullName"></v-error-span>
        </v-control-wrapper>
    </v-form-dialog>
</template>


<script>
    import {ErrorValidations} from "../supports/errorValidation";
    
    export default {
        data() {
            return {
                fullName: '',
                errors: new ErrorValidations()
            }
        },
        methods: {
            show() {

            },
            onSubmit() {
                if(this.fullName.length === 0) {
                    this.errors.register({
                        "fullName": ["Error on FullName"]
                    });
                }
                EventBus.$emit('profile.close');
            }
        }
    }
</script>