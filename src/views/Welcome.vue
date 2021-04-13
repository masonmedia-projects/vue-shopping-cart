<template>
    <b-container fluid class="p-0">
        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left" 
        style="min-height: 100vh; background-color: #178ea6; position: relative;"
        v-for="items in $t('welcome')" :key="items.id">
        <!-- <div class="bg-warning" style="position: absolute; left: 0; top: 2%; height: 800px; width: 800px; z-index: 1; border-radius: 0 50% 50% 0;"></div> -->
            <b-img :src="items.img1" 
            class="w-75 h-100" 
            style="object-fit: cover; position: absolute; z-index: 0; right: 0; top: 0;"></b-img>
            <b-col xl="8" lg="9"
            style="position: relative; z-index: 3"
            class="d-flex flex-column justify-content-center align-items-start p-5 mt-5 mt-md-0">
                <div class="shadow p-5" style="background: rgba( 255, 255, 255, 0.8 );
                    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                    backdrop-filter: blur( 4px );
                    -webkit-backdrop-filter: blur( 4px );
                    border: 1px solid rgba( 255, 255, 255, 0.18 );">
                    <hr class="d-flex m-0 mr-auto bg-warning" style="height: 4px; width: 50px;">
                    <h5 class="py-3 mt-3 mb-0 font-weight-bold text-muted" v-html="items.microTitle"></h5>
                    <h1 class="display-2 font-weight-bold mb-4"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.mainTitle"></h1>
                    <div>
                        <transition name="fade" appear>
                            <div>
                            <ul class="list-unstyled">
                                <li class="mb-2">{{ items.text2 }}</li>
                                <li class="mb-2">{{ items.text3 }}</li>
                            </ul>
                            <hr class="d-flex mx-0 mr-auto bg-warning" style="height: 4px; width: 50px; margin: 30px 0">
                            <div class="d-flex mb-4">
                                <router-link to="/home">
                                    <b-button 
                                    variant="dark" 
                                    size="lg"
                                    class="rounded-0 shadow mr-2" v-html="items.btn1"></b-button>
                                </router-link>
                                <router-link to="/about">
                                    <b-button 
                                    variant="outline-dark" 
                                    size="lg"
                                    class="rounded-0 shadow mr-2" v-html="items.btn2"></b-button>
                                </router-link>
                            </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </b-col>
        </b-row>

        <!-- row-2-->
        <!-- <b-row 
        class="d-flex flex-column justify-content-end align-items-end text-left" 
        style="position: relative; min-height: 100vh; background-color: #178ea6;"
        v-for="items in welcome" :key="items.id">
            <b-img :src="items.img2" 
            class="w-75 h-100" 
            style="object-fit: cover; position: absolute; z-index: 0; left: 0; top: 0;"></b-img>
            <b-col lg="7" offset-lg="5"
            class="d-flex flex-column justify-content-center align-items-start p-5 mt-5 mt-md-0">
                <div class="shadow p-5" style="background: rgba( 255, 255, 255, 0.9 );
                    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                    backdrop-filter: blur( 4px );
                    -webkit-backdrop-filter: blur( 4px );
                    border: 1px solid rgba( 255, 255, 255, 0.18 );">
                    <hr class="d-flex m-0 mr-auto bg-warning" style="height: 4px; width: 50px;">
                    <h1 class="display-2 font-weight-bold my-4"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.title2"></h1>
                    <div v-if="!show">
                        <ul class="list-unstyled">
                            <li class="mb-2" v-html="items.text1"></li>
                            <li>
                                <b-button v-on:click="show = !show" 
                                variant="primary" 
                                size="lg"
                                class="rounded-0 shadow mt-3">Next</b-button>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <transition name="fade" appear>
                            <div>
                            <ul class="list-unstyled">
                                <li class="mb-2">{{ items.text2}}</li>
                                <li class="mb-2">{{ items.text3 }}</li>
                            </ul>
                            <hr class="d-flex mx-0 mr-auto bg-warning" style="height: 4px; width: 50px; margin: 30px 0">
                            <div class="d-flex mb-4">
                                <router-link to="/home">
                                    <b-button 
                                    variant="success" 
                                    size="lg"
                                    class="rounded-0 shadow mr-2">Get started</b-button>
                                </router-link>
                                <router-link to="/about">
                                    <b-button 
                                    variant="primary" 
                                    size="lg"
                                    class="rounded-0 shadow mr-2">Learn more</b-button>
                                </router-link>
                            </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </b-col>
        </b-row> -->
    </b-container>
</template>

<script>
export default {
    name: 'Welcome',
    data() {
        return {
            // isHidden: false
            show: false,
        }
    },
    computed: {
        welcome() {
            return this.$store.state.data.page1;
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