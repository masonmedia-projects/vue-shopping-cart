<template>
    <b-container fluid class="relative">
        <!-- <b-row class="d-flex text-left bg-lightblue min-h-100"> 
            <b-img :src="details.url" class="w-75 h-100" style="object-fit: cover; position: absolute; z-index: 0; left: 0; top: 0;"></b-img>
            <b-col lg="8" offset-lg="4"
            class="d-flex flex-column justify-content-end align-items-start relative p-5">
                <div class="shadow-lg p-5 w-100 mt-5 mt-md-0" style="position: relative; background-color: aliceblue; border-radius: 14px;">
                    /menu
                    <b-dropdown right no-caret
                    class="border-0 "
                    menu-class="text-right"
                    variant="trans"
                    style="position: absolute; right: 5%; top: 5%; background: aliceblue;">
                        <template #button-content>
                            <detail-menu-icon></detail-menu-icon>
                        </template>
                        <router-link class="dropdown-item font-weight-bold text-base" to="/get-started">
                            <home-icon class="float-left"></home-icon>
                            Home
                        </router-link>
                        <b-dropdown-divider></b-dropdown-divider>
                        <router-link class="dropdown-item font-weight-bold text-base" to="/my-plan">
                            <cart-icon class="float-left"></cart-icon>
                            My Plan
                        </router-link>
                    </b-dropdown>
                    <hr class="d-flex m-0 mr-auto bg-lightblue" style="height: 4px; width: 50px;">
                    <h1 class="font-weight-bold my-4">{{ details.name }}</h1>
                    <ul class="list-unstyled">
                        <li class="pb-1"><span class="font-weight-bold">Competency:</span> {{ details.name }}</li>
                        <li class="pb-1"><span class="font-weight-bold">Category:</span> {{ details.category }}</li>
                        <li><span class="font-weight-bold">Description:</span> {{ details.description }}</li>
                    </ul>
                    /tabs
                    <b-card no-body>
                        <b-tabs card pills active-nav-item-class="">
                        <b-tab title="Details" active>
                            <span v-for="item in details.moreDetail" :key="item.index">    
                                <b-card-text class="" v-html="item">✓</b-card-text>
                            </span>
                        </b-tab>
                        <b-tab title="Select if...">
                            <span v-for="item in details.selectIf" :key="item.id">    
                                <b-card-text v-html="item"></b-card-text>
                            </span>
                        </b-tab>
                        </b-tabs>
                    </b-card>
                    /modal
                    <hr class="d-flex mx-0 mr-auto bg-lightblue" style="height: 4px; width: 50px; margin: 30px 0">
                    <div class="d-inline">
                        <b-button variant="orange" class="mr-2 mt-2" @click="addToCart">Add to plan</b-button>
                        <b-button variant="royal" class="mt-2" @click="goToCart">Checkout</b-button>
                    </div>
                </div>
            </b-col>
        </b-row> -->


        <!-- 50-50 split layout -->
        <b-row class="d-flex text-left min-h-100 relative mt-5"> 
            <b-col lg="6" class="fixed top min-h-50 p-0">
                <b-img 
                :src="details.img"
                :alt="details.imgAlt" 
                class="page-banner w-100 absolute z--1"></b-img>
                <!-- trans-black overlay -->
                <div class="page-banner w-100 absolute z--1" style="background: rgba(0,0,0,0.4);"></div>
                <div class="relative z-1 text-light text-left p-5" style="top: 50px;">
                    <h1 class="font-weight-bold mb-4 mt-4" v-html="details.name"></h1>
                    <b-button disabled variant="outline-light" class="text-left" v-html="details.category"></b-button>
                </div>
            </b-col>

            <!-- /content -->
            <b-col lg="6" offset-lg="6"
            class="d-flex flex-column justify-content-end align-items-start relative z-1 p-4 p-md-5 bg-light bg-taieri">
                    <div class="bg-glass p-4 w-100 mb-3" style="border-radius: 14px;">

                        <!-- /traditional title + hr header style -->
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentcolor" class="bi bi-stack text-lightblue" viewBox="0 0 16 16">
                            <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                            <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                        </svg>
                        <h1 class="font-weight-bold mt-3 mb-4 w-100" v-html="details.name"></h1>
                        <hr class="d-flex m-0 mr-auto my-3 bg-lightblue" style="height: 4px; width: 50px;"> -->
                   
                        <!-- /media object header style -->
                        <b-media class="my-3 bg-lightblue-trans text-lightblue d-flex align-items-center" vertical-align="center">
                            <template #aside class="media-aside align-self-center mr-3">
                                <span class="details-title font-weight-bold text-lightblue border-0 px-3 py-4 px-md-4 py-md-5 mb-0 bg-lightblue text-light shadow" 
                                style="border-radius: 14px 0 0 14px;">{{ details.id }}.</span>
                            </template>
                            <h1 class="details-title font-weight-bold w-100 mb-0" v-html="details.name"></h1>
                        </b-media>
                   </div>

                    <!-- category alerts -->
                    <div v-for="items in $t('aux')" :key="items.id">
                        <div class="bg-glass p-4 mb-3 w-100" style="border-radius: 14px;">
                            <ul class="list-unstyled mt-3 w-100">
                                <b-alert variant="warning" class="alert alert-yellow" show>
                                    <span class="font-weight-bold">{{ items.categoryTitle }}:</span> {{ details.category }}
                                </b-alert>
                                <b-alert variant="info" class="alert alert-lightblue" show>
                                    <span class="font-weight-bold">{{ items.nameTitle }}:</span> {{ details.name }}
                                </b-alert>
                                <b-alert variant="success" class="alert alert-success" show>
                                    <span class="font-weight-bold">{{ items.descriptionTitle }}:</span> {{ details.description }}
                                </b-alert>
                            </ul>   
                        </div>

                        <b-alert 
                        variant="lightblue" 
                        class="alert d-flex justify-content-start align-items-center w-100 h6 font-weight-normal text-uppercase" 
                        show
                        v-html="items.sectionTitle1">
                        </b-alert>

                        <b-row class="px-2">
                            <b-col md class="d-flex flex-column mx-2 mb-3 p-4 bg-glass rounded" v-for="item in details.moreDetail" :key="item.index">
                                <b-icon icon="info-square" variant="lightblue mb-3" class="mr-2" font-scale="2"></b-icon>
                                <p class="h-100 pl-3 border-left border-lightblue-trans" v-html="item"></p>
                                <p class="small text-lightblue pb-2 border-bottom border-lightblue-trans mt-auto mb-0" v-html="details.name"></p>
                            </b-col>
                        </b-row>
                        
                        <b-alert 
                        variant="green" 
                        class="alert d-flex justify-content-start align-items-center w-100 h6 mb-3 font-weight-normal text-uppercase" 
                        show
                        v-html="items.sectionTitle2">
                        </b-alert>

                        <b-row class="d-flex px-2">
                            <b-col md class="d-flex flex-column mx-2 mb-3 p-4 bg-glass rounded"  v-for="item in details.selectIf" :key="item.id">
                                <b-icon icon="check2-square" variant="green mb-3" class="mr-2" font-scale="2"></b-icon>
                                <p class="h-100 pl-3 border-left border-green-trans" v-html="item"></p>
                                <p class="small text-green mt-auto mb-0 pb-2 border-bottom border-green-trans" v-html="details.name"></p>
                            </b-col>
                        </b-row>
                        <!-- next steps -->
                        <b-alert 
                        variant="yellow" 
                        class="alert d-flex justify-content-start align-items-center w-100 h6 mb-1 font-weight-normal text-uppercase" 
                        show
                        v-html="items.sectionTitle3">
                        </b-alert>

                        <!-- action button grid rounded -->
                        <b-row class="d-flex justify-content-center align-items-center w-100 bg-trans text-light p-2 mx-auto rounded">
                            <b-col sm class="px-1">
                                <b-button type="button" size="lg" variant="orange" class="d-flex justify-content-center align-items-center my-2 w-100" @click="addToCart">
                                    <b-icon icon="plus" font-scale="1.5"></b-icon> {{ items.btn1 }}
                                </b-button>
                            </b-col>
                            <b-col sm class="px-1">
                                <b-button type="button" size="lg" variant="green" 
                                class="d-flex justify-content-center align-items-center my-2 w-100" 
                                v-b-toggle.sidebar-right>
                                    <b-icon icon="cart2" class="mr-2" font-scale="1"></b-icon> {{ items.btn2 }}
                                </b-button>
                            </b-col>
                            <b-col sm class="px-1">
                                <b-button type="button" size="lg" variant="lightblue" class="d-flex justify-content-center align-items-center my-2 w-100" @click="getStarted">
                                    <b-icon icon="search" class="mr-2" font-scale="0.9"></b-icon> {{ items.btn3 }}
                                </b-button>
                            </b-col>
                        </b-row>

                    </div>

                    <!-- OG square buttons -->
                    <!-- <div class="d-inline bg-glass p-4 mb-3 w-100 rounded">
                        <b-button variant="orange" class="w-100 mr-2 mb-2 border-0 rounded" @click="addToCart">Add to plan</b-button>
                        <b-button variant="green" class="w-100 mr-2 mb-2 border-0 rounded" @click="goToCart">Checkout</b-button>
                        <router-link class="font-weight-bold text-base" to="/get-started">
                            <b-button variant="lightblue" class="w-100 mb-2 border-0 rounded">Home</b-button>
                        </router-link>
                    </div> -->

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'FoodDetails',
    data() {
        return {
            details: this.$route.params,
        }
    },
    computed: {
      aux() {
        return this.$store.state.data.aux;
      },
    },
    methods: {
        getStarted() {
            this.$router.push("/get-started");
        },
        goToCart() {
            this.$router.push("/my-plan");
        },
        addToCart() {
            // this.$store.commit("addToCart")
            this.$store.dispatch("addToCart", this.details);
            // added https://sweetalert2.github.io/ for success alert
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Success!',
                text: `${this.details.name} has been added to you cart!`,
                showCancelButton: true,
                cancelButtonText: 'Close',
                cancelButtonAriaLabel: 'Close window',
                  showConfirmButton: false,
                timer: 2000,
                cancelButtonColor: '',
                // remove default styles, add custom classes
                buttonsStyling: false,
                customClass: {
                cancelButton: 'btn-lg btn-lightblue border-0 mb-4',
                }
            });
        },
        removeItem() {
            this.$store.dispatch("removeItem", this.details);
        },
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