<template>
  <section class="container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-6 is-parent">
        <div class="tile is-child content">
          <h1>Product Page</h1>
          <h2>{{ slug }}</h2>
        </div>
        <div v-if="product" class="tile is-child content">
          <p>{{ product.name }}</p>
          <p>{{ product.price}}</p>
          <p>{{ product.description }}</p>
        </div>
        <div v-if="product" class="tile is-child box">
          <PurchaseButton text="Buy Now" v-bind:productId="product.paddle_id" />
        </div>
        <div class="tile is-child">
          <router-link :to="{ name: 'root'}">Home</router-link>
        </div>
      </div>
      <div v-if="product" class="tile is-parent is-6">
        <Carousel v-bind:items="product.photos" class="tile is-child" />
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Carousel from './Carousel.vue';
import PurchaseButton from './PurchaseButton.vue';

export default Vue.extend({
  name: 'ProductPage',
  computed: {
    slug() {
      return this.$route.params.slug;
    },
  },
  metaInfo() {
    return { title: this.slug }
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    axios.get(`/api/products/${this.slug}`)
      .then(response => {
        this.product = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    Carousel,
    PurchaseButton,
  },
});
</script>
