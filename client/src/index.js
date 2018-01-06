import Vue from 'vue';
import Meta from 'vue-meta';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import App from './App.vue';
import router from './router';
import './styles/global.scss';

Vue.config.productionTip = false;
Vue.use(Meta);
Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
  router,
  render: createEle => createEle(App),
}).$mount('#app');
