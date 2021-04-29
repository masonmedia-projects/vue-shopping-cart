<template>
    <b-container fluid class="relative">
        <b-row class="d-flex text-left bg-lightblue min-h-100"> 
        <!-- style="min-height: 100vh; background-color: #f0aea2; background-image: url('./patternpad_3.svg'); background-size: cover;">  -->
        <!-- yellow #f2cc39; -->
            <b-img :src="details.url" class="w-75 h-100" style="object-fit: cover; position: absolute; z-index: 0; left: 0; top: 0;"></b-img>
            <!-- <div class="" style="object-fit: cover; width: 1000px; height: 1000px; position: absolute; z-index: 0; top: -100px; right: -150px; border-radius: 100%; background: #f2cc39;"></div> -->
            <b-col lg="7" offset-lg="5" 
            class="d-flex flex-column justify-content-end align-items-start relative p-5">
                <div class="shadow-lg p-5 w-100 mt-5 mt-md-0" style="position: relative; background-color: aliceblue; border-radius: 14px;">
                    <!-- menu -->
                    <b-dropdown right no-caret
                    class="border-0 "
                    menu-class="text-right"
                    variant="trans"
                    style="position: absolute; right: 5%; top: 5%; background: aliceblue;">
                        <template #button-content>
                            <detail-menu-icon></detail-menu-icon>
                        </template>
                        <router-link class="dropdown-item font-weight-bold text-base" to="/home">
                            <home-icon class="float-left"></home-icon>
                            Home
                        </router-link>
                        <b-dropdown-divider></b-dropdown-divider>
                        <router-link class="dropdown-item font-weight-bold text-base" to="/cart">
                            <cart-icon class="float-left"></cart-icon>
                            My Plan
                        </router-link>
                    </b-dropdown>
                    <!-- /menu -->
                    <hr class="d-flex m-0 mr-auto bg-orange" style="height: 4px; width: 50px;">
                    <h1 class="font-weight-bold my-4">{{ details.name }}</h1>
                    <ul class="list-unstyled">
                        <li class="pb-1"><span class="font-weight-bold">Competency:</span> {{ details.name }}</li>
                        <li class="pb-1"><span class="font-weight-bold">Category:</span> {{ details.category }}</li>
                        <li><span class="font-weight-bold">Description:</span> {{ details.description }}</li>
                    </ul>
                    <!-- modal -->
                    <b-button v-b-modal.details-modal variant="orange">Learn more</b-button>
                    <b-modal 
                    id="details-modal" 
                    class="d-flex"
                    body-class="bg-dots p-4"
                    size="lg" 
                    centered 
                    :title="details.name"
                    ok-only
                    ok-variant="secondary"
                    ok-title="Close">
                        <h3 class="mb-3 mt-2">More details:</h3>
                        <hr class="mx-0 mr-auto mb-4 bg-lightblue" style="width: 50px; height: 4px;"/>
                       <!-- more details -->
                        <b-card-group columns> 
                            <b-card
                            class="shadow" 
                            v-for="item in details.moreDetail" :key="item.id">
                                <b-card-title>
                                    <info-icon class="text-lightblue"></info-icon>
                                </b-card-title>
                                <b-card-text v-html="item">
                                </b-card-text>
                                <b-card-text class="small text-muted" v-html="details.name"></b-card-text>
                            </b-card>
                        </b-card-group>   
                        <!-- select this item if... -->
                        <h3 class="mb-3 mt-4">Select if:</h3>
                        <hr class="mx-0 mr-auto mb-4 bg-green" style="width: 50px; height: 4px;" />
                        <b-card-group columns> 
                            <b-card 
                            class="shadow"
                            v-for="item in details.selectIf" :key="item.id">
                                <b-card-title>
                                    <!-- <pin-icon class="text-orange"></pin-icon> -->
                                    <check-icon class="text-green"></check-icon>
                                </b-card-title>
                                <b-card-text v-html="item">
                                </b-card-text>
                                <b-card-text class="small text-muted" v-html="details.name"></b-card-text>
                            </b-card>
                        </b-card-group>   
                    </b-modal>
                    <hr class="d-flex mx-0 mr-auto bg-orange" style="height: 4px; width: 50px; margin: 30px 0">
                    <div class="d-inline">
                        <b-button variant="lightblue" class="mr-2 mt-2" @click="addToCart">Add to plan</b-button>
                        <!-- <b-button variant="orange" class="mr-2" @click="removeItem">Remove</b-button> -->
                        <b-button variant="royal" class="mt-2" @click="goToCart">Checkout</b-button>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Swal from 'sweetalert2'
import HomeIcon from '../components/icons/HomeIcon.vue'
import CartIcon from '../components/icons/CartIcon.vue'
import DetailMenuIcon from '../components/icons/DetailMenuIcon.vue'
import InfoIcon from '../components/icons/InfoIcon.vue'
import CheckIcon from '../components/icons/CheckIcon.vue'
// import PinIcon from '../components/icons/PinIcon.vue'

export default {
    name: 'FoodDetails',
    components: {
        HomeIcon,
        CartIcon,
        DetailMenuIcon,
        InfoIcon,
        CheckIcon
        // PinIcon,
    },
    data() {
        return {
            details: this.$route.params,
        }
    },
    methods: {
        goToCart() {
            this.$router.push("/cart");
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