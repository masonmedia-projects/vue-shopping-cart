<template>
  <b-container fluid class="bg-light relative z--1 p-4 p-md-5 mt-5 mt-md-4">
    <!-- bg taieri img -->
    <div class="w-100 bg-lightblue absolute z-0 left top" style="height: 400px; top: 450px;"></div>
    <!-- banner -->
    <b-row 
    no-gutters
    align-v="center"
    align-h="center"
    class="bg-light shadow-lg mt-3 mb-4 relative"
    style="border-radius: 14px; background: url('./img/Taieri.svg') right bottom; background-size: 500%;"
    v-for="items in $t('getStarted')" :key="items.id">
    <!-- white fs bg -->
    <div class="absolute left top z-0 bg-light w-50 h-100" style="border-radius: 14px;"></div>
      <b-col lg="6" 
      align-self="center"
      class="text-left p-5 bg-light">
        <h1 :class="fadeUp" class="h5 text-muted mb-3" v-html="items.microTitle"></h1>
        <h5 :class="fadeUp" class="page-title font-weight-bold mb-4"
        v-html="items.title"></h5>
        <hr :class="fadeUp" class="ml-0 mr-auto mt-0 mb-4 bg-lightblue" style="height: 4px; width: 50px;">
        <p :class="fadeUp" v-html="items.text"></p>
        <b-icon icon="chevron-double-down" 
        :class="fadeUp" class="mt-2" variant="dark" font-scale="2"></b-icon>
      </b-col>
      <b-col lg="6" 
      align-self="stretch"
      class="p-5 min-h-50">
        <b-img-lazy
        :src="items.img.banner"
        :alt="items.imgAlt.banner"
        v-bind="imgProps"
        class="w-100 cover animate__animated animate__fadeIn" style="border-radius: 0 14px 14px 0; filter: drop-shadow(2px 4px 10px #222222);" >
        </b-img-lazy> 
      </b-col>
    </b-row>

    <!-- future filter dropdown/menu -->
        <!-- <b-form-select v-model="category" :options="options"></b-form-select> -->
        <!-- <b-navbar fill class="mb-4 border rounded bg-gradient-lightblue" toggleable="lg" type="light" variant="light">
          <b-navbar-nav class="w-100" fill v-for="item in filterProductsByCategory" :key="item.name">
            <b-nav-item href="#">{{item.name}}</b-nav-item>
          </b-navbar-nav>
      </b-navbar> -->

    <b-row class="text-left">
      <b-col xl="4" md="6"
      class="text-center"
      v-on:click="itemDetails(items)" 
      v-for="items in $t('allCategories')" :key="items.id">
      <!-- slice limits the number of iterations in the object/array -->
      <!-- <b-col lg="4" v-for="items in topRated.slice(0, 2)" :key="items.id"> -->
        <b-card
          tag="article"
          header-class="font-weight-bold"
          class="border-0 mb-3 shadow"
          body-class="p-0"
          >
          <b-avatar icon="bookmarks-fill" size="2.5rem" rounded="lg" 
          :class="items.color" class="absolute left top z-1 m-2 shadow"></b-avatar>
          <!-- card content -->
          <b-card-img-lazy
          :img-alt="items.imgAlt"
          :src="items.img"
          v-bind="imgProps"
          style="filter: brightness(0.9)"
          ></b-card-img-lazy>
          <b-card-text class="pt-4 px-5 pb-5"
          v-for="item in $t('getStarted')" :key="item.id">
            <h2 v-html="items.name" class="font-weight-bold"></h2>
            <p v-html="items.category"></p>  
            <b-button variant="lightblue mr-2 stretched-link" v-html="item.detailsBtn"></b-button>
            <!-- <router-link :to="{ name: 'FoodDetails', params: {id: topRated.id}}"></router-link> -->
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'GetStarted',
  data() {
    return {
      selected: null,
      fadeUp: "animate__animated animate__fadeInUp animate__slow",
        options: [
          { value: '', text: 'All' },
          { value: 'Leading Yourself', text: 'Accessories' },
          { value: 'Collaborating with & Inspiring Others', text: 'Laptops' },
          { value: 'Communicating Effectively & with Empathy', text: 'Stationary' },
          { value: 'Executing Strategic & Operational Excellence', text: 'Stationary' },
          { value: 'Fostering Innovation and Agility', text: 'Stationary' },
          ],
      category: '',
      imgProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: "100%",
          height: "100%"       
        }
    }
  },
  computed: {
    getStarted() {
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
      itemDetails(item) {
        this.$router.push({name: "ItemDetails", params: item });
      }
    },  
}
</script>
