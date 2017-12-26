

window._ = window._ || require('lodash');

import VDialog from "./plugins/containers/VDialog.vue";
import VTab from "./plugins/containers/VTab.vue";
import VTabGroup from "./plugins/containers/VTabGroup.vue";
import VPanel from "./plugins/containers/VPanel.vue";
import VControlWrapper from "./plugins/containers/VControlWrapper.vue";
import VAdminPanel from "./plugins/containers/VAdminPanel.vue";
import VSidebar from "./plugins/containers/VSidebar";
import VPageHeaderBar from "./plugins/containers/VPageHeaderBar";


import VDataView from "./plugins/controls/VDataView";
import VGridView from "./plugins/controls/VGridView";
import VPagination from "./plugins/controls/VPagination";
import VLiveView from "./plugins/controls/VLiveView";
import VComboBox from "./plugins/controls/VComboBox";
import VDynamicCombo from "./plugins/controls/VDynamicCombo"
import VFormDialog from "./plugins/controls/VFormDialog"
import VForm from "./plugins/controls/VForm";
import VInputControl from "./plugins/controls/VInputControl"
import VNavBar from "./plugins/controls/VNavbar"
import ProfileImage from "./plugins/controls/ProfileImage";
import VDatePicker from "./plugins/controls/VDatePicker";
import VFullSearch from "./plugins/controls/VFullSearch";
import VLabelControl from "./plugins/controls/VLabelControl";
import VToolBar from "./plugins/controls/VToolbar";
import VErrorSpan from "./plugins/controls/VErrorSpan";
import VCalendar from "./plugins/controls/VCalendar";

import VAlert from "./plugins/helpers/VAlert.vue"


import {
  toDateFormat,
  toCurrencyFormat,
  toUpperCase
} from "./filters";

const MyPlugins = {
  install(Vue, options) {

    Vue.component(VDialog.name, VDialog)
    Vue.component(VControlWrapper.name, VControlWrapper)
    Vue.component(VTab.name, VTab)
    Vue.component(VTabGroup.name, VTabGroup)
    Vue.component(VPanel.name, VPanel)
    Vue.component(VAdminPanel.name, VAdminPanel)
    Vue.component(VSidebar.name, VSidebar)
    Vue.component(VPageHeaderBar.name, VPageHeaderBar)


    Vue.component(VDataView.name, VDataView)
    Vue.component(VGridView.name, VGridView)
    Vue.component(VPagination.name, VPagination)
    Vue.component(VLiveView.name, VLiveView)
    Vue.component(VToolBar.name,VToolBar)

    Vue.component(VComboBox.name, VComboBox)
    Vue.component(VDynamicCombo.name, VDynamicCombo)
    Vue.component(VFormDialog.name, VFormDialog)
    Vue.component(VForm.name, VForm)
    Vue.component(VInputControl.name, VInputControl)
    Vue.component(VNavBar.name, VNavBar)
    Vue.component(ProfileImage.name, ProfileImage)
    Vue.component(VDatePicker.name, VDatePicker)
    Vue.component(VFullSearch.name, VFullSearch)
    Vue.component(VErrorSpan.name, VErrorSpan)
    Vue.component(VLabelControl.name, VLabelControl)
    Vue.component(VCalendar.name,VCalendar)

    Vue.component(VAlert.name,VAlert)
    

    Vue.filter('toDateFormat', toDateFormat);
    Vue.filter('toCurrencyFormat', toCurrencyFormat);
    Vue.filter('toUpperCase', toUpperCase)
  }
}


//clone object
export const cloneObject = (objInstance) => {
  if (typeof objInstance === "object")
    return JSON.parse(JSON.stringify(objInstance));
  else
    return false;

}

//copied value
export const copiedValue = (source, target, exclude = new Array()) => {
  _.forEach(source, (value, key) => {
    if (exclude.length > 0) {
      if (_.indexOf(exclude, key) < 0) {
        target[key] = value;
      }
    } else {
      target[key] = value;
    }
  });
}


//error validation class
export class ErrorValidations {

  constructor() {
    let that = this;
    this.errors = {};
    this.exceptions = {
      errors: [],
      add: function (name, description) {
        that.errorExceptions
          .errors.push({
            name: name,
            description: description
          });
      }
    };
  }

  

  get(field) {
    if (this.errors[field]) {
      if (this.errors[field] instanceof Array) {
        return this.errors[field][0];
      } else {
        return this.errors[field];
      }
    }
    return "";
  }

  register(errors) {
    this.errors = errors;
  }

  clear(field) {
    if (this.errors[field]) {
        this.errors[field] = '';
        delete this.errors[field][0];
    }
  }

  clearAll() {
    this.errors = {};
  }
  all() {
    return this.errors;
  }

}




import Vue from 'vue';

export const EventBus = new Vue();

export default MyPlugins;
