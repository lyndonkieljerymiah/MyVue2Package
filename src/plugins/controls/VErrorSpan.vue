<template>
    <div v-show="value.get(name)">
        <span class="text-danger"><i class="fa fa-times-rectangle"></i> <small><b>{{value.get(name)}}</b></small></span>
    </div>
</template>

<script>
    

    export default {
        name: "vErrorSpan",
        props: {
            value: Object,
            name: String
        },
        data() {
            return {
                errorText: ''
            }
        },
        beforeMount() {

        },
        computed: {
            valueText() {
                return this.value.get(this.name)
            }
        }
    }
</script>