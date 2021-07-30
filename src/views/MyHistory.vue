<template>
  <b-container fluid contClass="bg-gradient-lightblue">
    <div v-for="items in $t('myHistory')" :key="items.id">
        <b-row 
        class="flex-column justify-content-end align-items-start text-left relative min-h-75">
            <b-img-lazy
            :src="items.img.img2"
            :alt="items.imgAlt.img2" 
            v-bind="imgProps"
            class="w-100 h-100 absolute cover z-0 left top animate__animated animate__fadeIn"></b-img-lazy>
            <!-- color strip -->
            <div class="absolute bottom w-100 z-0 bg-yellow-trans" style="height: 200px"></div>
            <b-col lg="8"
            style="position: relative; z-index: 3;"
            class="flex-column justify-content-center align-items-start p-4 pt-5 p-md-5 mt-5">
                 <div class="bg-glass p-5" style="border-radius: 14px">
                    <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle1"></h5>
                    <h1 class="display-4 font-weight-bold mb-4"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.title1"></h1>
                    <hr class="d-flex m-0 mr-auto my-3 bg-yellow" style="height: 4px; width: 50px;">
                    <p class="mb-2" v-html="items.text1"></p>
                    <b-icon icon="chevron-double-down" class="mt-3" variant="dark" font-scale="2"></b-icon>
                </div>
                <!--/content-->
            </b-col>
        </b-row>

        <!-- <b-row
        class="flex-column justify-content-end align-items-start text-left bg-taieri">
          <b-col lg="12" class="p-5">
            <ul>
              <span v-for="item in mergedArray" :key="item.id">
                <b-img :src="item.img" style="width: 80px; height: 80px" class="shadow rounded"></b-img>
                <li v-html="item.id"></li>
                <li v-html="item.name"></li>
                <li v-html="item.category"></li>
              </span>
            </ul>
          </b-col>
        </b-row> -->

        <b-row
        class="flex-column justify-content-end align-items-start text-left bg-taieri">
          <b-col lg="12" class="p-5">
            <b-card no-body class="bg-glass border-0 overflow-hidden mb-3"
            v-for="item in mergedArray" :key="item.id"
            @click="itemDetails(items)">
                <b-row no-gutters>
                    <b-col md="3">
                        <b-card-img 
                        :src="item.img" 
                        class="img-fluid h-100 rounded-0 cover">
                        </b-card-img>
                    </b-col>
                    <b-col md="9">
                        <b-card-body 
                        body-class="d-flex flex-column justify-content-center align-items-start p-4 pb-5 p-md-5 relative" >
                            <b-card-text class="w-100">
                                <b-avatar icon="bookmarks-fill" size="2.5rem" rounded="lg" 
                                :class="item.color" 
                                class="absolute right top z-1 m-2 shadow"></b-avatar>
                                <h3 v-html="item.name" class="font-weight-bold m-0"></h3>
                                <p class="my-2 text-muted font-weight-bold border-top border-bottom py-3" v-html="item.category"></p>
                                <p class="mt-3" v-html="item.description"></p> 
                                <b-button variant="lightblue mt-2 stretched-link" v-html="items.btn"></b-button>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
          </b-col>
        </b-row>
        
      </div>
</b-container>
   <!-- <b-container fluid class="p-5 mt-4">
    <b-row class="text-left">
      <b-col lg="12">
        <h1>This is an about page</h1>
        <h3>Filter products by category</h3>
        <b-form-select v-model="category" :options="options"></b-form-select>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        <select v-model="category">
                <option valeu="Accessories">Accessories</option>
                <option valeu="Laptop">Laptop</option>
                <option valeu="Stationary">Stationary</option>
            </select> 
      </b-col>
    </b-row>
    <b-row class="d-flex py-5">
      <b-col lg="3" v-for="product in filterProductsByCategory" :key="product.name">
        <b-card
          :title="product.name"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text>
            <ul class="list-unstyled">
              <li>{{ product.name }}</li>
              <li>{{ product.price }}</li>
              <li>{{ product.category }}</li>
            </ul>
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      </b-row>
   </b-container> -->
</template>

<script>
import {lms} from '../mixins/lms'
import {animate} from '../mixins/animate'

export default {
  name: 'MyHistory',
  mixins: [animate, lms],
  data() {
    return {
      details: this.$route.params,
      data: '',
      mergedArray: [],
      imgProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: "100%",
          height: "100%"        
        },
      }
    },
    methods: {
      itemDetails(item) {
        this.$router.push({name: "ItemDetails", params: item });
      },
      // retrieve item route param details to LMS
      readSuspendData() {
        // assign returning data to a variable        
        let array = this.lmsGet("cmi.suspend_data");
        // convert incoming string to object
        let rehydrate = JSON.parse( array );
        // add object to empty data string for UI
        this.data = rehydrate;

        // create final merged array of suspended data marker + original data
        // var mergedArray = [];

        rehydrate.forEach(elementA => {
            this.cartArchive.forEach(elementB => {
                if (elementA.id == elementB.id) {
                    this.mergedArray.push(elementB);
                }
            });
        });
        console.log(this.mergedArray, 'My Archive activating')
      },
    },
    computed: {
      myHistory() {
        return this.$store.state.data.myHistory;
      },
      cartArchive() {
          return this.$store.state.cartArchive;
      },
      filterProductsByCategory() {
        return this.products.filter(product => !product.category.indexOf(this.category))
      },
    },
    mounted() {
      // rerun init in case window is refreshed
      this.lmsInitialize();
      this.readSuspendData();
    }
}
</script>

<style>
  .active {
    filter: drop-shadow(2px 2px 10px black);
  }
  .highlight {
  filter: drop-shadow(2px 2px 5px black);
  border-bottom: 1px solid grey;
}
</style>