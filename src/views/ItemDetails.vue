<template>
  <b-container fluid class="p-5 mt-4" style="background-color: #f0aea2;">
  <!-- <b-container fluid class="p-5 mt-4" style="background-color: #f05323; orange"> -->
    <b-row class="d-flex text-left"
    v-for="items in page1" :key="items.id">
      <b-col lg="5" class="d-flex flex-column justify-content-start align-items-start text-left p-5 bg-light">
        <h3 class="my-4" v-html="items.introTitle"></h3>
        <p v-html="items.introText"></p>
      </b-col>

      <!-- <b-col lg="12">
        <h3 class="my-4 px-3">Top rated</h3>
      </b-col> -->
      <!-- <router-link to="/path-one">
        Beginner
      </router-link> -->

<b-col lg="7" class="d-flex flex-wrap">
      <b-col lg="6"
      v-on:click="foodDetails(items)" 
      v-for="items in topRated" :key="items.id">
      <!-- slice limits the number of iterations in the object/array -->
      <!-- <b-col lg="4" v-for="items in topRated.slice(0, 2)" :key="items.id"> -->
        <!-- <b-img :src="items.url" class="shadow w-100" style="border-radius: 10px"></b-img>
        <h5>{{ items.name }}</h5> -->
        <b-card
          :title="items.name"
          :img-src="items.url"
          img-alt="Image"
          img-top
          tag="article"
          class="border-0 rounded-0 mb-3 shadow"
          >
          <b-card-text>
            <p>{{ items.description }}</p>  
            <b-button variant="outline-dark" class="w-100 rounded-0">More details</b-button>
            
            <!-- <router-link :to="{ name: 'FoodDetails', params: {id: topRated.id}}"></router-link> -->
          </b-card-text>
        </b-card>
      </b-col>
</b-col>
    </b-row>

    
  </b-container>
</template>

<script>
export default {
  name: 'ItemDetails',
  components: {
  },
  computed: {
    page1() {
      return this.$store.state.page1;
    },
    topRated() {
      return this.$store.state.topRated;
    },
     allCategories() {
      return this.$store.state.allCategories;
    },
     dishesNearYou() {
      return this.$store.state.dishesNearYou;
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
