<template>
  <div>
  <b-navbar 
  fixed="top" 
  toggleable="lg" 
  type="light" 
  variant="light" 
  class="shadow py-3 py-lg-2"
  v-for="items in $t('menu')" :key="items.id">
    <router-link 
    class="d-flex navbar-brand font-weight-bold align-items-center" to="/"
    v-html="items.navbarBrand">
    </router-link> 

    <b-navbar-toggle target="nav-collapse">
      <!-- custom mobile toggle icon -->
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up" class="h3 mb-0"></b-icon>
        <b-icon v-else icon="chevron-bar-down" class="h3 mb-0"></b-icon>
      </template>
    </b-navbar-toggle>

    <!-- sidebar cart review -->
    <b-sidebar 
    id="sidebar-right" 
    title="My plan" 
    header-class="py-3 mb-0 h5 border-bottom"
    body-class="bg-taieri"
    right 
    shadow
    backdrop>
    <template #footer="{ hide }">
       <div class="d-flex flex-wrap bg-yellow text-light justify-content-center align-items-center px-3 py-2">
        <b-button size="sm" variant="lightblue" class="flex-fill mr-1 font-weight-bold" @click="hide" v-html="items.close"></b-button>
        <b-button size="sm" variant="royal" class="flex-fill font-weight-bold" @click="goToCart(); hide()" v-html="items.checkout"></b-button>
       </div>
      </template>
      <div class="px-4 py-2 h-100">
        <b-navbar-nav class="ml-auto text-left">
          <div v-if="totalPrice > 0" class="d-flex flex-column justify-content-start align-items-start">
          <b-card
          class="mb-2 shadow bg-glass"
          v-for="items in cartItems" :key="items.id"
          >
            <b-card-text>
              <!-- /remove item -->
              <div @click="removeItem(items)" type="button" aria-label="Close" class="font-weight-bold absolute right top p-1">
                <b-icon icon="x" class="mr-1" font-scale="1"></b-icon>
              </div>
              <!-- item title -->
              <b-media class="mb-3 mt-2 d-flex align-items-center bg-light rounded" 
              vertical-align="center">
                    <template #aside class="media-aside align-self-center mr-3">
                      <b-avatar icon="bookmarks-fill" size="2.5rem" rounded="left" :class="items.color"></b-avatar>
                    </template>
                    <h5 class="small font-weight-bold w-100 mb-0" v-html="items.name"></h5>
                </b-media>
              <p class="mb-0 pt-2 mt-1 small border-top" style="line-height: 1.3;" v-html="items.description"></p>
            </b-card-text>
          </b-card>
          </div>
          <!-- show empty cart if no items -->
          <div v-else>
            <div 
            class="d-flex flex-column justify-content-center align-items-center min-h-50"
            v-for="items in $t('myLearningPlan')" :key="items.index">
              <b-icon 
              icon="person-circle" 
              variant="secondary"
              font-scale="6"
              class="align-self-center bg-yellow rounded-circle shadow" 
              title="There are no items in my plan"></b-icon>
              <span class="sr-only">There are no items in my plan</span>
                <h5 class="my-4 px-3 text-center" v-html="items.emptyPlan"></h5>
            </div>
        </div>
      </b-navbar-nav>
      </div>
    </b-sidebar>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav 
      class="d-flex justify-content-center align-items-start align-items-lg-center ml-auto">
        <li
        v-for="item in items.menuItems" :key="item.id">
            <router-link class="nav-link" :to="item.url" v-html="item.link"></router-link>
        </li>

            <!-- info question mark icon for about modal -->
            <div v-b-modal.modal-center class="nav-link mr-1">
            <b-icon 
              icon="question-circle" 
              variant="secondary"
              font-scale="1.7"
              class="d-flex align-self-center"></b-icon>
            </div>
            <about-modal></about-modal>

          <!-- //cart icon sidebar activate  -->
          <div v-b-toggle.sidebar-right class="nav-link mr-3">
            <b-icon 
              icon="cart" 
              variant="secondary"
              font-scale="1.8"
              class="align-self-center" 
              title="There are no items in my plan"></b-icon>
            <!-- menu cart counter -->
            <!-- <b-badge class="cart-count" variant="success">{{ count }}</b-badge> -->
          </div>
          
      </b-navbar-nav>
      <b-navbar-nav class="nav-item py-2">
        <!-- lang select -->
        <select class="custom-select mr-3 mt-3 mb-2 mt-lg-0 mb-lg-0" v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
        <!-- gear icon/exit modal -->
        <exit-modal :logout="items.logout"></exit-modal>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import AboutModal from '../AboutModal.vue';
import ExitModal from './ExitModal.vue';
import {lms} from '../../mixins/lms';

export default {
    name: 'HeaderComponent',
    mixins: [lms],
    components: {
        ExitModal,
        AboutModal,
    },
    data () {
      return { 
          langs: ['en', 'fr'],
        }
    },
    methods: { 
        itemDetails(item) {
        this.$router.push({name: "ItemDetails", params: item });
      },
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
      isDisabled() {
          return !this.active;
        },
      cartItems() {
            return this.$store.state.cartItems;
        },
      cartArchive() {
        return this.$store.state.cartArchive;
      },
        // changed price to id so items without price would be recognized
        totalPrice() {
            let price = 0;
            this.$store.state.cartItems.map(el => {
                price += el["quantity"] * el["id"]
            })
            return price;
        },
        menu() {
          return this.$store.state.data.menu;
        },
      count() {
        return this.$store.state.cartItemCount;
      }
    },
     mounted() {
    }
}
</script>

<style>

.disabled
  {
    cursor: none;
    pointer-events: none;
    opacity: 0.6;
  }

.active {
  background: #f00;
  color: pink;
  opacity: 1;
  cursor: pointer;
}

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
