<template>
    <b-container fluid class="p-0">
        <b-row 
        class="d-flex flex-column justify-content-end align-items-start text-left" 
        style="min-height: 100vh; background-color: #f0aea2; position: relative;"
        v-for="items in $t('welcome')" :key="items.id">
        <!-- <div class="" style="position: absolute; left: 0; top: 2%; height: 800px; width: 800px; z-index: 1; border-radius: 0 50% 50% 0;"></div> -->
        <!-- <div class="h-100 w-100" style="position: absolute; left: 0; top: 0; z-index: 1;">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <g mask="url(&quot;#SvgjsMask1001&quot;)" fill="none">
                    <path d="M153.24 643.75C331 642.15 480.53 463.95 839.94 459.12 1199.35 454.29 1344.75 221.78 1526.64 218.32" stroke="rgba(222, 184, 135, 1)" stroke-width="2"></path>
                    <path d="M696.11 632.76C805.05 613.72 775.96 344.4 1030.98 343.72 1286 343.04 1530.95 455.33 1700.71 455.72" stroke="rgba(222, 184, 135, 1)" stroke-width="2"></path>
                    <path d="M55.56 666.59C261.78 647.12 395.73 214.88 749.28 213.58 1102.84 212.28 1263.89 391.34 1443.01 392.78" stroke="rgba(222, 184, 135, 1)" stroke-width="2"></path>
                    <path d="M325.48 618.77C494.8 601.17 574.78 250.59 888.42 235.66 1202.07 220.73 1304.11 64.02 1451.37 62.06" stroke="rgba(222, 184, 135, 1)" stroke-width="2"></path>
                    <path d="M601.36 662.3C734.69 645.54 781.86 362.17 1033.38 342.49 1284.91 322.81 1346.32 145.77 1465.41 140.89" stroke="rgba(222, 184, 135, 1)" stroke-width="2"></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1001">
                        <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                </defs>
            </svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
                <g mask="url(&quot;#SvgjsMask1023&quot;)" fill="none">
                    <path d="M-106.74 486.77 a173.44 173.44 0 1 0 346.88 0 a173.44 173.44 0 1 0 -346.88 0z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float3"></path>
                    <path d="M7.1779136538681 353.801252669797L109.25978118216408 350.2364753045542 105.69500381692126 248.15460777625822 3.6131362886252796 251.71938514150105z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float2"></path>
                    <path d="M1.49 492.75 a181.37 181.37 0 1 0 362.74 0 a181.37 181.37 0 1 0 -362.74 0z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float1"></path>
                    <path d="M299.3607179353245 399.5015835376575L370.24205867878936 456.90016152317 420.89925528532575 321.87886141521653z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float2"></path>
                    <path d="M436.14 3.16 a139.57 139.57 0 1 0 279.14 0 a139.57 139.57 0 1 0 -279.14 0z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float3"></path>
                    <path d="M164.39278018562686 366.0345445353139L102.07738995944652 283.33922862840615 19.38207405253877 345.6546188545865 81.69746427871911 428.34993476149424z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float1"></path>
                    <path d="M1363.289,207.553C1404.102,208.518,1435.81,174.364,1453.692,137.665C1469.385,105.46,1464.895,68.157,1446.063,37.681C1428.25,8.855,1397.145,-7.206,1363.289,-8.63C1326.401,-10.182,1286.167,-1.688,1267.506,30.17C1248.702,62.273,1262.326,100.819,1280.003,133.556C1298.915,168.579,1323.497,206.612,1363.289,207.553" fill="rgba(0, 139, 139, 0.28)" class="triangle-float2"></path>
                    <path d="M432.25690044765287 221.65837578148663L501.3658121375736 277.6216690194682 557.3291053755552 208.5127573295475 488.22019368563446 152.54946409156594z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float1"></path>
                    <path d="M491.03,117.759C520.405,117.175,551.741,109.713,566.042,84.047C580.075,58.863,570.427,28.107,554.298,4.211C540.19,-16.69,516.207,-25.658,491.03,-27.084C462.319,-28.71,430.544,-27.255,413.997,-3.736C395.304,22.833,393.277,59.697,410.672,87.133C427.123,113.08,460.313,118.369,491.03,117.759" fill="rgba(0, 139, 139, 0.28)" class="triangle-float2"></path>
                    <path d="M909.69 348.58 a106.52 106.52 0 1 0 213.04 0 a106.52 106.52 0 1 0 -213.04 0z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float3"></path>
                    <path d="M995.387,105.991C1024.689,104.258,1051.522,90.03,1066.449,64.756C1081.644,39.028,1082.313,7.969,1069.11,-18.836C1054.037,-49.439,1029.501,-79.635,995.387,-79.52C961.395,-79.406,939.305,-47.9,922.515,-18.344C906.002,10.725,891.204,45.275,908.109,74.118C924.894,102.758,962.249,107.95,995.387,105.991" fill="rgba(0, 139, 139, 0.28)" class="triangle-float3"></path>
                    <path d="M882.814,230.197C920.546,232.769,960.05,218.803,979.053,186.104C998.129,153.277,989.082,113.027,969.969,80.222C951.01,47.681,920.472,21.394,882.814,20.923C844.437,20.443,808.819,43.594,791.8,77.994C776.346,109.232,789.013,144.458,806.9,174.37C824.178,203.264,849.226,227.908,882.814,230.197" fill="rgba(0, 139, 139, 0.28)" class="triangle-float3"></path>
                    <path d="M506.99 354.3 a164.86 164.86 0 1 0 329.72 0 a164.86 164.86 0 1 0 -329.72 0z" fill="rgba(0, 139, 139, 0.28)" class="triangle-float2"></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1023">
                        <rect width="1440" height="560" fill="#ffffff"></rect>
                    </mask>
                </defs>
            </svg>
        </div> -->
            <b-img :src="items.img1" 
            class="w-75 h-100" 
            style="object-fit: cover; position: absolute; z-index: 0; right: 0; top: 0;"></b-img>
            <b-col xl="8" lg="9"
            style="position: relative; z-index: 3"
            class="d-flex flex-column justify-content-center align-items-start p-5 mt-5 mt-md-0">
                <div class="shadow p-5" style="background: rgba( 255, 255, 255, 0.9 );
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
@keyframes float1 {
                0%{transform: translate(0, 0)}
                50%{transform: translate(-10px, 0)}
                100%{transform: translate(0, 0)}
            }

            .triangle-float1 {
                animation: float1 5s infinite;
            }

            @keyframes float2 {
                0%{transform: translate(0, 0)}
                50%{transform: translate(-5px, -5px)}
                100%{transform: translate(0, 0)}
            }

            .triangle-float2 {
                animation: float2 4s infinite;
            }

            @keyframes float3 {
                0%{transform: translate(0, 0)}
                50%{transform: translate(0, -10px)}
                100%{transform: translate(0, 0)}
            }

            .triangle-float3 {
                animation: float3 6s infinite;
            }
</style>