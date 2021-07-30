<template>
    <div>
        <div v-for="items in $t('myHistory')" :key="items.id">
            <!-- modal -->
            <b-modal
            title-class="font-weight-bolder badge badge-lightblue px-3 py-1" 
            id="history-modal" 
            hide-header
            centered 
            scrollable
            size="lg"
            body-class="p-4 p-md-5"
            content-class="bg-glass bg-taieri"> 
                
            <b-container fluid class="p-0">

                <!-- <b-row v-if="checkMergedArray"
                    class="flex-column justify-content-start align-items-start text-center">
                    <b-col lg="12" class="p-5">
                        <b-icon-person-circle 
                        variant="secondary"
                        font-scale="8"
                        class="shadow rounded-circle bg-yellow"
                        :title="items.emptyPlan">
                            <span class="sr-only" v-html="items.emptyPlan"></span>
                        </b-icon-person-circle>
                        <h4 class="font-weight-bold mt-4"
                        v-html="items.emptyArchive"></h4>
                    </b-col>
                </b-row> -->

                <b-row
                class="min-h-50 flex-column justify-content-end align-items-start text-left bg-taieri">
                    <b-col lg="12" class="p-5">
                        <b-card no-body class="bg-glass border-0 overflow-hidden mb-3"
                       
                        @click="itemDetails(items)"
                        >
                        <!-- @click="itemDetails(items)" -->
                        <b-icon icon="bookmark-check-fill" variant="lightblue mb-3" font-scale="3"></b-icon>
                        <h3 class="font-weight-bold text-lightblue mb-3 py-3 border-top border-bottom border-lightblue-trans" 
                        v-html="items.title"></h3>
                            <b-row no-gutters>
                                <b-col md="3">
                                    <b-card-img 
                                    :src="img" 
                                    class="img-fluid h-100 rounded-0 cover">
                                    </b-card-img>
                                </b-col>
                                <b-col md="9">
                                    <b-card-body 
                                    body-class="d-flex flex-column justify-content-center align-items-start p-4 pb-5 p-md-5 relative">
                                        <b-card-text class="w-100">
                                            <b-avatar icon="bookmarks-fill" size="2.5rem" rounded="lg" 
                                            :class="color" 
                                            class="absolute right top z-1 m-2 shadow"></b-avatar>
                                            <h3 :v-html="name" class="font-weight-bold m-0"></h3>
                                            <p class="my-2 text-muted font-weight-bold border-top border-bottom py-3" :v-html="category"></p>
                                            <p class="mt-3" :v-html="description"></p> 
                                            <b-button variant="lightblue mt-2 stretched-link" :v-html="btn"></b-button>
                                        </b-card-text>
                                    </b-card-body>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>

                <template #modal-footer="{ hide }">
                    <b-button
                        variant="lightblue"
                        class="float-right"
                        @click="hide()">
                        Close
                    </b-button>
                </template>
            </b-modal>
        </div>
    </div>
</template>

<script>
import {lms} from '../mixins/lms'
import {animate} from '../mixins/animate'

export default {
    name: 'HistoryModal',
    mixins: [animate, lms],
    props: [
        'img',
        'color',
        'name',
        'category',
        'btn'
    ],
    data() {
        return {
            // mergedArray: [],
        }
    },
     methods: {
    //   itemDetails(item) {
    //     this.$router.push({name: "ItemDetails", params: item });
    //   },
      refreshAOS() {
        this.$emit("get-data");
    },
    },
    computed: {
      myHistory() {
        return this.$store.state.data.myHistory;
      },
    //   cartArchive() {
    //       return this.$store.state.cartArchive;
    //   },
    },
    mounted() {
    //   this.readSuspendData();
    }
}
</script>