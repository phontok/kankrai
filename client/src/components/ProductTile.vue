<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="product.thumbnail" alt="Thumbnail">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <p class="title is-4">{{ product.name }}</p>
      <p class="subtitle is-6">${{ product.price }}</p>
      <p><router-link :to="{ name: 'product', params: { slug: product.slug }}">Details</router-link></p>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: [
    'product'
  ],
  name: 'product-tile',
});
</script>

