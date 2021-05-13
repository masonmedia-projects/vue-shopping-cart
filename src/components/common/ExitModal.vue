<template>
    <div class="d-flex align-items-center justify-content-start justify-content-lg-center pt-3 pt-lg-0">
        <!-- removed class="gear-icon" -->
        <b-button type="button" size="sm" variant="outline-base" class="d-flex mb-0 rounded px-3" v-b-modal.exit-course>
            <b-icon icon="gear-fill" class="mr-2 align-self-center" aria-hidden="true"></b-icon> {{ logout }}
        </b-button>
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
                <b-icon icon="exclamation-triangle-fill" variant="yellow" font-scale="4" title="Proceed with caution"></b-icon>
                <h5 class="my-3 font-weight-bold text-dark" v-html="item.title"></h5>
                <p class="mb-3" v-html="item.message"></p>
                <div class="d-inline-block mb-3">
                    <!-- cancel button -->
                    <b-button class="mt-3 mr-2" 
                    @click="$bvModal.hide('exit-course')" 
                    variant="secondary"
                    v-html="item.btn1"></b-button>
                    <!-- exit LMS -->
                    <b-button class="mt-3" 
                    @click="exitCourse"
                    variant="danger"
                    v-html="item.btn2"></b-button>
                </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
import { SCORM } from 'pipwerks-scorm-api-wrapper';

export default {
    name: 'ExitModal',
    props: [
        'logout'
    ],
    computed: {
        exit() {
            return this.$store.state.data.exit;
        },
    },
    methods: {
        exitCourse() {
            this.$bvModal.hide("exit-course");
            SCORM.init();
            // var name = SCORM.get('cmi.core.student_name');
            SCORM.set('cmi.completion_status', 'completed');
            SCORM.save();
            SCORM.quit();
        }
    },
}
</script>