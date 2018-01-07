<template>
  <div class="container">
    <div class="box">
      <figure class="image is-4by3">
        <transition name="fade">
          <img :src="currentItem" :key="currentIndex" />
        </transition>
      </figure>
      <nav class="level">
        <span class="level-left icon is-medium">
          <a @click="previousItem">
            <i class="level-item fa fa-chevron-left" />
          </a>
        </span>
        <ul class="level-item">
          <li v-bind:key="item" v-for="(item, index) in items">
            <a @click="setItemAtIndex(index)">
              <span class="page-dot" v-bind:class="{ isActive: (currentIndex == index) }">•</span>
            </a>
          </li>
        </ul>
        <span class="level-right icon is-medium">
          <a @click="nextItem">
            <i class="level-item fa fa-chevron-right" />
          </a>
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'carousel',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.currentIndex = 0;
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentItem() {
      return this.items[this.currentIndex];
    },
  },
  methods: {
    setItemAtIndex(index) {
      this.currentIndex = index;
    },
    nextItem() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    previousItem() {
      this.currentIndex = (this.currentIndex + this.items.length - 1) % this.items.length;
    }
  },
});
</script>

<style lang="scss" scoped>
span.page-dot {
  padding: 0 0.5rem;
  color: rgba(90%, 90%, 90%, 40%);
  &.isActive {
    color: rgba(40%, 40%, 40%, 90%);    
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to
{
  opacity: 0;
}
</style>


