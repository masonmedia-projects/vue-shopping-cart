<template>
  <b-container fluid class="p-5 mt-4">
    <!-- style="background: url(./Waimakariri.png); background-size: 120%;" -->
  <!-- <b-container fluid class="p-5 mt-4" style="background-color: #f05323; orange"> -->
    <b-row class="d-flex text-left"
    v-for="items in $t('page1')" :key="items.id">
      <b-col lg="8" offset-lg="2" class="d-flex flex-column justify-content-center align-items-center text-center p-5 min-h-50">
        <h1 class="font-weight-bold my-4 px-3" v-html="items.introTitle"></h1>
        <hr class="d-flex mx-auto mt-0 bg-warning" style="height: 4px; width: 50px;">
        <p class="mb-0" v-html="items.introText"></p>
      </b-col>
      <b-col lg="4"
      v-on:click="foodDetails(items)" 
      v-for="items in allCategories" :key="items.id">
      <!-- slice limits the number of iterations in the object/array -->
      <!-- <b-col lg="4" v-for="items in topRated.slice(0, 2)" :key="items.id"> -->
        <!-- <b-img :src="items.url" class="shadow w-100" style="border-radius: 10px"></b-img>
        <h5>{{ items.name }}</h5> -->
        <b-card
          :img-src="items.url"
          img-alt="Image"
          img-top
          tag="article"
          header-class="font-weight-bold"
          class="border-0 rounded-0 mb-3 shadow"
          >
          <b-card-text>
            <h2 v-html="items.name"></h2>
            <p>{{ items.category }}</p>  
            <b-button variant="outline-dark" class="w-100 rounded-0">More details</b-button>
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
  components: {
    // HelloWorld
  },
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
        border-radius: 0;
        min-height: 30vh;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>
