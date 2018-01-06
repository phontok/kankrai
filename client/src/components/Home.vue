<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to kankrai
          </h1>
          <h2 class="subtitle">
            Create beautiful, handmade, pop-up cards
          </h2>
        </div>
      </div>
    </section>
    <ProductList />
  </div>
</template>

<script>
import Vue from 'vue';
import ProductList from './ProductList.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    ProductList,
  },
});
</script>
