<template>
  <a class="button is-primary is-medium" @click="startPaddle">
    <span class="icon">
      <i class="fa fa-cart-arrow-down"></i>
    </span>
    <span>{{ text }}</span>
  </a>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PurchaseButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    startPaddle() {
      Paddle.Checkout.open({
        product: this.productId,
      });
    },
  },
});
</script>

