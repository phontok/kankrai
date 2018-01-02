import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import ProductPage from '../components/ProductPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/products/:slug',
      name: 'product',
      component: ProductPage,
    },
    {
      path: '/',
      name: 'root',
      component: Home,
    },
  ],
});
