<template>
  <div>
    <Navbar />
    <div id="app">
      <router-view/>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>kankrai</strong> by Phontok Ltd
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  metaInfo: {
    title: 'kankrai Beautiful Popup Cards',
    titleTemplate: '%s | kankrai.com',
  },
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
