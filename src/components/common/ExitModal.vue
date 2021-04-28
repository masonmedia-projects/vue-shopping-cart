<template>
    <div class="">
        <gear-icon v-b-modal.exit-course></gear-icon>
        <b-modal 
        ref="exit-modal"
        id="exit-course" 
        centered 
        header-class="font-weight-bold"
        body-class="p-4"
        hide-footer
        title="Exit LLT">
          <p class="my-4">Exiting the Leadership Learning Tool will remove it from your learning plan and any saved data will be lost. Are you sure you want to proceed?</p>
          <div class="d-inline float-right">
            <b-button class="mt-3 mr-2" variant="secondary" @click="hideModal">Close</b-button>
            <b-button class="mt-3" variant="danger" @click="hideModal">Proceed</b-button>
          </div>
        </b-modal>
    </div>
</template>

<script>
import GearIcon from '../icons/GearIcon'

export default {
    name: 'ExitModal',
    components: {
        GearIcon,
    },
}
</script>