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
    </div>
</template>

<script>
    export default {
        name: "vInputControl",
        props: {
            vtype: String,
            value: {
                validator: function(val) {
                    return val==null || typeof val === 'string' || typeof val === 'number'
                }
            },
            name, String,
            groupIcon: String
        },
        methods: {
            update(value) {
                this.$emit("input", value);
            },
            onClick() {
                this.$emit("click");
            }
        }
    }
</script>
