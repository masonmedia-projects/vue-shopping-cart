<template>
    <b-container fluid class="relative">
        <b-row class="d-flex text-left" 
        style="min-height: 100vh; background-color: #f0aea2; background-image: url('./patternpad_3.svg'); background-size: cover;"> 
        <!-- yellow #f2cc39; -->
            <b-img :src="details.url" class="w-75 h-100" style="object-fit: cover; position: absolute; z-index: 0; left: 0; top: 0;"></b-img>
            <!-- <div class="" style="object-fit: cover; width: 1000px; height: 1000px; position: absolute; z-index: 0; top: -100px; right: -150px; border-radius: 100%; background: #f2cc39;"></div> -->
            <b-col lg="7" offset-lg="5" 
            class="d-flex flex-column justify-content-end align-items-start relative p-5">
                <div class="shadow-lg p-5 w-100 mt-5 mt-md-0"
                style="position: relative; background-image: url('./patternpad.svg'); background-size: 300%; background-color: aliceblue; border-radius: 14px;">
                    <!-- menu -->
                    <b-dropdown right no-caret
                    class="border-0 "
                    menu-class="text-right"
                    variant="light"
                    style="position: absolute; right: 5%; top: 5%; background: aliceblue;">
                        <template #button-content>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                            </svg>
                        </template>
                        <router-link class="dropdown-item font-weight-bold" to="/home">
                            <home-icon class="float-left"></home-icon>
                            Home
                        </router-link>
                        <b-dropdown-divider></b-dropdown-divider>
                        <router-link class="dropdown-item font-weight-bold" to="/cart">
                            <cart-icon class="float-left"></cart-icon>
                            My Plan
                        </router-link>
                    </b-dropdown>
                    <!-- /menu -->
                    <hr class="d-flex m-0 mr-auto bg-warning" style="height: 4px; width: 50px;">
                    <h1 class="display-4 font-weight-bold my-4">{{ details.name }}</h1>
                    <ul class="list-unstyled">
                        <li><span class="font-weight-bold">Competency:</span> {{ details.name }}</li>
                        <li><span class="font-weight-bold">Category:</span> {{ details.category }}</li>
                        <li><span class="font-weight-bold">Description:</span> {{ details.description }}</li>
                    </ul>
                    <!-- modal -->
                    <b-button v-b-modal.modal-center variant="dark">Learn more</b-button>
                    <b-modal 
                    id="modal-center" 
                    class="d-flex"
                    body-class="bg-dots p-4"
                    size="lg" 
                    centered 
                    :title="details.name"
                    ok-only
                    ok-variant="secondary"
                    ok-title="Close">
                        <h3 class="mb-3 mt-2">More details:</h3>
                        <hr class="mx-0 mr-auto mb-4" style="width: 50px; height: 4px; background: #f0aea2;"/>
                       <!-- more details -->
                        <b-card-group columns> 
                            <b-card
                            class="shadow" 
                            v-for="item in details.moreDetail" :key="item.id">
                                <b-card-title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#f0aea2" class="bi bi-exclude" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1V4z"/>
                                    </svg>
                                </b-card-title>
                                <b-card-text v-html="item">
                                </b-card-text>
                                <b-card-text class="small text-muted" v-html="details.name"></b-card-text>
                            </b-card>
                        </b-card-group>   
                        <!-- select this item if... -->
                        <h3 class="mb-3 mt-4">Select if:</h3>
                        <hr class="mx-0 mr-auto mb-4" style="width: 50px; height: 4px; background: #b5dae5"/>
                        <b-card-group columns> 
                            <b-card 
                            class="shadow"
                            v-for="item in details.selectIf" :key="item.id">
                                <b-card-title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#b5dae5" class="bi bi-rainbow" viewBox="0 0 16 16">
                                        <path d="M8 4.5a7 7 0 0 0-7 7 .5.5 0 0 1-1 0 8 8 0 1 1 16 0 .5.5 0 0 1-1 0 7 7 0 0 0-7-7zm0 2a5 5 0 0 0-5 5 .5.5 0 0 1-1 0 6 6 0 1 1 12 0 .5.5 0 0 1-1 0 5 5 0 0 0-5-5zm0 2a3 3 0 0 0-3 3 .5.5 0 0 1-1 0 4 4 0 1 1 8 0 .5.5 0 0 1-1 0 3 3 0 0 0-3-3zm0 2a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 4 0 .5.5 0 0 1-1 0 1 1 0 0 0-1-1z"/>
                                    </svg>
                                </b-card-title>
                                <b-card-text v-html="item">
                                </b-card-text>
                                <b-card-text class="small text-muted" v-html="details.name"></b-card-text>
                            </b-card>
                        </b-card-group>   
                    </b-modal>
                    <hr class="d-flex mx-0 mr-auto bg-warning" style="height: 4px; width: 50px; margin: 30px 0">
                    <div class="d-flex">
                        <b-button variant="coral" class="mr-2" @click="addToCart">Add to plan</b-button>
                        <b-button variant="lightpink" class="mr-2" @click="removeItem">Remove</b-button>
                        <b-button variant="bluegrey" class="" @click="goToCart">Go to My Plan</b-button>
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

export default {
    name: 'FoodDetails',
    components: {
        HomeIcon,
        CartIcon,
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
                timer: 2000
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