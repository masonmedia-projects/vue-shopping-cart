<template>
  <b-container fluid contClass="bg-gradient-lightblue">
    <div v-for="items in $t('aboutpage')" :key="items.id">
        <b-row 
        class="flex-column justify-content-end align-items-start text-left relative min-vh-100">
            <b-img-lazy
            :src="items.img.banner"
            :alt="items.imgAlt.banner" 
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


        <b-row
        class="flex-column justify-content-end align-items-start text-left">
          <b-col lg="12" class="p-5">
            <b-card no-body class="bg-glass border-0 overflow-hidden mb-3"
            v-for="items in cartArchive" :key="items.id">
                <b-row no-gutters>
                    <b-col md="3">
                        <b-card-img 
                        :src="items.img" 
                        :alt="items.imgAlt" 
                        class="img-fluid h-100 rounded-0 cover">
                        </b-card-img>
                    </b-col>
                    <b-col md="9">
                        <b-card-body 
                        body-class="d-flex flex-column justify-content-center align-items-start p-4 pb-5 p-md-5 relative" >
                            <b-card-text class="w-100">
                                <b-avatar icon="bookmarks-fill" size="2.5rem" rounded="lg" :class="items.color" class="absolute right top z-1 m-2 shadow"></b-avatar>
                                <h3 v-html="items.name" class="font-weight-bold m-0"></h3>
                                <p class="my-2 text-muted font-weight-bold border-top border-bottom py-3" v-html="items.category"></p>
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
export default {
  name: 'About',
  data() {
    return {
      imgProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: "100%",
          height: "100%"        
        },
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
        cartArchive() {
            return this.$store.state.cartArchive;
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