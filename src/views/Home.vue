<template>
  <b-container fluid contClass="bg-gradient-lightblue mb-4">
    <!-- v.1 banner -->
    <!-- <b-row 
    class="d-flex flex-column justify-content-end align-items-start text-left relative min-h-100 bg-orange" 
    v-for="items in $t('homepage')" :key="items.id">
        <b-img :src="items.bannerImg" 
        class="min-h-100 w-75 absolute top right z-0" style="object-fit: cover;"></b-img>
        /color strip
        <div class="absolute bottom w-100 z-0 bg-yellow-trans" style="height: 200px"></div>
        <b-col lg="8"
        style="position: relative; z-index: 3;"
        class="d-flex flex-column justify-content-center align-items-start p-5 mt-md-0 mt-lg-5">
                <div class="bg-glass p-5" style="border-radius: 14px">
                <h5 class="mb-3 font-weight-bold text-muted" v-html="items.bannerMicroTitle"></h5>
                <h1 class="page-title font-weight-bold mb-4"
                style="line-height: 90%; letter-spacing: -3px"
                v-html="items.bannerTitle"></h1>
                <hr class="d-flex m-0 mr-auto my-3 bg-yellow" style="height: 4px; width: 50px;">
                <h4 class="mb-2" v-html="items.bannerSubtitle"></h4>
            </div>
        </b-col>
    </b-row> -->

<!-- v.2 banner -->
    <div v-for="items in $t('homepage')" :key="items.id">
        <b-row class="d-flex flex-column justify-content-center align-items-start text-left relative min-h-100 bg-orange" >
            <b-img-lazy 
            :src="items.img.banner" 
            :alt="items.imgAlt.banner"
            class="min-vh-100 w-75 absolute top right z-0 cover animate__animated animate__fadeIn"></b-img-lazy>
            <!-- color strip -->
            <div class="absolute bottom w-100 z-0 bg-yellow-trans" style="height: 200px"></div>
            <b-col md="12" lg="10" xl="7"
            class="d-flex flex-column justify-content-center align-items-start relative z-1 p-4 pt-5 p-md-5 mt-5">
                <div class="p-5 bg-glass" style="border-radius: 14px; background: linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('./img/Taieri.svg'); background-size: 500%;">
                <!-- <div class="text-light p-5 bg-purple-trans" style="border-radius: 14px; text-shadow: 2px 2px 5px #000;"> -->
                    <h5 class="my-3 font-weight-bold" v-html="items.bannerMicroTitle"></h5>
                    <h1 class="site-title font-weight-bold mb-4"
                    v-html="items.bannerTitle"></h1>
                    <hr class="d-flex m-0 mr-auto my-3 bg-yellow" style="height: 4px; width: 50px;">
                    <h4 class="mb-2" v-html="items.bannerSubtitle"></h4>
                    <b-icon icon="chevron-double-down" class="mt-3" variant="dark" font-scale="2"></b-icon>
                </div>
            </b-col>
        </b-row>

        <!-- row 1 -->
        <b-row 
        class="d-flex justify-content-end align-items-start text-left relative min-h-75 mx-2 my-4 bg-glass border-0"
        style="border-radius: 14px;" >
            <b-col lg="6" class="d-flex align-self-stretch p-0">
                <b-img-lazy 
                :src="items.img.img1" 
                :alt="items.imgAlt.img1"
                v-bind="imgProps"
                class="h-100 w-100 cover" 
                style="border-radius: 14px 0 0 14px;"></b-img-lazy>
            </b-col>
            <b-col lg="6" class="d-flex flex-column justify-content-center align-items-start p-5">
                <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle1"></h5>
                <h1 class="display-4 font-weight-bold"
                style="line-height: 90%; letter-spacing: -3px"
                v-html="items.title1"></h1>
                <hr class="d-flex m-0 mr-auto my-3 bg-orange" style="height: 4px; width: 50px;">
                <p class="mb-2" v-html="items.text1"></p>
                 <b-icon icon="chevron-double-down" class="mt-3" variant="dark" font-scale="2"></b-icon>
            </b-col>
        </b-row>

        <!-- row 2 -->
        <b-row 
        class="d-flex justify-content-end align-items-start text-left relative min-h-75 mx-2 my-4 bg-glass border-0"
        style="border-radius: 14px;">
            <b-col lg="6" class="d-flex flex-column justify-content-center align-items-start p-5">
                <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle2"></h5>
                <h1 class="display-4 font-weight-bold"
                style="line-height: 90%; letter-spacing: -3px"
                v-html="items.title2"></h1>
                <hr class="d-flex m-0 mr-auto my-3 bg-danger" style="height: 4px; width: 50px;">
                <p class="mb-2" v-html="items.text2"></p>
                <b-icon icon="chevron-double-down" class="mt-3" variant="dark" font-scale="2"></b-icon>
            </b-col>
            <b-col lg="6" class="d-flex align-self-stretch p-0">
                <b-img-lazy 
                :src="items.img.img2" 
                :alt="items.imgAlt.img2" 
                v-bind="imgProps"
                class="h-100 w-100 cover" 
                style="border-radius: 0 14px 14px 0;"></b-img-lazy>
            </b-col>
        </b-row>

        <!-- row 3 -->
        <b-row 
        class="d-flex justify-content-end align-items-start text-left relative min-h-75 mx-2 my-4 bg-glass border-0"
        style="border-radius: 14px;">
            <b-col lg="6" class="d-flex align-self-stretch p-0">
                <b-img-lazy
                :src="items.img.img3" 
                :alt="items.imgAlt.img3" 
                v-bind="imgProps"
                class="h-100 w-100 cover" 
                style="border-radius: 14px 0 0 14px;"></b-img-lazy>
            </b-col>
            <b-col lg="6" class="d-flex flex-column justify-content-center align-items-start p-5">
                <h5 class="mb-3 font-weight-bold text-muted" v-html="items.microTitle3"></h5>
                <h1 class="display-4 font-weight-bold"
                style="line-height: 90%; letter-spacing: -3px"
                v-html="items.title3"></h1>
                <hr class="d-flex m-0 mr-auto my-3 bg-lightblue" style="height: 4px; width: 50px;">
                <p class="mb-2" v-html="items.text3"></p>
                <div class="d-inline my-4">
                    <b-button 
                    variant="orange" 
                    size="lg"
                    class="mr-2 w-sm-100 mb-2 mb-sm-0" 
                    v-html="items.btn1"
                    @click="getStarted"></b-button>
                    <b-button 
                    variant="lightblue" 
                    size="lg"
                    class="mr-2 w-sm-100" 
                    v-html="items.btn2"
                    @click="aboutPage"></b-button>
                </div>
            </b-col>
        </b-row>
    </div>
</b-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
          imgProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: "100%",
          height: "100%"        
        }
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
    },
}
</script>

<style>
  .active {
    filter: drop-shadow(2px 2px 10px black);
  }
  .highlight {
  filter: drop-shadow(2px 2px 5px black);
  border-bottom: 1px solid grey;
}
</style>