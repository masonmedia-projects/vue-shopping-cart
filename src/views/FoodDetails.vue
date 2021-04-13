<template>
    <b-container fluid class="p-0">
        <b-row class="d-flex text-left" 
        style="min-height: 100vh; background-color: #f2cc39;">
            <b-img :src="details.url" class="w-75 h-100" style="object-fit: cover; position: absolute; z-index: 0; left: 0; top: 0;"></b-img>
            <!-- <div class="" style="object-fit: cover; width: 1000px; height: 1000px; position: absolute; z-index: 0; top: -100px; right: -150px; border-radius: 100%; background: #f2cc39;"></div> -->
            <b-col lg="8" offset-lg="4" class="d-flex flex-column justify-content-end align-items-start p-5">
                <div class="bg-light rounded shadow p-5 w-100 mt-5 mt-md-0">
                    <!-- menu -->
                    <b-dropdown right no-caret
                    class="border-0"
                    menu-class="text-right"
                    variant="light"
                    style="position: absolute; right: 10%; background: transparent">
                        <template #button-content>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
                                <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
                            </svg>
                        </template>
                        <router-link class="dropdown-item" to="/home">
                            Home
                        </router-link>
                        <router-link class="dropdown-item" to="/cart">
                            My Plan
                        </router-link>
                    </b-dropdown>
                    <!-- /menu -->
                    <hr class="d-flex m-0 mr-auto bg-warning" style="height: 4px; width: 50px;">
                    <h1 class="display-4 font-weight-bold my-4">{{ details.name }}</h1>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <span class="font-weight-bold">Name:</span> {{ details.name }} | 
                            <span class="font-weight-bold">Category:</span> {{ details.category }} |
                            <span class="font-weight-bold">Description:</span> {{ details.description }}</li>
                    </ul>
                    <b-tabs content-class="mt-3">
                        <b-tab title="More details" active>
                            <ul class="list-unstyled pl-3 border-left border-warning">
                                <li v-for="item in details.moreDetail" :key="item.id">
                                {{ item }}
                            </li>
                            </ul>
                        </b-tab>
                        <b-tab title="Select if">
                            <ul class="list-unstyled pl-3 border-left border-warning">
                                <li v-for="item in details.selectIf" :key="item.id">
                                {{ item }}</li>
                            </ul>
                        </b-tab>
                    </b-tabs>

                    <!-- <ul class="list-unstyled">
                        <li class="justify-content-center align-items-start p-3 border-bottom small" 
                        v-for="item in details.moreDetail" :key="item.id">
                            {{ item }}
                        </li>
                    </ul> -->
                    <!-- <ul class="list-unstyled">
                        <li>Select if:</li>
                        <li v-for="item in details.selectIf" :key="item.id">
                            {{ item }}
                        </li>
                    </ul> -->
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
export default {
    name: 'FoodDetails',
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
        },
        removeItem() {
            this.$store.dispatch("removeItem", this.details)
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