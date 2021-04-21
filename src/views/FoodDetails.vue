<template>
    <b-container fluid class="p-0">
        <b-row class="d-flex text-left" 
        style="min-height: 100vh; background-color: #f0aea2"> 
        <!-- yellow #f2cc39; -->
            <b-img :src="details.url" class="w-75 h-100" style="object-fit: cover; position: absolute; z-index: 0; left: 0; top: 0;"></b-img>
            <!-- <div class="" style="object-fit: cover; width: 1000px; height: 1000px; position: absolute; z-index: 0; top: -100px; right: -150px; border-radius: 100%; background: #f2cc39;"></div> -->
            <b-col lg="7" offset-lg="5" 
            class="d-flex flex-column justify-content-end align-items-start p-5">
                <div class="rounded shadow p-5 w-100 mt-5 mt-md-0"
                style="position: relative; background-image: url('./patternpad.svg'); background-size: 300%; background-color: aliceblue">
                    <!-- menu -->
                    <b-dropdown right no-caret
                    class="border-0 "
                    menu-class="text-right"
                    variant="light"
                    style="position: absolute; right: 5%; top: 5%; background: transparent">
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
                    size="lg" 
                    centered 
                    :title="details.name"
                    ok-only
                    ok-variant="secondary"
                    ok-title="Close">
                        <h3 class="mb-3">More details:</h3>
                        <hr class="mx-0 mr-auto mb-4 bg-warning" style="width: 50px; height: 4px;"/>
                        <b-alert variant="info" show
                        class="d-flex justify-content-start align-items-center"
                        v-for="item in details.moreDetail" :key="item.id">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all mr-2" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                            <p class="mb-0" v-html="item"></p>
                        </b-alert>
                        <h3 class="mb-3 mt-4">Select if:</h3>
                        <hr class="mx-0 mr-auto mb-4 bg-warning" style="width: 50px; height: 4px;"/>
                        <b-alert variant="success" show
                        class="d-flex justify-content-start align-items-center"
                        v-for="item in details.selectIf" :key="item.id">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all mr-2" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                            <p class="mb-0" v-html="item"></p>
                        </b-alert>
                    </b-modal>
                    <hr class="d-flex mx-0 mr-auto bg-warning" style="height: 4px; width: 50px; margin: 30px 0">
                    <div class="d-flex">
                        <b-button variant="outline-dark" class="rounded-0 shadow mr-2" @click="addToCart">Add to plan</b-button>
                        <b-button variant="outline-dark" class="rounded-0 shadow mr-2" @click="removeItem">Remove</b-button>
                        <b-button variant="outline-dark" class="rounded-0 shadow" @click="goToCart">Go to My Plan</b-button>
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
         
        // if (localStorage.name) {
        // this.name = localStorage.name;
        // }
    },
//     watch: {
//     name(newName) {
//       localStorage.name = newName;
//     }
//   },
}
</script>