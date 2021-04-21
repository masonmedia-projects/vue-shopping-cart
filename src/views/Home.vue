<template>
  <b-container fluid class="p-5 mt-4" style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
    <!-- background: url('./patternpad.svg'); background-size: cover;" -->
  <!-- style="background: url(./bg_dots.webp); background-size: cover;" -->
    <!-- style="background: url(./Waimakariri.png); background-size: 120%;" -->
  <!-- <b-container fluid class="p-5 mt-4" style="background: url(./Waimakariri.png); background-position: 40% 30%; background-size: 300%; background-color: lightblue;"> -->
    <b-row class="d-flex text-left bg-light shadow-lg my-3 mx-1"
    style="background: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%); border-radius: 14px"
    v-for="items in $t('page1')" :key="items.id">
      <b-col lg="6" 
      class="d-flex flex-column justify-content-center align-items-start text-start p-5"
      style="min-height: 75vh;">
        <h1 
        class="font-weight-bold mb-4" 
        style="font-size: 10vmin; line-height: 95%;"
        v-html="items.introTitle"></h1>
        <hr class="d-flex ml-0 mr-auto mt-0 bg-warning" style="height: 4px; width: 50px;">
        <p class="mb-0" v-html="items.introText"></p>
      </b-col>
      <b-col lg="6" 
      class="d-flex flex-column justify-content-center align-items-center p-0"
      style="min-height: 50vh; background: url('./img/iconsFinance/9 - ECONOMY ANALYSIS.svg') center no-repeat; background-size: contain;">
        <!-- style="background: url('./patternpad_3.svg'); background-size: 500%; background-position: 100% 30%;" -->
      </b-col>
    </b-row>

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
          style="background: url('./bg_dots.webp'); border-radius: 14px;"
          >
          <b-card-text class="py-3">
            <h2 v-html="items.name" class="font-weight-bold"></h2>
            <p>{{ items.category }}</p>  
            <b-button variant="dark mr-2" class="rounded">More details</b-button>
            <b-button variant="info" class="rounded">Add to plan</b-button>
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
  computed: {
    page1() {
      return this.$store.state.data.page1;
    },
    topRated() {
      return this.$store.state.data.topRated;
    },
     allCategories() {
      return this.$store.state.data.allCategories;
    },
     dishesNearYou() {
      return this.$store.state.data.dishesNearYou;
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

<style>
    .card-img-top {
        border-radius: 14px 14px 0 0;
        min-height: 30vh;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    /* .bg-dots {
      background: url('./bg_dots.webp') center;
      background-size: cover;
    } */
</style>
