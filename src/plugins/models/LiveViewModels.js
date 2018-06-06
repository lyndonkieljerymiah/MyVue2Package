
import { EventBus } from "../../index";

const axios = window.axios || require("axios");

class LiveViewModel {
    
    constructor(configs) {

        this.state = {
            data: [],
            cache: [],
            fetchLoading: false
        }
        
        this.sort = {
            orders: [],
            key: ''
        }

        this.configs = configs;

        this.filterProperty = {
            field: '',
            value: '',
            label: '',
            selectedFilter: -1,
            clear() {
                this.field = ''
                this.value = ''
                this.selectedFilter = -1
            },
            toggle(index) {
                if(this.selectedFilter === index) {
                    this.selectedFilter = -1;
                }
                else {
                    this.selectedFilter = index;
                }
            }
        }

        this.initSort();
    }

    initSort() {
        let sortOrders = {};
        let sortKey = "";
        this.configs.columns.forEach((key) => {
            sortOrders[key.name] = 1;
            if (key.default !== undefined && key.default === true) {
                sortKey = key.name;
            }
        });
        this.sort.key = sortKey;
        this.sort.orders = sortOrders;
    }

    filter(field,label) {
        //this.filterProperty.clear();
        this.filterProperty.label = label;
        this.filterProperty.field = field;
        this.filterProperty.selectedFilter = -1;
        this.fetchData();
    }

    clear() {
        this.filterProperty.clear();
        this.fetchData();
    }

    scopeData() {
        let sortKey = this.sort.key;
        let data = this.state.data.data || [];
        let order = this.sort.orders[sortKey] || 1;
        if (sortKey) {
            data = data.slice().sort(function (a, b) {
                a = a[sortKey]
                b = b[sortKey]
                return (a === b ? 0 : a > b ? 1 : -1) * order
            });
        }

        return data;
    }

    fetchData(url) {
        let query = "";
        
        if (typeof(url) === 'undefined') {
            const source = this.configs.source;
            let params = "";
            if (source.params) {
                _.forEach(source.params, (value, key) => {
                    params = params + "/" + value;
                });
            }

            if (this.filterProperty.field.length > 0) {
                query = "?filter_field=" + this.filterProperty.field + "&filter_value=" + this.filterProperty.value;
            }
            
            url = source.url + params + query;
            
            //reseting
            //this.filterProperty.clear();
        }
        

        this.state.fetchLoading = true;
        axios.dispatchGet(url)
            .then(response => {
                this.state.fetchLoading = false;
                if(this.configs.source.pointer){
                    this.state.data = response.data[this.configs.source.pointer];
                }
                else {
                    this.state.data = response.data;
                }

                EventBus.$emit('liveview.fetched',response.data);
            })
            .catch(errors => {
                
                toastr.error("Loading error")
                
                this.state.fetchLoading = false;
                
                //EventBus.$emit('liveview.fetched',this.state.data);

            });
    }
}

export default LiveViewModel;