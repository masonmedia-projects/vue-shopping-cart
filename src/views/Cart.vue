<template>
    <b-container class="" style="min-height: 100vh">
        <b-row 
        class="d-flex justify-content-center align-items-start text-left p-5"
        v-if="totalPrice > 0">
        <b-col lg="12"
        v-for="item in $t('myLearningPlan')" :key="item.id"
        class="d-flex flex-column justify-content-center align-items-center text-center pt-5 pb-3">
            <h1 class="display-3 font-weight-bold mb-4 mt-3" 
            style="line-height: 90%;"
            v-html="item.title"></h1>
            <hr class="d-flex mx-auto mt-0 bg-warning" 
            style="height: 4px; width: 50px;">
            <p class="mb-0" v-html="item.description"></p>
        </b-col>
        <hr class="text-dark bg-dark w-100" />
            <b-col lg="12" class="d-flex flex-column justify-content-start align-items-start py-3">
                <b-card no-body class="shadow border-0 overflow-hidden mb-3"
                v-for="items in cartItems" :key="items.id">
                    <b-row no-gutters>
                    <b-col md="5">
                        <b-card-img :src="items.url" alt="Image" class="h-100 rounded-0" style="object-fit: cover"></b-card-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body 
                        body-class="d-flex flex-column justify-content-center align-items-start" >
                            <b-card-text>
                                <h4 class="mt-3" v-html="items.name"></h4>
                                <p class="mb-0 my-2 small text-muted" v-html="items.category"></p>
                                <p class="mb-0 pb-3" v-html="items.description"></p>
                                <!-- <div class="">
                                    <b-button @click="removeItem(items)" class="remove">-</b-button>
                                    <span class="cart-quantity px-3">{{ items.quantity }}</span>
                                    <b-button @click="addItem(items)" class="add">+</b-button>
                                </div> -->
                                <b-button variant="outline-dark" class="rounded-0 mt-2 mr-2" @click="removeItem(items)">Remove</b-button>
                                <a :href="cartItems" download target="_blank"> 
                                    <b-button variant="success" class="rounded-0 mt-2">Download</b-button>
                                </a>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <hr class="text-dark bg-dark w-100" />
            <b-col lg="12" class="d-flex flex-column justify-content-start align-items-start p-0">
                <cart-summary :totalPrice="totalPrice"></cart-summary>
            </b-col>
        </b-row>
        <b-row v-else>
            <b-col lg="12" class="d-flex flex-column justify-content-center align-items-center" style="min-height: 100vh">
               <empty-cart></empty-cart>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import CartSummary from '../components/common/CartSummary.vue'
import EmptyCart from '../components/common/EmptyCart.vue'
import Swal from 'sweetalert2'

export default {
    name: 'Cart',
    components: { 
        EmptyCart,
        CartSummary
    },
    methods: {
        addItem(items) {
            this.$store.dispatch("addToCart", items)
        },
        removeItem(items) {
            this.$store.dispatch("removeItem", items)
        },
        success(){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been added',
                showConfirmButton: false,
                timer: 1500
            })
        },
    },
    computed: {
        cartItems() {
            return this.$store.state.cartItems;
        },
        // changed price to id so items without price would be recognized
        totalPrice() {
            let price = 0;
            this.$store.state.cartItems.map(el => {
                price += el["quantity"] * el["id"]
            })
            return price;
        },
        // original for getting/calculating price
        // totalPrice() {
        //     let price = 0;
        //     this.$store.state.cartItems.map(el => {
        //         price += el["quantity"] * el["price"]
        //     })
        //     return price;
        // },
        myLearningPlan() {
            return this.$store.state.data.myLearningPlan;
        }
        // checkoutTotal() {
        //     let total = 0;
        //     this.$store.state.cartItems.map(el => {
        //         total += el["quantity"] * el["price"] * el["shipping"]
        //     })
        //     return total;
        // }
    },
}
</script>