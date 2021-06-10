<template>
    <div>
        <div v-for="items in $t('aboutPopup')" :key="items.id">
            <!-- modal -->
            <b-modal
            title-class="font-weight-bolder badge badge-lightblue px-3 py-1" 
            id="modal-center" 
            centered 
            size="lg"
            :title="items.modalTitle"
            body-class="px-5 pt-4 pb-5"
            content-class="bg-glass"
            ok-title="Get started"
            ok-variant="orange"> 
                <b-icon icon="bookmark-check-fill" variant="lightblue mb-3" class="" font-scale="3"></b-icon>
                <h3 class="font-weight-bold text-lightblue mb-3 py-3 border-top border-bottom border-lightblue-trans" 
                v-html="items.mainTitle"></h3>
                
                <h5 class="alert alert-lightblue my-4" v-html="items.heading1"></h5>
                <ul>
                    <span v-for="i in items.list1" :key="i.id">
                        <li v-html="i"></li> 
                    </span>
                </ul>
                <h5 class="alert alert-yellow my-4" v-html="items.heading2"></h5>
                <ul>
                    <span v-for="i in items.list2" :key="i.id">
                        <li v-html="i"></li> 
                    </span>
                </ul>
                <h5 class="alert alert-green my-4" v-html="items.heading3"></h5>
                <ul>
                    <span v-for="i in items.list3" :key="i.id">
                        <li v-html="i"></li> 
                    </span>
                </ul>
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
export default {
    name: 'AboutModal',
    methods: {
        getStarted() {
            this.$router.push("/get-started");
        },
    },
    computed: {
      aboutPopup() {
        return this.$store.state.data.aboutPopup;
      },
    }
}
</script>