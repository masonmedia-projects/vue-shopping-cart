<template>
    <div class="gear-icon">
        <gear-icon v-b-modal.exit-course></gear-icon>
        <b-modal 
        ref="exit-modal"
        id="exit-course" 
        centered 
        body-class="text-center p-4"
        hide-footer
        title-class="font-weight-bold"
        title="Exit LLT">
            <caution-icon></caution-icon>
            <h5 class="my-3 font-weight-bold text-dark">Are you sure?</h5>
            <p class="mb-3">Exiting the Leadership Learning Tool will remove it from your learning plan and any saved data will be lost. Are you sure you want to proceed?</p>
            <div class="d-inline-block mb-3">
                <b-button class="mt-3 mr-2" variant="secondary" @click="hideModal">Close</b-button>
                <b-button class="mt-3" variant="danger" @click="hideModal">Proceed</b-button>
            </div>
        </b-modal>
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
    methods: {
        hideModal() {
        this.$refs['exit-modal'].hide()
      },
    },
}
</script>