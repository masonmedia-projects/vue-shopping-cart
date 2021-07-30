<template>
    <b-container fluid contClass="bg-gradient-lightblue mb-4">
        <div v-for="items in $t('homepage')" :key="items.id">
            <!-- banner -->
            <b-row align-v="center" class="relative min-vh-100 bg-orange">
                <b-img-lazy 
                :src="items.img.banner" 
                :alt="items.imgAlt.banner"
                class="blur fade-in min-vh-100 w-75 absolute top right z-0 cover"></b-img-lazy>
                <!-- color strip -->
                <div class="text absolute bottom w-100 z-0 bg-yellow-trans" style="height: 200px"></div>
                <b-col md="12" lg="10" align-self="end" class="p-5 mt-4">
                    <div class="text p-5 bg-glass bg-taieri" style="border-radius: 14px;">
                        <h5 class="text my-3 font-weight-bold" v-html="items.bannerMicroTitle"></h5>
                        <h1 class="text site-title font-weight-bold mb-4"
                        v-html="items.bannerTitle"></h1>
                        <div class="text d-flex m-0 mr-auto my-3 bg-yellow" style="height: 4px; width: 50px;"></div>
                        <h4 class="text mb-2" v-html="items.bannerSubtitle"></h4>
                        <b-icon icon="chevron-double-down" class="text mt-3" variant="dark" font-scale="2"></b-icon>
                    </div>
                </b-col>
            </b-row>

            <!-- row 1 -->

            <b-row align-v="stretch" class="min-h-75 mx-2 my-4 bg-glass border-0">
                <b-col lg="5" align-self="stretch" class="p-0">
                    <b-img-lazy 
                    :src="items.img.img1" 
                    :alt="items.imgAlt.img1"
                    v-bind="imgProps"
                    class="up h-100 w-100 cover" 
                    style="border-radius: 14px 0 0 14px;"></b-img-lazy>
                </b-col>
                <b-col lg="7" align-self="center" class="p-5">
                    <h5 class="up mb-3 font-weight-bold text-muted" v-html="items.microTitle1"></h5>
                    <h1 class="up display-4 font-weight-bold"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.title1"></h1>
                    <hr class="up d-flex m-0 mr-auto my-4 bg-orange" style="height: 4px; width: 50px;">
                    <p class="up mb-2" v-html="items.text1"></p>
                    <b-icon icon="chevron-double-down" class="up mt-3" variant="dark" font-scale="2"></b-icon>
                </b-col>
            </b-row>

            <!-- row 2 -->

            <b-row align-v="stretch" class="min-h-75 mx-2 my-4 bg-glass border-0">
                <b-col lg="7" align-self="center" class="p-5">
                    <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle2"></h5>
                    <h1 class="display-4 font-weight-bold"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.title2"></h1>
                    <hr class="d-flex m-0 mr-auto my-4 bg-danger" style="height: 4px; width: 50px;">
                    <p class="mb-2" v-html="items.text2"></p>
                    <b-icon icon="chevron-double-down" class="mt-3" variant="dark" font-scale="2"></b-icon>
                </b-col>
                <b-col lg="5" align-self="stretch" class="p-0">
                    <b-img-lazy 
                    :src="items.img.img2" 
                    :alt="items.imgAlt.img2" 
                    v-bind="imgProps"
                    class="h-100 w-100 cover" 
                    style="border-radius: 0 14px 14px 0;"></b-img-lazy>
                </b-col>
            </b-row>

            <!-- row 3 -->

            <b-row align-v="stretch" class="min-h-75 mx-2 my-4 bg-glass border-0">
                <b-col lg="5" align-self="stretch" class="p-0">
                    <b-img-lazy
                    :src="items.img.img3" 
                    :alt="items.imgAlt.img3" 
                    v-bind="imgProps"
                    class="h-100 w-100 cover" 
                    style="border-radius: 14px 0 0 14px;"></b-img-lazy>
                </b-col>
                <b-col lg="7" align-self="center" class="p-5">
                    <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle3"></h5>
                    <h1 class="display-4 font-weight-bold"
                    style="line-height: 90%; letter-spacing: -3px"
                    v-html="items.title3"></h1>
                    <hr class="d-flex m-0 mr-auto my-4 bg-lightblue" style="height: 4px; width: 50px;">
                    <p class="mb-2" v-html="items.text3"></p>
                    <div class="d-flex flex-wrap my-3">
                        <b-button 
                        v-b-modal.modal-center
                        variant="lightblue" 
                        size="lg"
                        class="mr-2 mt-2 w-sm-100 mb-2 mb-sm-0" v-html="items.btn1">
                        </b-button>
                        <b-button 
                        variant="orange" 
                        size="lg"
                        class="mr-2 mt-2 w-sm-100 mb-2 mb-sm-0" 
                        v-html="items.btn2"
                        @click="getStarted"></b-button>
                    </div>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script>
// import AboutModal from '../components/AboutModal';
// import { animate } from "../mixins/animate";
import { lms } from "../mixins/lms";

export default {
  name: 'Home',
  mixins: [lms],
  components: {
    //   AboutModal
  },
  data() {
      return {
          imgProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',        
        },
        fadeUp: "animate__animated animate__fadeInUp animate__slow",
      }
  },
    methods: {
      itemDetails(item) {
            this.$router.push({name: "ItemDetails", params: item });
      },
      getStarted() {
            this.$router.push("/get-started");
        },
      aboutPage() {
          this.$router.push("/about");
        },
    },
    computed: {
      homepage() {
        return this.$store.state.data.homepage;
      },
      isDisabled: function() {
          return !this.active;
        }
    },
    mounted() {
        // this.banner();
        // this.batch();
    }
}


</script>

<style>
    .btn.disabled,
    .btn-secondary.disabled,
    .btn.disabled, .btn:disabled,
    .disabled {
      opacity: 0.5 !important;
      cursor: pointer;
      /* pointer-events: none;    */
    }

  .active {
    filter: drop-shadow(2px 2px 10px black);
  }
  .highlight {
  filter: drop-shadow(2px 2px 5px black);
  border-bottom: 1px solid grey;
}
</style>