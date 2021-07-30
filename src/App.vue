<template>
  <div id="app" class="animate__animated animate__fadeIn">
    <header-component/>
    <transition
      mode="out-in"
      enter-active-class="fade-up"
      leave-active-class="animate__animated animate__fadeOut blur-out"
      >
    <router-view/>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from '@/components/common/HeaderComponent'
import { lms } from './mixins/lms';

export default {
  mixins: [lms],
  components: {
    HeaderComponent,
  },
  mounted() {
    this.lmsInitialize();
    this.setSuccessStatus();
  }
}
</script>

<style>
  #app {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
