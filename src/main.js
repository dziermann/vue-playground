import Vue from 'vue';
import 'vue-material/dist/vue-material.css';
import VueMaterial from 'vue-material';

import App from './App';

Vue.use(VueMaterial);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
