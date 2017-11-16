'use strict';

import Vue from 'vue';
import router from "./router/router";
// vee-validate is just for demo
import VeeValidate, {Validator} from 'vee-validate';
import moment from 'moment';

Vue.config.productionTip = false;


import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

import 'fullcalendar/dist/fullcalendar.css';

Vue.use(VeeValidate);

//  jQuery is required by bootstrap to work
window.$ = window.jQuery = require('jquery');

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import MyPlugIns from '../dist/my-vue2-package';
import App from './App.vue';

Vue.use(MyPlugIns);

new Vue({
  render: h => h(App),
  router,
  created() {
    console.log('Main app created');
  },
  mounted() {
    console.log('Main app mounted');
  },
}).$mount("#app");
