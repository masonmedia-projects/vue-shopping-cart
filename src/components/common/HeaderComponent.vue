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
    Leadership Learning Tool
    </router-link> 
    <b-navbar-toggle target="nav-collapse">
      <!-- custom mobile toggle icon -->
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up" class="h3 mb-0"></b-icon>
        <b-icon v-else icon="chevron-bar-down" class="h3 mb-0"></b-icon>
      </template>
    </b-navbar-toggle>

    <!-- sidebar cart review -->
    <!-- <b-sidebar 
    id="sidebar-right" 
    title="My plan" 
    header-class="py-3 h5 border-bottom"
    body-class="bg-taieri"
    right 
    shadow
    backdrop>
    <template #footer="{ hide }">
       <div class="d-flex flex-wrap bg-yellow text-light justify-content-end px-3 py-2">
        <b-button size="sm" variant="lightblue" class="mr-1 font-weight-bold" @click="hide">Keep exploring</b-button>
        <b-button size="sm" variant="orange" class="font-weight-bold" @click="goToCart">Checkout</b-button>
       </div>
      </template>
      <div class="px-4 py-2">
        <b-navbar-nav class="ml-auto text-left">
          <div v-if="totalPrice > 0" class="d-flex flex-column justify-content-start align-items-start">
          <b-card
          class="mb-2 shadow bg-lightblue-trans"
          v-for="items in cartItems" :key="items.id"
          >
            <b-card-text>
              /remove item
              <div @click="removeItem(items)" type="button" aria-label="Close" class="font-weight-bold absolute right top p-2">
                <close-icon></close-icon>
              </div>
              <h5 class="font-weight-bold badge badge-green py-2" v-html="items.name"></h5>
              <p class="mb-0 pt-2 mt-1 small border-top" style="line-height: 1.3;" v-html="items.description"></p>
            </b-card-text>
          </b-card>
          </div>
          /show empty cart if no items
          <div v-else>
            <div 
            class="d-flex flex-column justify-content-center align-items-center min-h-50"
            v-for="items in $t('myLearningPlan')" :key="items.index">
               <user-icon class="text-lightblue shadow rounded-circle" style="height: 75px; width: 75px;"></user-icon>
                <h5 class="my-4 px-3 text-center" v-html="items.emptyPlan"></h5>
            </div>
        </div>
      </b-navbar-nav>
      </div>
    </b-sidebar> -->

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto d-flex justify-content-center align-items-start align-items-lg-center">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/get-started">Get Started</router-link>
          <router-link class="nav-link" to="/about">About This Tool</router-link>
          <router-link class="nav-link" to="/my-plan">My Plan</router-link>
          
          <!-- //sidebar activate  -->
          <!-- <div v-b-toggle.sidebar-right class="nav-link mr-3">
            <user-icon class="user-icon"></user-icon>
            <b-badge class="cart-count" variant="success">{{ count }}</b-badge>
          </div> -->

          <!-- my-plan link -->
          <router-link class="nav-link mr-3" to="/my-plan">
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
// import CloseIcon from '../icons/CloseIcon.vue';
import UserIcon from '../icons/UserIcon.vue';
import ExitModal from './ExitModal.vue';

export default {
    name: 'HeaderComponent',
    components: {
        ExitModal,
        UserIcon,
        // CloseIcon,
    },
    data () {
      return { langs: ['en', 'fr'] }
    },
    methods: {
      // close exit modal
      hideModal() {
        this.$refs['exit-modal'].hide()
      },
      // nav to my-plan page
      goToCart() {
        this.$router.push("/my-plan");
      },
      removeItem(items) {
        this.$store.dispatch("removeItem", items)
      },
    },
    computed: {
      cartItems() {
            return this.$store.state.cartItems;
        },
        // changed price to id so items without price would be recognized
        totalPrice() {
            let price = 0;
            this.$store.state.cartItems.map(el => {
                price += el["quantity"] * el["id"]
            })
            return price;
        },
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
