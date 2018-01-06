<template>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-one-third-desktop is-half-tablet" v-for="product in products" v-bind:key="product.slug">
        <ProductTile v-bind:product="product" />
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import ProductTile from './ProductTile.vue';

export default Vue.extend({
  name: 'productlist',
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
  components: {
    ProductTile,
  }
});
</script>

