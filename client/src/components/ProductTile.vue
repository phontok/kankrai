<template>
<div class="card">
  <router-link :to="{ name: 'product', params: { slug: product.slug }}">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.thumbnail" alt="Thumbnail">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-4">{{ product.name }}</p>
        <p class="subtitle">${{ product.price }}</p>
      </div>
    </div>
  </router-link>
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

