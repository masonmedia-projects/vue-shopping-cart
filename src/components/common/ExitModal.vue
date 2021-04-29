<template>
    <!-- <div class="gear-icon">
        <gear-icon v-b-modal.exit-course></gear-icon>
        <b-modal 
        v-for="items in $t('exit')" :key="items.id"
        ref="exit-modal"
        id="exit-course" 
        centered 
        body-class="text-center p-4"
        hide-footer
        title-class="font-weight-bold"
        :title="items.heading">
            <caution-icon></caution-icon>
            <h5 class="my-3 font-weight-bold text-dark" v-html="items.title"></h5>
            <p class="mb-3" v-html="items.message"></p>
            <div class="d-inline-block mb-3">
                <b-button class="mt-3 mr-2" variant="secondary" @click="hideModal" v-html="items.btn1"></b-button>
                <b-button class="mt-3" variant="danger" v-html="items.btn2"></b-button>
            </div>
        </b-modal>
    </div> -->

    <div class="gear-icon">
        <gear-icon v-b-modal.exit-course></gear-icon>
        <div v-for="item in $t('exit')" :key="item.index">
            <b-modal 
            ref="exit-modal"
            id="exit-course" 
            centered 
            body-class="text-center p-4"
            hide-footer
            title-class="font-weight-bold"
            :title="item.heading">
                <caution-icon></caution-icon>
                <h5 class="my-3 font-weight-bold text-dark"></h5>
                <p class="mb-3"></p>
                <div class="d-inline-block mb-3">
                    <b-button class="mt-3 mr-2" @click="hideModal" variant="secondary">No</b-button>
                    <b-button class="mt-3" variant="danger">Yes</b-button>
                </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
import CautionIcon from '../icons/CautionIcon.vue'
import GearIcon from '../icons/GearIcon'

export default {
    name: 'ExitModal',
    components: {
        GearIcon,
        CautionIcon,
    },
    computed: {
        exit() {
            return this.$store.state.data.exit;
        },
    },
    methods: {
        hideModal() {
            this.$refs['exit-modal'].hide()
            // document.getElementById('exit-course').style.display = "none";
            // alert("what the fuck");
        },
    },
}
</script>