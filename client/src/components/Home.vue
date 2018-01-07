<template>
  <div>
    <section class="hero is-primary is-bold is-medium">
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
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <div class="hero-content">
            <h1 class="title is-size-4">
              4 steps to creating beautiful, handmade, popup greetings cards...
            </h1>
            <div class="columns">
              <div class="column has-text-centered">
                <span class="icon">
                  <i class="fa fa-3x fa-print" />
                </span>
                <h1 class="title">1. Print</h1>
                <p>Print out the supplied PDF using a printer or digital cutter.</p>
              </div>
              <div class="column has-text-centered">
                <span class="icon">
                  <i class="fa fa-3x fa-scissors" />
                </span>
                <h1 class="title">2. Cut</h1>
                <p>Follow the instructions to cut the design out.</p>
              </div>
              <div class="column has-text-centered">
                <span class="icon">
                  <i class="fa fa-3x fa-paper-plane-o" />
                </span>
                <h1 class="title">3. Fold</h1>
                <p>Fold the card as specified to complete your popup card.</p>
              </div>
              <div class="column has-text-centered">
                <span class="icon">
                  <i class="fa fa-3x fa-envelope-o" />
                </span>
                <h1 class="title">4. Send</h1>
                <p>Post your handmade card and delight the recipient.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <ProductList />
    </section>
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
