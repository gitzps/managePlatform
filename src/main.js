import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./library";
import "./components";
import "element-ui/lib/theme-chalk/index.css";
import customDialog from './components/customModel'
import customMixins from './mixins'
import './css/common.less'

Vue.config.productionTip = false;
let dialogInstance = new Vue(Vue.extend(customDialog))
dialogInstance.$mount()
Vue.prototype.$dialog = dialogInstance
document.body.append(dialogInstance.$el)

new Vue({
  router,
  store,
  mixins: [customMixins],
  render: (h) => h(App),
}).$mount("#app");
