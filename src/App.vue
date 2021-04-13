<template>
  <div id="app">
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

export default {
  components: {
    HeaderComponent,
  },  
}
</script>

<style>
#app {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
