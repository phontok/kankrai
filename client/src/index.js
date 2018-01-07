import Vue from 'vue';
import Meta from 'vue-meta';
import 'bulma';
import './styles/global.scss';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Meta);

/* eslint-disable no-new */
new Vue({
  router,
  render: createEle => createEle(App),
}).$mount('#app');

// Configure Paddle
/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  Paddle.Setup({
    vendor: 28741,
    debug: false,
  });
});
