<template>
  <b-container fluid contClass="bg-gradient-lightblue">
        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left relative min-h-100" 
        v-for="items in $t('aboutpage')" :key="items.id">
            <b-img :src="items.bannerImg" 
            class="w-100 h-100" 
            style="object-fit: cover; position: absolute; z-index: 0; right: 0; top: 0;"></b-img>
            <!-- color strip -->
            <div class="absolute bottom w-100 z-0 bg-yellow-trans" style="height: 200px"></div>
            <b-col lg="8"
            style="position: relative; z-index: 3;"
            class="d-flex flex-column justify-content-center align-items-start p-4 pt-5 p-md-5 mt-5">
                 <div class="bg-glass p-5" style="border-radius: 14px">
                    <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle1"></h5>
                    <h1 class="display-4 font-weight-bold mb-4"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.title1"></h1>
                    <hr class="d-flex m-0 mr-auto my-3 bg-yellow" style="height: 4px; width: 50px;">
                    <p class="mb-2" v-html="items.text1"></p>
                    <scroll-down-icon class="mt-4 text-dark"></scroll-down-icon>

                    <!-- tabs -->
                    <!-- <div>
                        <transition name="fade" appear>
                            <div>
                              <component :is="selectedComponent"></component>
                              <hr class="d-flex mx-0 mr-auto bg-warning" style="height: 4px; width: 50px; margin: 30px 0">
                              <div class="d-flex mb-4">
                                <b-button 
                                  variant="coral" 
                                  size="lg"
                                  class="shadow mr-2" 
                                  :class="{highlight:selected == 1}"
                                  @click="selectedComponent = 'TabOne'"
                                  v-html="items.btn1">Read more</b-button>
                                  <b-button 
                                  variant="lightpink" 
                                  size="lg"
                                  class="shadow mr-2" 
                                  @click="selectedComponent = 'TabTwo'"
                                  v-html="items.btn2"></b-button>
                                  <b-button 
                                  variant="bluegrey" 
                                  size="lg"
                                  class="shadow" 
                                  @click="selectedComponent = 'TabThree'"
                                  v-html="items.btn3">Three</b-button>
                              </div>
                            </div>
                        </transition>
                    </div> -->
                </div>
                <!--/content-->
            </b-col>
        </b-row>

        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left relative min-h-100" 
        v-for="items in $t('aboutpage')" :key="items.id">
            <b-img :src="items.img2" 
            class="w-100 h-100" 
            style="object-fit: cover; position: absolute; z-index: 0; right: 0; top: 0;"></b-img>
            <!-- color strip -->
            <div class="absolute bottom h-25 w-100 z-0 bg-purple-trans"></div>
            <b-col lg="8" offset-lg="4"
            style="position: relative; z-index: 3;"
            class="d-flex flex-column justify-content-center align-items-start p-4 pt-5 p-md-5">
                <div class="bg-glass p-5" style="border-radius: 14px">
                    <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle2"></h5>
                    <h1 class="display-4 font-weight-bold mb-4"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.title2"></h1>
                    <hr class="d-flex m-0 mr-auto my-3 bg-purple" style="height: 4px; width: 50px;">
                    <p class="mb-2" v-html="items.text2"></p>
                    <scroll-down-icon class="mt-4 text-dark"></scroll-down-icon>
                </div>
                <!--/content-->
            </b-col>
        </b-row>

        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left relative min-h-100" 
        v-for="items in $t('aboutpage')" :key="items.id">
            <b-img :src="items.img3" 
            class="w-100 h-100" 
            style="object-fit: cover; position: absolute; z-index: 0; right: 0; top: 0;"></b-img>
            <!-- color strip -->
            <div class="absolute bottom h-25 w-100 z-0 bg-orange-trans"></div>
            <b-col lg="8"
            style="position: relative; z-index: 3;"
            class="d-flex flex-column justify-content-center align-items-start p-4 pt-5 p-md-5">
                <div class="bg-glass p-5" style="border-radius: 14px">
                    <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle3"></h5>
                    <h1 class="display-4 font-weight-bold mb-4"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.title3"></h1>
                    <hr class="d-flex m-0 mr-auto my-3 bg-orange" style="height: 4px; width: 50px;">
                    <p class="mb-2" v-html="items.text3"></p>
                    <router-link to="/get-started">
                        <b-button 
                        variant="orange" 
                        size="lg"
                        class="mt-4" v-html="items.btn1"></b-button>
                    </router-link>
                </div>
                <!--/content-->
            </b-col>
        </b-row>
        
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
    // import TabOne from '@/components/tabs/TabOne.vue';
    // import TabTwo from '@/components/tabs/TabTwo.vue';
    // import TabThree from '@/components/tabs/TabThree.vue';
import ScrollDownIcon from '../components/icons/ScrollDownIcon.vue'

export default {
  name: 'About',
  components: {
    // TabOne,
    // TabTwo,
    // TabThree,
    ScrollDownIcon
  },
  data() {
    return {
      // selected: undefined,
      selectedComponent: 'TabOne',
      selected: null,
        options: [
          { value: '', text: 'All' },
          { value: 'Accessories', text: 'Accessories' },
          { value: 'Laptop', text: 'Laptops' },
          { value: 'Stationary', text: 'Stationary' },
          ],
    
            category: '',
            products: [
                { name: "Keyboard", 
                  price: 44, 
                  category: 'Accessories', 
                  details: [
                    "Seeing yourself clearly and objectively through reflection and introspection",
                    "Knowing your strengths, opportunities, beliefs, biases, motivations, and emotions",
                    "Seeking feedback to learn how others perceive you, your attitude, and your responses to them",
                  ],
                  selectIf: [
                    "You’d like to learn about others perception of you",
                    "You’d like to feel empowered to make changes and build on your areas of strengths and opportunities"
                  ],
                },
                { name: "Mouse", price: 20, category: 'Accessories'},
                { name: "Monitor", price: 399, category: 'Accessories'},
                { name: "Dell XPS", price: 599, category: 'Laptop'},
                { name: "MacBook Pro", price: 899, category: 'Laptop'},
                { name: "Pencil Box", price: 6, category: 'Stationary'},
                { name: "Pen", price: 2, category: 'Stationary'},
                { name: "USB Cable", price: 7, category: 'Accessories'},
                { name: "Eraser", price: 2, category: 'Stationary'},
                { name: "Highlighter", price: 5, category: 'Stationary'}
            ]
          }
        },
    methods: {
      itemDetails(item) {
        this.$router.push({name: "ItemDetails", params: item });
      }
    },
    computed: {
      aboutpage() {
        return this.$store.state.data.aboutpage;
      },
      filterProductsByCategory() {
        return this.products.filter(product => !product.category.indexOf(this.category))
      },
    },
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