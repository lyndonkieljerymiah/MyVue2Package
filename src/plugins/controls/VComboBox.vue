<template>
    <div>
        <select class="form-control" :value="value"  @change="onChange($event.target.value)" :name='name'>
            <option v-if="includeDefault" value="">--Select--</option>
            <option v-for="(option,index) in options" :value="option[keyValue]" :key="index">{{option[keyText]}}</option>
        </select>
        <template v-if="errorVal !== null">
            <v-error-span v-model="errorVal" :name='name'></v-error-span>
        </template>   
    </div>
</template>

<script>
import VErrorSpan from "./VErrorSpan";
export default {
    name: "vComboBox",
    components: {
        VErrorSpan
    },
    props: {
        options: Array,
        name: String,
        dvalue: {
            default: 'value',
            type: String
        },
        dtext: {
            default: 'text',
            type: String
        },
        includeDefault: {
            type: Boolean,
            default: false
        },
        value: {
            required:true
        },
        errorVal: {
            default: null,
            type: Object,
        }
    },
    beforeMount() {

    },
    methods: {
        onChange(value) {
             this.$emit('input', value);
        }
    },
    computed: {
        keyValue() {
            return this.dvalue || "value";
        },
        keyText() {
            return this.dtext || "text";
        }
    }
}
</script>
