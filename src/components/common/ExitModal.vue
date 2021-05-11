<template>
    <div class="gear-icon">
        <gear-icon v-b-modal.exit-course></gear-icon>
        <div>
            <b-modal 
            v-for="item in $t('exit')" :key="item.id"
            ref="exit-modal"
            id="exit-course" 
            centered 
            body-class="text-center p-4"
            hide-footer
            title-class="font-weight-bold"
            :title="item.heading"
            >
                <caution-icon></caution-icon>
                <h5 class="my-3 font-weight-bold text-dark" v-html="item.title"></h5>
                <p class="mb-3" v-html="item.message"></p>
                <div class="d-inline-block mb-3">
                    <b-button class="mt-3 mr-2" 
                    @click="$bvModal.hide('exit-course')" 
                    variant="secondary"
                    v-html="item.btn1"></b-button>

                    <b-button class="mt-3" 
                    @click="exitCourse"
                    variant="danger"
                    v-html="item.btn2"></b-button>
                    <!-- @click="$bvModal.hide('exit-course')"  -->
                </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
import CautionIcon from '../icons/CautionIcon.vue'
import GearIcon from '../icons/GearIcon.vue'
import { SCORM } from 'pipwerks-scorm-api-wrapper';

export default {
    name: 'ExitModal',
    components: {
        GearIcon,
        CautionIcon,
    },
    data() {
        return {
            // SCORM: scormWrapper
        }
    },
    computed: {
        exit() {
            return this.$store.state.data.exit;
        },
    },
    methods: {
        exitCourse() {
            this.$bvModal.show("exit-course");
            SCORM.init();
            // var name = SCORM.get('cmi.core.student_name');
            SCORM.set('cmi.core.lesson_status', 'completed');
            SCORM.save();
            SCORM.quit();
        }
    },
}
</script>