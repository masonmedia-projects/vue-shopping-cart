<template>
    <b-container fluid class="min-h-100 bg-taieri mt-5">
        <b-container>
        <b-row 
        class="d-flex justify-content-center align-items-start text-left p-0"
        v-if="totalPrice > 0">
        <b-col lg="12"
        v-for="items in $t('myLearningPlan')" :key="items.id"
        class="d-flex flex-column justify-content-center align-items-start text-left pt-5 pb-3">
            <b-card 
            body-class="p-0"
            class="mb-2 border-0 shadow bg-lightblue text-light p-5" style="border-radius: 14px;">
                <b-card-text>
                    <user-icon class="text-yellow" style="width: 60px; height: 60px;"></user-icon>
                    <h1 class="page-title font-weight-bold mb-4 mt-3" 
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
                        body-class="d-flex flex-column justify-content-center align-items-start p-5" >
                            <b-card-text class="w-100">
                                <h4 class="font-weight-bold" v-html="items.name"></h4>
                                <p class="mb-0 my-2 small text-muted border-top pt-2" v-html="items.category"></p>
                                <p class="mb-0 pb-3 w-100 border-top pt-2" v-html="items.description"></p>
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

            <b-alert variant="lightblue" class="alert d-flex justify-content-start align-items-center w-100 h4 py-3 mb-3 text-base text-uppercase" show>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentcolor" class="bi bi-hash" viewBox="0 0 16 16">
                    <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                </svg>
                {{ $t(item.subtitle) }}
            </b-alert>

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
                <user-icon style="height: 150px; width: 150px;">
                    <title>{{ items.emptyPlan }}</title>
                </user-icon>
                <h3 class="my-4 px-3 text-center" v-html="items.emptyPlan"></h3>
            </b-col>
        </b-row>
        </b-container>
    </b-container>
</template>

<script>
import ArrowIcon from '../components/icons/ArrowIcon.vue'
import Swal from 'sweetalert2'
import UserIcon from '../components/icons/UserIcon.vue'

export default {
    name: 'Cart',
    components: { 
        ArrowIcon,
        UserIcon,
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