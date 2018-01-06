<template>
  <div>
    <h1>Product Page</h1>
    <h2>{{ slug }}</h2>
    <div v-if="product">
      <p>{{ product.name }}</p>
      <p>{{ product.price}}</p>
      <p>{{ product.description }}</p>
      <p><img :src="product.thumbnail" /></p>
      <p v-for="photo in product.photos" v-bind:key="photo">
        <img :src="photo" />
      </p>
    </div>
    <router-link :to="{ name: 'root'}">Home</router-link>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

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
});
</script>

