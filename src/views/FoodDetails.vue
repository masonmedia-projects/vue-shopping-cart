<template>
    <b-container fluid class="relative">
        <!-- 50-50 split layout -->
        <b-row class="text-left min-h-100 relative mt-5"> 

            <b-col lg="6" align-self="stretch" class="min-vh-50 p-0">
                <div class="sticky__details">
                    <b-img-lazy 
                    :src="details.img"
                    :alt="details.imgAlt" 
                    class="page-banner w-100 min-vh-100 absolute z--1 animate__animated animate__fadeIn">
                    </b-img-lazy>
                    <!-- trans-black overlay -->
                    <div class="page-banner w-100 h-100 absolute z--1" style="background: rgba(0,0,0,0.6);"></div>
                    <div class="z-1 text-light text-left px-5 min-h-50">
                        <div :class="fadeUp" class="relative z-1 text-light text-left" style="top: 50px;">
                        <b-avatar icon="bookmarks-fill" size="3.5rem" rounded="lg" :class="details.color" class="shadow"></b-avatar>
                        <h1 :class="fadeUp" class="font-weight-bold mb-4 mt-3" v-html="details.name"></h1>
                        <b-button :class="fadeUp" disabled variant="outline-light" class="text-left" v-html="details.category"></b-button>
                        </div>
                    </div>
                </div>
            </b-col>
            <!-- /content -->
            <b-col lg="6" align-self="stretch"
                class="relative z-1 bg-taieri bg-light p-4 p-md-5">

                    <!-- category alerts -->
                    <div v-for="items in $t('aux')" :key="items.id">

                        <h4 :class="fadeUp" class="bg-glass bg-lightblue p-4 mb-3 text-light font-weight-bold"
                        v-html="items.sectionTitle1"></h4>
                    
                        <b-row class="px-2">
                            <b-col md :class="fadeUp" class="d-flex flex-column mx-2 mb-3 p-4 bg-glass rounded" v-for="item in details.moreDetail" :key="item.id">
                                <b-icon icon="bookmark-check" variant="lightblue" class="mr-2 mb-4" font-scale="2"></b-icon>
                                <p class="h-100 pl-3 border-left border-lightblue-trans" v-html="item"></p>
                                <p class="small text-lightblue pb-2 border-bottom border-lightblue-trans mt-auto mb-0" v-html="details.name"></p>
                            </b-col>
                        </b-row>

                        <h4 :class="fadeUp" class="bg-glass bg-green p-4 mb-3 text-light font-weight-bold"
                        v-html="items.sectionTitle2"></h4>

                        <b-row class="d-flex px-2">
                            <b-col md :class="fadeUp" class="d-flex flex-column mx-2 mb-3 p-4 bg-glass rounded"  v-for="item in details.selectIf" :key="item.id">
                                <b-icon icon="bookmark-plus" variant="green" class="mr-2 mb-4" font-scale="2"></b-icon>
                                <p class="h-100 pl-3 border-left border-green-trans" v-html="item"></p>
                                <p class="small text-green mt-auto mb-0 pb-2 border-bottom border-green-trans" v-html="details.name"></p>
                            </b-col>
                        </b-row>

                        <!-- action button grid rounded -->
                        <b-row class="d-flex justify-content-center align-items-center w-100 bg-trans text-light p-2 mx-auto rounded">
                            <b-col sm :class="fadeUp" class="px-1">
                                <b-button type="button" size="lg" variant="orange" class="d-flex justify-content-center align-items-center my-2 w-100" @click="addToCart(); addToArchive()">
                                    <b-icon icon="plus" font-scale="1.5"></b-icon> {{ items.btn1 }}
                                </b-button>
                            </b-col>
                            <b-col sm :class="fadeUp" class="px-1">
                                <b-button type="button" size="lg" variant="green" 
                                class="d-flex justify-content-center align-items-center my-2 w-100" 
                                v-b-toggle.sidebar-right>
                                    <b-icon icon="cart2" class="mr-2" font-scale="1"></b-icon> {{ items.btn2 }}
                                </b-button>
                            </b-col>
                            <b-col sm :class="fadeUp" class="px-1">
                                <b-button type="button" size="lg" variant="lightblue" class="d-flex justify-content-center align-items-center my-2 w-100" @click="getStarted">
                                    <b-icon icon="search" class="mr-2" font-scale="0.9"></b-icon> {{ items.btn3 }}
                                </b-button>
                            </b-col>
                        </b-row>
                    </div>
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
            fadeUp: "animate__animated animate__fadeInUp animate__slow",
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
        addToArchive() {
            this.$store.dispatch("addToArchive", this.details);
        },
    },
    // add localStorage for product/food details => this is not technically 'state';
    // it's route parameter details, so vuex/state related local storage will not work
    created() {
        if (this.$route.params.id !== undefined)
        localStorage.setItem("details", JSON.stringify(this.details));
    },
    mounted() {
        this.details = JSON.parse(localStorage.getItem("details"));
    },
}
</script>