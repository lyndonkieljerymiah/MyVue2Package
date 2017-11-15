<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <v-panel header="Grid">
                    <v-grid-view :grid="grid" :data="items">
                        <template slot="custom" scope="props">
                            <span>{{props.items.entry[props.items.column.name] | toUpperCase}}</span>
                        </template>
                    </v-grid-view>
                </v-panel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                "id": 1,
                "contract_no": "1234",
                "date": moment(),
                "tenant_name": "Arnold Mercado",
                "villa": "v1",
                "status": "pending"
            },
            {
                "id": 2,
                "contract_no": "1235",
                "date": moment(),
                "tenant_name": "Arnold Mercado",
                "villa": "v2",
                "status": "pending"
            }],
            grid: {
                columns: [
                    {name: "flag", column: "", itype: "checkbox",bind:"flag", editable:true, class:"text-center"},
                    { name: "contract_no", column: "Contract No" },
                    { name: "date", column: "Date", dtype:"date", format:"d/M/Y"},
                    { name: "tenant_name", column: "Tenant Name" ,itype:"text", editable:"true", bind:"tenant_name"},
                    { name: "villa",column: "Villa", itype: "dropdown", editable:"true", bind: "villa", selection: "villas"},
                    { name: "status", column: "Status", editable:"true",itype:"custom"}
                ],
                lookups: {
                    villas: [{code: 'v1', name: 'Villa 1'},{code: 'v2', name: 'Villa 2'}]
                },
                actions: {
                    edit: {key: 'edit'},
                    remove: {key: 'delete'},
                    add: {key:'add'},
                    
                }
            }
        }
    },
    methods: {
        get(pro) {
            console.log(pro);
        }
    }
}
</script>
