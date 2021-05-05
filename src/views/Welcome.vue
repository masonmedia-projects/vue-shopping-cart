<template>
    <b-container fluid>
        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left relative" 
        style="min-height: 100vh;"
        v-for="items in $t('quickStart')" :key="items.id">
            <!-- bg-img -->
            <b-img :src="items.bannerImg" 
            class="w-100 h-100" 
            style="object-fit: cover; position: absolute; z-index: 0; left: 0; top: 0;"></b-img>
            <!-- col content -->
            <b-col xl="8" lg="9"
            style="position: relative; z-index: 3;"
            class="d-flex flex-column justify-content-center align-items-start p-5 mt-5 mt-md-0">
            <!-- nested white bg col -->
                <div class="bg-glass p-5">
                    <hr class="d-flex m-0 mr-auto bg-orange" style="height: 4px; width: 50px;">
                    <h5 class="py-3 mt-3 mb-0 font-weight-bold text-muted" v-html="items.microTitle"></h5>
                    <h1 class="page-title font-weight-bold mb-4"
                    v-html="items.mainTitle"></h1>
                    <div>
                        <transition name="fade" appear>
                            <div>
                                <ul class="list-unstyled">
                                    <li class="mb-3" v-html="items.text1"></li>
                                    <li class="mb-3" v-html="items.text2"></li>
                                </ul>
                                <div class="d-flex my-4">
                                    <b-button 
                                    variant="orange" 
                                    size="lg"
                                    class="mr-2" 
                                    v-html="items.btn1"
                                    @click="getStarted"></b-button>
                                    <b-button 
                                    variant="lightblue" 
                                    size="lg"
                                    class="mr-2" 
                                    v-html="items.btn2"
                                    @click="aboutPage"
                                    ></b-button>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Welcome',
    data() {
        return {
            show: false,
        }
    },
    methods: {
        getStarted() {
            this.$router.push("/get-started");
        },
        aboutPage() {
            this.$router.push("/about");
        },
    },
    computed: {
        welcome() {
            return this.$store.state.data.quickStart;
        },
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>