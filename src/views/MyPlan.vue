<template>
    <b-container fluid class="min-h-100 bg-cart">
        <b-container>
        <b-row 
        class="d-flex justify-content-center align-items-start text-left p-5"
        v-if="totalPrice > 0">
        <b-col lg="12"
        v-for="items in $t('myLearningPlan')" :key="items.id"
        class="d-flex flex-column justify-content-center align-items-start text-left pt-5 pb-3">
            <!-- <h1 class="display-4 font-weight-bold my-4" 
            style="line-height: 90%;"
            v-html="item.title"></h1>
            <hr class="d-flex mx-0 mr-auto mt-0 bg-orange" 
            style="height: 4px; width: 50px;">
            <p class="mb-0" v-html="item.description"></p> -->

            <b-card class="mb-2 border-0 shadow bg-lightblue text-light p-5" style="border-radius: 14px;">
                <b-card-text>
                    <user-icon class="text-yellow" style="width: 60px; height: 60px;"></user-icon>
                    <h1 class="display-4 font-weight-bold mb-4 mt-3" 
                    style="line-height: 90%;"
                    v-html="items.title"></h1>
                    <hr class="d-flex mx-0 mr-auto mt-0 bg-yellow" 
                    style="height: 4px; width: 50px;">
                    <p class="mb-0" v-html="items.description"></p>                
                </b-card-text>
            </b-card>
        </b-col>
        <hr class="w-100" />
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
                                <b-button variant="outline-dark" class="mt-2 mr-2" @click="removeItem(items)">Remove</b-button>
                                <a :href="items.download" download target="_blank"> 
                                    <b-button variant="green" class="mt-2" >Download</b-button>
                                </a>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <hr class="w-100 mb-4" />
            <!-- next steps -->
            <b-col lg="12" v-for="item in $t('myLearningPlan')" :key="item.id">
                <h3 class="mb-4 mt-0" v-html="item.subtitle"></h3>
                <hr class="w-100 mb-4" />
                <b-alert show variant="light" class="alert d-flex justify-content-start align-items-center text-base py-3 shadow" 
                v-for="i in item.nextSteps" :key="i.id">
                    <arrow-icon class="text-lightblue mr-3"></arrow-icon>
                    <p class="mb-0" v-html="i"></p>
                </b-alert>
            </b-col>
            <hr class="w-100" />

            <!-- <b-col lg="12" class="d-flex flex-column justify-content-start align-items-start p-0">
                <cart-summary :totalPrice="totalPrice"></cart-summary>
            </b-col> -->

        </b-row>
        <!-- if learning plan has no items -->
        <b-row v-else>
            <b-col lg="12" 
            class="d-flex flex-column justify-content-center align-items-center min-h-100"
            v-for="items in $t('myLearningPlan')" :key="items.index">
               <empty-cart :emptyPlan="items.emptyPlan"></empty-cart>
            </b-col>
        </b-row>
        </b-container>
    </b-container>
</template>

<script>
// import CartSummary from '../components/common/CartSummary.vue'
import EmptyCart from '../components/common/EmptyCart.vue'
import ArrowIcon from '../components/icons/ArrowIcon.vue'
import Swal from 'sweetalert2'
import UserIcon from '../components/icons/UserIcon.vue'

export default {
    name: 'Cart',
    components: { 
        EmptyCart,
        ArrowIcon,
        UserIcon,
        // CartSummary
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
    // local storage
    // created() {
    //     if (this.$route.params.id !== undefined)
    //     localStorage.setItem("cartItems", JSON.stringify(this.$route.params));
    // },
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