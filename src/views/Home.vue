<template>
  <b-container fluid class="bg-light relative z--1 p-5 mt-4">
    <div class="w-100 bg-lightblue absolute z-0 left top" style="height: 400px; top: 450px;"></div>
    <b-row 
    no-gutters
    class="d-flex text-left bg-light shadow-lg mt-3 mb-4 relative"
    style="background: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%); border-radius: 14px"
    v-for="items in $t('homepage')" :key="items.id">
      <b-col lg="6" 
      class="d-flex flex-column justify-content-center align-items-start text-start p-5"
      style="min-height: 75vh;">
      <h1 class="h5 text-muted mb-3" v-html="items.title"></h1>
        <h5 
        class="font-weight-bold mb-4" 
        style="font-size: 9vmin; line-height: 95%;"
        v-html="items.microTitle"></h5>
        <hr class="d-flex ml-0 mr-auto mt-0 mb-4 bg-orange" style="height: 4px; width: 50px;">
        <p class="mb-0" v-html="items.text"></p>
      </b-col>
      <b-col lg="6" 
      class="d-flex flex-column justify-content-center align-items-center p-0"
      style="min-height: 50vh; background: url('./patternpad_3.svg') center no-repeat; background-size: 1200%;">
        <b-img class="w-100 h-100" style="object-fit: cover; border-radius: 0 14px 14px 0;" 
        src="./01leadershipcover.jpg"></b-img> 
      </b-col>
    </b-row>

<!-- filter dropdown/menu -->
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
      <!-- v-for="items in allCategories" :key="items.id"> -->

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
          <!-- style="background: url('./bg_dots.webp'); border-radius: 14px;" -->
          <b-card-text class="py-3">
            <h2 v-html="items.name" class="font-weight-bold"></h2>
            <p>{{ items.category }}</p>  
            <b-button variant="lightblue mr-2" class="">More details</b-button>
            <!-- <b-button variant="info" class="rounded">Add to plan</b-button> -->
            <!-- <router-link :to="{ name: 'FoodDetails', params: {id: topRated.id}}"></router-link> -->
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
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
      return this.$store.state.data.homepage;
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
    filterProductsByCategory() {
      return this.allCategories.filter(item => !item.category.indexOf(this.category))
      }
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
