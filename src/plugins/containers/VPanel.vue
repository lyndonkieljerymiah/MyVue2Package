<template>
    <div>
        <div v-if="classic">
            <div class="v-panel-classic" :class="{'v-panel-border':border}">
                <div class="panel-body">
                    <slot></slot>    
                </div>
            </div>
        </div>
        <div v-else class="panel" :class="panelTheme === undefined ? 'panel-primary' : panelTheme">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-12">
                        <slot name="header">
                            <p><i v-if="headIcon" :class="headIcon"></i> {{header}}</p>
                        </slot>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <slot></slot>
            </div>
            <div class="panel-footer">
                <slot name="panel-footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vPanel",
        props: {
            panelTheme: String, 
            headIcon: String,
            header: String,
            classic: Boolean,
            border: Boolean
        }
    }
</script>

<style scoped>
    .v-panel-classic {
        background: #fff;
        
        margin: 10px 0;
    }

    .v-panel-border {border: 1px solid #E6E9ED;}

    .v-panel-classic .panel-body {
        padding: 10px;
    }

</style>

