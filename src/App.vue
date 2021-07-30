<template>
  <div id="app" class="animate__animated animate__fadeIn">
    <header-component/>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
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
  methods: {
    setSuccessStatus() {
          this.lmsSet({
            key: "cmi.success_status",
            value: "passed",
        });
    }
  },
  mounted() {
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
