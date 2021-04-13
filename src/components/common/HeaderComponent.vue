<template>

<!-- <div>
    <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <b-navbar-nav class="ml-auto">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/food-details">Details</router-link>
          <router-link class="nav-link" to="/cart">My Plan</router-link>
          <router-link class="nav-link mr-3" to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span class="cart-count">{{ count }}</span>
          </router-link>
      </b-navbar-nav>
      </div>
    </b-sidebar>
  </div> -->
  
  <b-navbar fixed="top" toggleable="lg" type="light" variant="light">
    <router-link class="navbar-brand font-weight-bold" to="/">LLT</router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/food-details">Details</router-link>
          <router-link class="nav-link" to="/cart">My Plan</router-link>
          <router-link class="nav-link mr-3" to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span class="cart-count">{{ count }}</span>
            <!-- <b-avatar class=""></b-avatar>
            <b-badge class="cart-count">{{ count }}</b-badge> -->
          </router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
        <!-- lang select -->
        <select class="custom-select" v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data () {
      return { langs: ['en', 'fr'] }
    },
    computed: {
      count() {
        return this.$store.state.cartItemCount;
      }
    },
}
</script>

<style>
  .cart-count {
    font-size: 14px;
    color: white;
    padding: 0 5px;
    margin-left: -10px;
    background: #000;
    /* height: 20px; */
    /* width: 20px; */
    border-radius: 100%;
    position: absolute;
  }
</style>
