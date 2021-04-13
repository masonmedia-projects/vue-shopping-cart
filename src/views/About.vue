<template>
   <b-container fluid class="p-5 mt-4">
    <b-row class="text-left">
      <b-col lg="12">
        <h1>This is an about page</h1>
        <h3>Filter products by category</h3>
        <b-form-select v-model="category" :options="options"></b-form-select>
        <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        <select v-model="category">
                <option valeu="Accessories">Accessories</option>
                <option valeu="Laptop">Laptop</option>
                <option valeu="Stationary">Stationary</option>
            </select>  -->
      </b-col>
    </b-row>
    <b-row class="d-flex py-5">
      <b-col lg="3" v-for="product in filterProductsByCategory" :key="product.name">
        <!-- <ul class="list-unstyled" v-for="product in filterProductsByCategory" :key="product.name">
          <li>Product: {{ product.name }} </li>
        </ul> -->

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
   </b-container>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
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
    filterProductsByCategory() {
      return this.products.filter(product => !product.category.indexOf(this.category))
    }
  },
}
</script>