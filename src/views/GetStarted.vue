<template>
  <b-container fluid class="bg-light relative z--1 p-5 mt-4">
    <div class="w-100 bg-lightblue absolute z-0 left top" style="height: 400px; top: 450px;"></div>
    <b-row 
    no-gutters
    class="d-flex text-left bg-light shadow-lg mt-3 mb-4 relative"
    style="background: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%); border-radius: 14px"
    v-for="items in $t('getStarted')" :key="items.id">
      <b-col lg="6" 
      class="d-flex flex-column justify-content-center align-items-start text-start p-5"
      style="min-height: 75vh;">
        <h1 class="h5 text-muted mb-3" v-html="items.microTitle"></h1>
        <h5 
        class="font-weight-bold mb-4" 
        style="font-size: 9vmin; line-height: 95%;"
        v-html="items.title"></h5>
        <hr class="d-flex ml-0 mr-auto mt-0 mb-4 bg-orange" style="height: 4px; width: 50px;">
        <p class="" v-html="items.text1"></p>
        <!-- <p class="" v-html="items.text2"></p> -->
        <scroll-down-icon class="mt-3 text-dark"></scroll-down-icon>
      </b-col>
      <b-col lg="6" 
      class="d-flex flex-column justify-content-center align-items-center p-0"
      style="min-height: 50vh;">
        <b-img class="w-100 h-100" style="object-fit: cover; border-radius: 0 14px 14px 0;" 
        :src="items.bannerImg"></b-img> 
      </b-col>
    </b-row>

    <!-- future filter dropdown/menu -->
        <!-- <b-form-select v-model="category" :options="options"></b-form-select> -->
        <!-- <b-navbar fill class="mb-4 border rounded bg-gradient-lightblue" toggleable="lg" type="light" variant="light">
          <b-navbar-nav class="w-100" fill v-for="item in filterProductsByCategory" :key="item.name">
            <b-nav-item href="#">{{item.name}}</b-nav-item>
          </b-navbar-nav>
      </b-navbar> -->

    <b-row class="d-flex text-left">
      <b-col lg="4"
      class="text-center"
      v-on:click="foodDetails(items)" 
      v-for="items in allCategories" :key="items.id">
      <!-- slice limits the number of iterations in the object/array -->
      <!-- <b-col lg="4" v-for="items in topRated.slice(0, 2)" :key="items.id"> -->
        <b-card
          :img-src="items.url"
          img-alt="Image"
          img-top
          tag="article"
          header-class="font-weight-bold"
          class="border-0 mb-3 shadow"
          >
          <b-card-text class="py-3">
            <h2 v-html="items.name" class="font-weight-bold"></h2>
            <p>{{ items.category }}</p>  
            <b-button variant="lightblue mr-2" class="">Details</b-button>
            <!-- <router-link :to="{ name: 'FoodDetails', params: {id: topRated.id}}"></router-link> -->
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ScrollDownIcon from '../components/icons/ScrollDownIcon.vue'

export default {
  name: 'GetStarted',
  components: {
    ScrollDownIcon,
  },
  data() {
    return {
      selected: null,
        options: [
          { value: '', text: 'All' },
          { value: 'Leading Yourself', text: 'Accessories' },
          { value: 'Collaborating with & Inspiring Others', text: 'Laptops' },
          { value: 'Communicating Effectively & with Empathy', text: 'Stationary' },
          { value: 'Executing Strategic & Operational Excellence', text: 'Stationary' },
          { value: 'Fostering Innovation and Agility', text: 'Stationary' },
          ],
      category: '',
    }
  },
  computed: {
    page1() {
      return this.$store.state.data.getStarted;
    },
    topRated() {
      return this.$store.state.data.topRated;
    },
     allCategories() {
      return this.$store.state.data.allCategories;
    },
     dishesNearYou() {
      return this.$store.state.data.dishesNearYou;
    },
    // filter function
    // filterProductsByCategory() {
    //   return this.allCategories.filter(item => !item.category.indexOf(this.category))
    //   }
  },
  // route programmatically to retrieve each food detail without creating a new page
  // https://vueschool.io/lessons/vuejs-router-creating-routes
  methods: {
      foodDetails(item) {
        this.$router.push({name: "FoodDetails", params: item });
      }
    },  
}
</script>
