<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <transition name="v-slide-fade">
                    <div v-if="filterProperty.field" class="live-views-badge">
                        <span>{{filterProperty.label}}</span>
                        <a href="#" class="live-views-close" @click="clear()">&times;</a>
                    </div>
                </transition>
            </div>
        </div>
        <div class="row">
            <transition name="v-slide-fade">
                <div v-if="fetchLoading" class="v-view-loading-container" key="loading">
                    <div class="v-view-loading">
                        <span class="fa fa-spinner fa-pulse fa-3x fa-fw"></span><br>
                        Loading...
                    </div>
                </div>
                <div v-else class="col-md-12" key="fetched">
                    <table id="grid" class="table table-condensed table-hover table-live-views">
                        <thead>
                        <tr>
                            <th class="text-center">No</th>
                            <th v-for="(key,index) in configs.columns"
                                :style="key.style"
                                @click.self="sortBy(key)"
                                class="text-left"
                                :class="{info:sort.key == key.name}"
                                :key="index">
                                {{ key.column }}
                                <span
                                        v-if="isArrowVisible(key.name)"
                                        class="fa fa-fw" :class="sort.orders[key.name] > 0 ?
                                'fa-long-arrow-down' : 'fa-long-arrow-up'"></span>

                                <a class="filter"
                                   href="#"
                                   @click.prevent.stop="filterProperty.toggle(index)"
                                   v-if="key.filter"><i class="fa fa-filter"></i></a>
                                
                                <!-- filter component -->
                                <transition name="v-slide-fade">
                                    <div v-if="filterProperty.selectedFilter === index" class="filter-wrapper" ref="filterWrapper">
                                        <div class="panel panel-primary wrap">
                                            <div class="panel-heading">Filter Panel - {{key.column}}</div>
                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" v-model="filterProperty.value" class="form-control">
                                                </div>
                                                <button class="btn btn-info btn-block" @click.stop="doFilter(key.filterBind || key.name,key.column)">Filter</button>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                                <!-- end filter -->
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="filteredData.length === 0">
                            <td :colspan="grid.columns.length" class="text-center"><h3 class="text-warning">
                                No Record found</h3>
                            </td>
                        </tr>
                        <tr v-for="(entry , index) in filteredData" :key="index">
                            <slot name="table-column" :props="{items: entry, index: index}">
                                <td class="text-center">{{index + 1}}</td>
                                <td v-for="(key,index) in configs.columns" :class="key.bindClass ? entry[key.bindClass] : key.class" :style="key.style" :key="index">
									
									<strong v-if="key.isBold">{{doRender(entry, key)}}</strong>
                                    
									<span v-else>{{doRender(entry, key)}}</span>
									
									<div v-if="key.name=='$action'" class="btn-group">
                                        <button type="button"
                                                class="btn btn-primary dropdown-toggle btn-sm"
                                                data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            Action <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li v-for="(action,index) in actionButtons" :key="index">
                                                <a href="#" @click='actionTrigger(action,entry,index)'>{{action.name}}</a>
                                            </li>
                                        </ul>
                                    </div>
									
									<!-- special menu -->
                                    <div v-if="key.name=='$markDelete'" class='text-center'
                                         @click='actionTrigger("delete",entry["id"])'>
                                        <button class="btn btn-danger btn-xs" type="button"><i class="fa fa-close"></i>
                                        </button>
                                    </div>

									<div v-else-if="key.name === '$switch'">    
                                        <vswitch v-model="entry[key.bind]" :is-disabled="entry[key.disabled]"></vswitch>
                                    </div>
									<!-- end special menu -->
                                </td>
                            </slot>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <slot name="table-footer"></slot>
                        </tr>
                        </tfoot>
                    </table>
                    <div>
                        <v-pagination :param="liveViewModel.state.data" @click="fetchData($event)"></v-pagination>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import VPagination from "./VPagination";
import { EventBus } from "../../index";

import LiveViewModel from "../models/LiveViewModels.js";

const axios = window.axios || require("axios");

export default {
  name: "vLiveView",
  props: {
    configs: Object
  },
  components: { VPagination },
  data() {
    return {
      liveViewModel: {},
      editVisible: false
    };
  },
  beforeMount() {
    this.liveViewModel = new LiveViewModel(this.configs);
    //listen to view fetch will call by the client
    EventBus.$on("liveview.fetch", response => {
      this.fetchData();
    });
  },
  mounted() {
    let lazyLoad = this.configs.lazyLoad || false;
    if (!lazyLoad) {
      this.fetchData();
    }
  },
  computed: {
    filteredData() {
      return this.liveViewModel.scopeData();
	},
	filterProperty() {
		return this.liveViewModel.filterProperty;
	},
    actionButtons() {
      return this.configs.actions;
	},
	fetchLoading() {
		return this.liveViewModel.state.fetchLoading;
	},
	sort() {
		return this.liveViewModel.sort;
	}
  },
  methods: {
    /*----------------------------------------
    | Fetch Data pull data from the server
    | checking the url and parameter from the grid parameter and construct url
    | otherwise take the constructed url such in pagination and use the url to fetch data
    */
    fetchData(url) {
		this.$emit("beforeFetch", { filter: cloneObject(this.liveViewModel.filterProperty)});
      	this.liveViewModel.fetchData(url);
    },
    /*----------------------------------------
    |   Sort column
    |   except static column
    */
    sortBy: function (key) {
		if (key.static) return false;
		this.liveViewModel.sort.key = key.name
		this.liveViewModel.sort.orders[key.name] = this.liveViewModel.sort.orders[key.name] * -1;
	},
    /*----------------------------------------
    |   render the data in format
    |   by checking the dtype date & currency only
    */
    doRender: function(entry, key) {
      	let value = entry[key.name];
      	if (key.dtype === "date") {
        	value = moment(value).format("L");
		} 
		else if (key.dtype === "currency") {
        	//value = accounting.formatNumber(value) + " QR";
		  }
		  
      	return value;
    },
    /*----------------------------------------
    |   Emit an event when action trigger
    |   the client can execute code 
    */
    actionTrigger: function(action, value, id) {
      this.$emit("action", action, value, id);
    },
    /*----------------------------------------
    |   Show arrow visibility
    */
    isArrowVisible(name) {
      return this.liveViewModel.sort.key === name;
    },
    /*----------------------------------------
    |   Start a new fresh filter
    */
    doFilter(field, label) {
      this.liveViewModel.filter(field,label + ' - ' + this.liveViewModel.filterProperty.value)
    },
    /*----------------------------------------
    |   return all data
    */
    clear() {
     	this.$emit("onFilter",cloneObject(this.filterProperty));
		this.liveViewModel.clear();
    },
  }
};
</script>

<style scope>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.v-slide-fade-enter-active {
  transition: all 0.3s ease;
}
.v-slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.v-slide-fade-enter,
.v-slide-fade-leave-to {
  opacity: 0;
}

.v-view-loading-container {
  width: 100%;
  height: 350px;
  position: relative;
}

.v-view-loading {
  position: absolute;
  top: 30%;
  left: 40%;
  font-size: 40px;
}
</style>