<template>
  <div>
    <h1>Product Page</h1>
    <h2>{{ slug }}</h2>
    <router-link :to="{ name: 'product', params: { slug: 'hello' }}">Hello</router-link>
    <router-link :to="{ name: 'product', params: { slug: 'bye' }}">Bye</router-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductPage',
  computed: {
    slug() {
      return this.$route.params.slug;
    },
  },
  metaInfo() {
    return { title: this.slug }
  }
});
</script>

