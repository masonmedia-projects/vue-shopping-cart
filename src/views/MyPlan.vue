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
                    <b-icon-person-circle 
                    variant="yellow"
                    font-scale="3.5"
                    title="My learning plan">
                    <span class="sr-only">My plan</span>
                    </b-icon-person-circle>
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
                        <b-card-img 
                        :src="items.img" 
                        :alt="items.imgAlt" 
                        class="h-100 rounded-0 cover">
                        </b-card-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body 
                        body-class="d-flex flex-column justify-content-center align-items-start p-4 pb-5 p-md-5 relative" >
                            <b-card-text class="w-100">
                                <!-- media object card title -->
                                <b-media class="mb-3 mt-3 mt-md-0 d-flex align-items-center bg-light border" 
                                style="border-radius: 14px 0 0 14px;"
                                vertical-align="center">
                                    <template #aside class="media-aside align-self-center mr-3">
                                        <span class="font-weight-bolder border-0 px-3 py-4 mb-0 bg-dark text-light" style="border-radius: 14px 0 0 14px;">{{ items.id }}.</span>
                                    </template>
                                    <h4 class="checkout-item-title font-weight-bold w-100 mb-0" v-html="items.name"></h4>
                                </b-media>

                                <!-- <h4><span class="text-muted font-weight-light mb-0">{{ items.id }}.</span></h4>
                                <h4 class="font-weight-bold">{{ items.name }}</h4> -->
                                <p class="mb-0 my-2 small text-muted font-weight-bold border-top pt-2" v-html="items.category"></p>
                                <p class="mb-0 pb-3 w-100 border-top pt-2" v-html="items.description"></p>
                                <!-- <div class="">
                                    <b-button @click="removeItem(items)" class="remove">-</b-button>
                                    <span class="cart-quantity px-3">{{ items.quantity }}</span>
                                    <b-button @click="addItem(items)" class="add">+</b-button>
                                </div> -->
                                <b-button variant="outline-dark" class="w-sm-100 mt-2 mr-2" @click="removeItem(items)">Remove</b-button>
                                <a :href="items.download" download target="_blank"> 
                                    <b-button variant="dark" class="w-sm-100 mt-2" >Download</b-button>
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
                    <b-icon-hash 
                        variant=""
                        font-scale="1.5"
                        title="Next steps"
                        aria-hidden="true">
                    </b-icon-hash>
                    {{ item.subtitle }}
                </b-alert>
                <hr class="w-100 mb-4" />
                <!-- media object card title -->
                <b-media 
                class="d-flex align-items-center alert alert-lightblue shadow border-0 py-3 px-0 mb-3 mt-3 mt-md-0"
                style="border-radius: 14px 0 0 14px;"
                vertical-align="center" v-for="i in item.nextSteps" :key="i.id">
                    <template #aside class="align-self-center">
                        <div class="px-3 py-5 p-md-4" style="border-radius: 14px 0 0 14px;">
                            <b-icon icon="box-arrow-right" 
                            class="text-lightblue" 
                            font-scale="2"
                            title="Next step details"
                            aria-hidden="true"></b-icon>
                        </div>
                    </template>
                    <p class="mb-0 p-4 bg-light shadow" style="border-radius: 14px 0 0 14px;" v-html="i"></p>
                </b-media>


                <!-- <b-alert show variant="light" class="alert d-flex justify-content-start align-items-center text-base py-3 shadow" 
                v-for="i in item.nextSteps" :key="i.id">
                    <b-icon icon="box-arrow-right" variant="lightblue" 
                    class="mr-3" 
                    font-scale="2"
                    title="Next step details"
                    aria-hidden="true"></b-icon>
                    <p class="mb-0" v-html="i"></p>
                </b-alert> -->
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
                <b-icon-person-circle 
                variant="secondary"
                font-scale="9"
                class="shadow rounded-circle bg-yellow"
                title="There are no items in my plan">
                    <span class="sr-only">There are no items in my plan</span>
                </b-icon-person-circle>
                <h3 class="my-4 px-3 text-center" v-html="items.emptyPlan"></h3>
            </b-col>
        </b-row>
        </b-container>
    </b-container>
</template>

<script>
import Swal from 'sweetalert2'
import { BIconPersonCircle, BIconHash } from 'bootstrap-vue'

export default {
    name: 'Cart',
    components: { 
        BIconPersonCircle,
        // BIconBoxArrowRight,
        BIconHash,
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
    created() {
        if (this.$route.params.id !== undefined)
        localStorage.setItem("cartItems", JSON.stringify(this.$route.params));
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