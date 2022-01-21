import Vue from "vue";
import App from "./App.vue";
import { library } from "../node_modules/@fortawesome/fontawesome-svg-core";
import { faCoffee } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/vue-fontawesome";

library.add(faCoffee);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
