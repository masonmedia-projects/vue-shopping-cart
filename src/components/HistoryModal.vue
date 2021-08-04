<template>
    <div>
        
            <div @click="showModal" 
            class="nav-link mr-1">
                  <b-icon 
                  icon="person-circle" 
                  variant="secondary"
                  font-scale="1.8"
                  class="d-flex align-self-center"></b-icon>
            </div>

      
        <div v-for="items in $t('myHistory')" :key="items.id">
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

                <b-row
                class="min-h-50 flex-column justify-content-end align-items-start text-left">
                    <b-col lg="12" class="p-5">
                        <b-card no-body class="bg-glass border-0 overflow-hidden mb-3"
                  v-for="item in mergedArray" :key="item.id"
                        @click="itemDetails(items)">
                        <h3 class="font-weight-bold text-lightblue mb-3 py-3 border-top border-bottom border-lightblue-trans" 
                        v-html="item.title"></h3>
                            <b-row no-gutters>
                                <b-col md="3">
                                    <b-card-img 
                                    :src="item.img" 
                                    class="img-fluid h-100 rounded-0 cover">
                                    </b-card-img>
                                </b-col>
                                <b-col md="9">
                                    <b-card-body 
                                    body-class="d-flex flex-column justify-content-center align-items-start p-4 pb-5 p-md-5 relative">
                                        <b-card-text class="w-100">
                                            <b-avatar icon="bookmarks-fill" size="2.5rem" rounded="lg" 
                                            :class="item.color" 
                                            class="absolute right top z-1 m-2 shadow"></b-avatar>
                                            <h5 v-html="item.name" class="font-weight-bold m-0"></h5>
                                            <p class="my-2 text-muted font-weight-bold border-top border-bottom py-3" v-html="item.category"></p>
                                            <p class="mt-3" v-html="item.description"></p> 
                                            <b-button variant="lightblue mt-2 stretched-link" v-html="item.btn"></b-button>
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
        itemDetails(item) {
            this.$router.push({name: "ItemDetails", params: item });
        },
        // retrieve item route param details to LMS
      readSuspendData() {
        let array = this.lmsGet("cmi.suspend_data");
        console.log(array, 'History modal retrieving data')
        let rehydrate = JSON.parse( array );
        // create final merged array of suspended data marker + original data
        rehydrate.forEach(elementA => {
            this.cartArchive.forEach(elementB => {
                if (elementA.id == elementB.id) {
                    this.mergedArray.push(elementB);
                }
            });
        });
        console.log(this.array, 'History modal activating')
      },
    },
    computed: {
      myHistory() {
        return this.$store.state.data.myHistory;
      },
      cartArchive() {
          return this.$store.state.cartArchive;
      },
    },
    mounted() {
    //   this.readSuspendData();
    }
}
</script>