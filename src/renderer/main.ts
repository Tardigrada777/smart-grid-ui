import Vue from 'vue';

import router from './router';
import store from './store';
import App from "./App.vue";
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/Vuetify';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  vuetify
}).$mount('#app');
