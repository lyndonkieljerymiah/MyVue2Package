<template>
    <div>
        <template v-if="vtype === 'group'">
            <div  class="input-group">
                <input type='text' class='form-control' :name='name' :value='value'
                       @input='update($event.target.value)'>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" @click.prevent="onClick">
                        <i class="fa " :class="groupIcon"></i>
                    </button>
                </span>
            </div>
           
        </template>

        <template v-else-if="vtype === 'multiline'">
            <textarea  :value="value" :name='name' @input="update($event.target.value)"
                      class="form-control"></textarea>
        </template>
        <template v-else>
            <input  type="vtype" :value="value" :name='name' @input="update($event.target.value)"
                   class="form-control"/>
        </template>
        
        <template v-if="errorVal !== null">
            <v-error-span v-model="errorVal" :name='name'></v-error-span>
        </template>
    </div>
</template>

<script>

    import VErrorSpan from './VErrorSpan';

    export default {
        name: "vInputControl",
        components: {
            VErrorSpan
        },
        props: {
            vtype: String,
            value: {
                default: null,
            },
            name, String,
            groupIcon: String,
            errorVal: {
                default: null,
                type: Object,
            }
        },
        methods: {
            update(value) {
                this.$emit("input", value);
            },
            onClick() {
                this.$emit("click");
            }
        },
        beforeMount() {
            console.log(Object.keys(this.value));
        }
    }
</script>
