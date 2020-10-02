import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import vuetify from './plugins/vuetify';
import 'reflect-metadata';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (create) => create(App),
}).$mount('#app');
