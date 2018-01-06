<template>
  <div>
    <h1>Welcome to kankrai</h1>
    <ul>
      <li v-for="product in products" v-bind:key="product.slug">
        <router-link :to="{ name: 'product', params: { slug: product.slug }}">
          {{ product.name }} (${{ product.price}})
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      products: [],
    };
  },
  created() {
    // Kick off API request
    axios.get('/api/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  },
});
</script>
