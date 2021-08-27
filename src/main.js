import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';


Vue.use(Vuex)

Vue.config.productionTip = false;

import store from "./store/store";

new Vue({
  router,
  vuetify,
  store: store,
  render: (h) => h(App)
}).$mount('#app');
