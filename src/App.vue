<template>
  <div id="app" class="animate__animated animate__fadeIn">
    <header-component/>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      >
    <router-view />
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
    detectIE() {
     
      try {
  
          var isIE = /*@cc_on!@*/false || !!document.documentMode;
  
          if ( ! isIE ) {
              // Fallback to UserAgent detection for IE
              if ( navigator.userAgent.indexOf("MSIE") > 0 ) {
                  return true;    
              } else {
                  return false;
              }
          }
  
          return true;
  
      } catch(e) {
  
          var error = e.toString();
  
          console.log(error);
      }
    },
  },
  mounted() {
    this.setSuccessStatus();
    // alert(this.detectIE());
    if (this.detectIE()) {
        alert("This application does not support Internet Explorer. Please switch to a modern browser including Chrome, Safari, Firefox, or Edge.")
    } else {
        // No, IE browser not Detected
    }
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
