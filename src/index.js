import VDialog from "./plugins/containers/VDialog.vue";
import VTab from "./plugins/containers/VTab.vue";
import VTabGroup from "./plugins/containers/VTabGroup.vue";
import VPanel from "./plugins/containers/VPanel.vue";
import VControlWrapper from "./plugins/containers/VControlWrapper.vue";
import VAdminPanel from "./plugins/containers/VAdminPanel.vue";
import VSidebar from "./plugins/containers/VSidebar";
import VPageHeaderBar from "./plugins/containers/VPageHeaderBar";
import VErrorSpan from "./plugins/controls/VErrorSpan";

import VDataView from "./plugins/controls/VDataView";
import VGridView from "./plugins/controls/VGridView";
import VPagination from "./plugins/controls/VPagination";
import VLiveView from "./plugins/controls/VLiveView";
import VComboBox from "./plugins/controls/VComboBox";
import VDynamicCombo from "./controls/VDynamicCombo"
import VFormDialog from "./plugins/controls/VFormDialog"
import VForm from "./plugins/controls/VForm";
import VInputControl from "./plugins/controls/VInputControl"
import VNavBar from "./plugins/controls/VNavbar"
import ProfileImage from "./plugins/controls/ProfileImage";
import VDatePicker from "./plugins/controls/VDatePicker";
import VFullSearch from "./plugins/controls/VFullSearch";
import VLabelControl from "./plugins/controls/VLabelControl";


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

    Vue.filter('toDateFormat', toDateFormat);
    Vue.filter('toCurrencyFormat', toCurrencyFormat);
    Vue.filter('toUpperCase', toUpperCase)
  }
}

export const cloneObject = (objInstance) => {
  if (typeof objInstance === "object")
    return JSON.parse(JSON.stringify(objInstance));
  else
    return false;

}

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


export default MyPlugins;
