<template>
    <b-container fluid class="min-h-100 mt-5 bg-taieri">
        <b-container>
        <b-row 
        align-v="center"
        align-h="center"
        class="p-0"
        v-if="totalPrice > 0">
        <b-col lg="12"
        v-for="items in $t('myLearningPlan')" :key="items.id"
        class="flex-column justify-content-center align-items-start text-left pt-5 pb-3">
            <b-card 
            body-class="p-0"
            class="mb-2 border-0 shadow bg-glass p-5" style="border-radius: 14px;">
                <b-card-text>
                    <b-icon-person-circle 
                    variant="lightblue"
                    font-scale="3.5"
                    :title="items.title">
                    <span class="sr-only" v-html="items.title"></span>
                    </b-icon-person-circle>
                    <h1 class="page-title font-weight-bold mb-4 mt-3" 
                    style="line-height: 90%;"
                    v-html="items.title"></h1>
                    <hr class="d-flex mx-0 mr-auto mt-0 bg-lightblue" 
                    style="height: 4px; width: 50px;">
                    <p class="mb-0" v-html="items.description"></p>                
                </b-card-text>
            </b-card>
        </b-col>
        <hr class="w-100" />
        <b-col lg="12" class="flex-column justify-content-start align-items-start py-3">
            <b-card no-body class="bg-glass border-0 overflow-hidden mb-3"
            v-for="items in cartItems" :key="items.id">
                <b-row no-gutters>
                <b-col md="3">
                    <b-card-img 
                    :src="items.img" 
                    :alt="items.imgAlt" 
                    class="h-100 rounded-0 cover">
                    </b-card-img>
                </b-col>
                <b-col md="9">
                    <b-card-body 
                    body-class="d-flex flex-column justify-content-center align-items-start p-4 pb-5 p-md-5 relative" >
                        <b-card-text class="w-100">
                            <b-avatar icon="bookmarks-fill" size="2.5rem" rounded="lg" :class="items.color" class="absolute right top z-1 m-2 shadow"></b-avatar>
                            <h2 v-html="items.name" class="font-weight-bold m-0"></h2>
                            <p class="my-2 text-muted font-weight-bold border-top border-bottom py-3" v-html="items.category"></p>
                            <b-button variant="outline-dark" class="w-sm-100 mt-2 mr-2" @click="removeItem(items)">Remove</b-button>
                            <a :href="items.download" download target="_blank"> 
                                <b-button variant="dark" class="w-sm-100 mt-2 border-0">Download</b-button>
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
                class="d-flex align-items-center alert alert-lightblue text-base shadow border-0 py-3 px-0 mb-3 mt-3 mt-md-0"
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
                :title="items.emptyPlan">
                    <span class="sr-only" v-html="items.emptyPlan"></span>
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
        BIconHash,
    },
    data() {
        return {
            details: this.$route.params,
        }
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
        myLearningPlan() {
            return this.$store.state.data.myLearningPlan;
        }
        // original for getting/calculating price
        // totalPrice() {
        //     let price = 0;
        //     this.$store.state.cartItems.map(el => {
        //         price += el["quantity"] * el["price"]
        //     })
        //     return price;
        // },
        // checkoutTotal() {
        //     let total = 0;
        //     this.$store.state.cartItems.map(el => {
        //         total += el["quantity"] * el["price"] * el["shipping"]
        //     })
        //     return total;
        // }
    },
     // add localStorage for product/food details
    created() {
        if (this.$route.params.id !== undefined)
        localStorage.setItem("details", JSON.stringify(this.$route.params));
    },
    mounted() {
        this.details = JSON.parse(localStorage.getItem("details"));
    },
}
</script>