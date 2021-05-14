<template>
  <b-container fluid contClass="bg-gradient-lightblue">
    <div v-for="items in $t('aboutpage')" :key="items.id">
        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left relative min-vh-100">
            <b-img 
            :src="items.img.banner"
            :alt="items.imgAlt.banner" 
            class="w-100 h-100 absolute cover z-0 left top"></b-img>
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
                    <b-icon icon="chevron-double-down" class="mt-3" variant="dark" font-scale="2"></b-icon>
                </div>
                <!--/content-->
            </b-col>
        </b-row>

        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left relative min-vh-100">
            <b-img 
            :src="items.img.img2"
            :alt="items.imgAlt.img2" 
            class="w-100 h-100 absolute cover z-0 left top"></b-img>
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
                    <b-icon icon="chevron-double-down" class="mt-3" variant="dark" font-scale="2"></b-icon>
                </div>
                <!--/content-->
            </b-col>
        </b-row>

        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left relative min-vh-100">
            <b-img 
            :src="items.img.img3"
            :alt="items.imgAlt.img3" 
            class="w-100 h-100 absolute cover z-0 left top"></b-img>
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
                    <!-- modal -->
                    <b-button 
                    v-b-modal.modal-center
                    variant="lightblue" 
                    size="lg"
                    class="w-sm-100 mt-4 mr-2">Learn more</b-button>
                    <b-modal 
                    id="modal-center" 
                    centered 
                    size="lg"
                    title="Leadership Learning Tool"
                    body-class="px-5 pt-4 pb-5"
                    content-class="bg-glass"
                    ok-title="Get started"
                    ok-variant="orange">

<!-- card layout from details page -->
                    <!-- <b-row class="px-2">
                        <b-col md class="d-flex flex-column mx-2 mb-3 p-4 bg-glass rounded" v-for="item in details.moreDetail" :key="item.index">
                            <b-icon icon="info-square" variant="lightblue mb-3" class="mr-2" font-scale="2"></b-icon>
                            <p class="h-100 pl-3 border-left border-lightblue-trans" v-html="item"></p>
                            <p class="small text-lightblue pb-2 border-bottom border-lightblue-trans mt-auto mb-0" v-html="details.name"></p>
                        </b-col>
                    </b-row> -->
                      
                      <b-icon icon="info-square" variant="lightblue mb-3" class="" font-scale="3"></b-icon>
                      <h3 class="font-weight-bold text-lightblue mb-3 py-3 border-top border-bottom border-lightblue-trans">Where to start</h3>
                      <h5 class="alert alert-lightblue my-4">If you’re unsure of which key leader competencies to focus on:</h5>
                      <ul>
                        <li>Review the Leadership Behaviour Model and choose your areas of focus through self-reflection and speaking with your colleagues.</li> 
                        <li>Reflect on what you’re passionate about developing.</li>
                      </ul>
                      <h5 class="alert alert-yellow my-4">Talk to others</h5>
                      <ul>
                        <li>Connect with those around you – your leader, other team members, and your direct reports.</li>
                        <li>Set the context for the conversation by sharing your desire to grow as a leader and ask them: 
                      What do you appreciate about me?</li>
                        <li>What could I do to be even more effective?</li>
                      </ul>
                      <h5 class="alert alert-green my-4">Reflect </h5>
                      <ul>
                        <li>How did this feedback make you feel?</li>
                        <li>Did it reinforce or add to what you considered were your areas for growth?</li>
                        <li>Choose your initial 2–3 areas of focus. Return to this tool, and select Get Started.</li>
                      </ul>

                    </b-modal>

                    <router-link to="/get-started">
                        <b-button 
                        variant="orange" 
                        size="lg"
                        class="w-sm-100 mt-4" v-html="items.btn1"></b-button>
                    </router-link>
                </div>
                <!--/content-->
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