<template>
    <b-container fluid class="mt-5 bg-taieri">
        <div v-for="items in $t('myLearningPlan')" :key="items.id">
            <!-- banner -->
            <b-row 
            align-v="center"
            class="text-left mt-5 min-vh-100" 
            >
            <!-- v-if="totalPrice > 0"  -->
                <b-col lg="6" 
                align-self="stretch" class="min-vh-50 p-5 bg-royal">
                    <div class="sticky z-1 text-light text-left px-4 px-md-5">
                        <b-icon
                        icon="arrow-up-right-square-fill" 
                        class="text-yellow" 
                        font-scale="3"
                        title="Next step details"
                        aria-hidden="true"></b-icon>
                        <h1 class="page-title font-weight-bold mb-4 mt-3" 
                        style="line-height: 90%;"
                        v-html="items.title"></h1>
                        <hr class="d-flex mx-0 mr-auto mt-3 mb-4 bg-yellow" 
                        style="height: 4px; width: 50px;">
                        <h3 class="bg-glass bg-lightblue-trans my-3 p-4 font-weight-bold" v-html="items.subtitle"></h3>
                        <p 
                        class="bg-glass bg-lightblue-trans my-3 p-4"
                        v-html="items.description"></p>
                    </div>
                </b-col>

                <!-- cart item instructions -->
                
                <template v-if="totalPrice > 0">
                <b-col lg="6" align-self="stretch"
                class="relative z-1 bg-taieri bg-light p-4 p-md-5">
                    <div class="p-4 bg-glass mb-3">
                        <ol class="mb-0">
                            <span v-for="item in items.nextSteps" :key="item.id">
                                <li v-html="item"></li>
                            </span>
                        </ol>
                    </div>

                    <!-- cart items -->

                    <b-card no-body class="bg-glass border-0 overflow-hidden mb-3"
                    v-for="items in cartItems" :key="items.id">
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
                                       <!-- download -->
                                        <a :href="items.download" download target="_blank"
                                        @click="addToArchive"> 
                                            <b-button variant="dark" class="flex-fill w-sm-100 mt-2 mr-2 border-0">
                                                <span v-for="items in $t('myLearningPlan')" :key="items.id">
                                                    <p class="m-0" style="font-size: 16px" 
                                                    v-html="items.btnDownload"></p>
                                                </span>
                                            </b-button>
                                        </a>
                                        <b-button variant="outline-dark" class="flex-fill w-sm-100 mt-2" @click="removeItem(items)">
                                            <span v-for="items in $t('myLearningPlan')" :key="items.id">
                                                <p class="m-0" style="font-size: 16px" v-html="items.btnRemove"></p>
                                            </span>
                                        </b-button>
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </template>

            <template v-else>
                <b-col lg="6" 
                align-self="center"
                class="p-5 text-center"
                v-for="items in $t('myLearningPlan')" :key="items.index">
                    <b-button variant="yellow" class="shadow mb-2 mt-5 mt-lg-0">
                        <b-icon 
                        icon="cart-plus" 
                        variant="royal"
                        font-scale="6"
                        class="p-3"
                        :title="items.emptyPlan"
                        @click="getStarted"
                        :aria-label="items.emptyPlan"></b-icon>
                    </b-button>
                    <h4 class="my-4 px-3 text-center" v-html="items.emptyPlan"></h4>
                </b-col>
            </template>
        </b-row>    

        <!-- if learning plan has no items -->
        <!-- <b-row v-else>
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
        </b-row> -->
        </div>
    </b-container>
</template>

<script>
import Swal from 'sweetalert2'
import { lms } from '../mixins/lms'
import { animate } from '../mixins/animate'

export default {
    name: 'MyPlan',
    mixins: [lms, animate],
    data() {
        return {
            cartCheckout: this.$store.state.cartItems,
            details: this.$route.params,
        }
    },
    methods: {
        addItem(items) {
            this.$store.dispatch("addToCart", items)
        },
        addToArchive() {
            this.$store.dispatch("addToArchive", this.details);
            this.updateSuspendData();
        },
        removeItem(items) {
            this.$store.dispatch("removeItem", items)
        },
        getStarted() {
          this.$router.push("/get-started");
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
         // save item route param details to LMS
        updateSuspendData() { 
            let newArray = [];
            // loop over full params object
            this.cartItems.forEach(element => {
                var newElement = {
                    id: element.id
                }
                newArray.push(newElement);
            })

            let stringVAR = JSON.stringify(newArray)
            // let stringVAR = JSON.stringify(this.cartItems)
            this.lmsSet({
                key: "cmi.suspend_data",
                value: stringVAR
            });
            console.log(this.value, 'item details saving!')    

            // loop over cartItems
            // reduce the object to only ids element.id
            // push the new ids to a new array
            // this array would take the place of JSON.stringify...  
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
     // add localStorage for cart item details
    // vuex/state needs to be used for state changes (see store.js), standard local storage below doesn't work
    // created() {
    //     if (this.cartItems !== undefined)
    //     localStorage.setItem("cart", JSON.stringify(this.$store.state.cartItems));
    // },
    // mounted() {
    //     this.cart = JSON.parse(localStorage.getItem("cart"));
    // },
}
</script>

<style>
.downloaded {
  opacity: 0.6 !important;
}
</style>
