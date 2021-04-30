<template>

<!-- <div class="w-100 bg-light py-2 px-3 d-flex justify-content-end align-items-center" style="position: absolute; z-index: 100; right: 0; top: 0;">
    <svg v-b-toggle.sidebar-right xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
        <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
    </svg>

    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-4 py-2 d-flex align-self-end display-3 text-right">
        <b-navbar-nav class="ml-auto">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/food-details">Details</router-link>
          <router-link class="nav-link" to="/cart">My Plan</router-link>
          <router-link class="nav-link" to="/cart">
          <b-badge class="cart-count" variant="primary">{{ count }}</b-badge>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span class="cart-count">{{ count }}</span>
          </router-link>
      </b-navbar-nav>
      </div>
    </b-sidebar>
  </div> -->
  
  <b-navbar 
  fixed="top" 
  toggleable="lg" 
  type="light" 
  variant="light" 
  class="shadow py-3 py-lg-2">
    <router-link class="navbar-brand font-weight-bold d-flex align-items-center" to="/">
    <navbar-brand-icon class="text-lightblue" />Leadership Learning Tool
    </router-link> 
    <b-navbar-toggle target="nav-collapse">
      <!-- custom mobile toggle icon -->
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up" class="h3 mb-0"></b-icon>
        <b-icon v-else icon="chevron-bar-down" class="h3 mb-0"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto d-flex justify-content-center align-items-start align-items-lg-center">
          <router-link class="nav-link" to="/get-started">Get Started</router-link>
          <router-link class="nav-link" to="/about">About This Tool</router-link>
          <router-link class="nav-link" to="/cart">My Plan</router-link>
          <router-link class="nav-link mr-3" to="/cart">
            <!-- <b-avatar badge-variant="success" icon="person-circle"></b-avatar> -->
            <user-icon class="user-icon"></user-icon>
            <b-badge class="cart-count" variant="success">{{ count }}</b-badge>
          </router-link>
      </b-navbar-nav>
      <b-navbar-nav class="nav-item py-2">
        <!-- lang select -->
        <select class="custom-select mr-3" v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
        <!-- gear icon/exit modal -->
        <exit-modal></exit-modal>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import NavbarBrandIcon from '../icons/NavbarBrandIcon.vue';
import UserIcon from '../icons/UserIcon.vue';
import ExitModal from './ExitModal.vue';

export default {
    name: 'HeaderComponent',
    components: {
        NavbarBrandIcon,
        ExitModal,
        UserIcon,
    },
    data () {
      return { langs: ['en', 'fr'] }
    },
    methods: {
      hideModal() {
        this.$refs['exit-modal'].hide()
      },
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
    /* padding: 0 5px; */
    margin-left: -10px;
    /* background: #000; */
    /* height: 20px; */
    /* width: 20px; */
    /* border-radius: 100%; */
    position: absolute;
  }

</style>
