<template>
    <div class="d-flex align-items-center justify-content-start justify-content-lg-center pt-3 pt-lg-0">
        <!-- removed class="gear-icon" -->
        <div class="" v-for="item in $t('exit')" :key="item.id">
        <b-button type="button" size="sm" variant="outline-base" class="d-flex font-weight-bold mb-0 px-3 rounded" v-b-modal.exit-course>
            <b-icon icon="gear-fill" class="mr-2 align-self-center" aria-hidden="true"></b-icon> {{ item.heading }}
        </b-button>
        <div>
            <b-modal 
            ref="exit-modal"
            id="exit-course" 
            centered 
            content-class="bg-glass"
            body-class="text-center p-4"
            hide-footer
            title-class="font-weight-bold badge badge-danger px-3 py-1"
            :title="item.heading"
            >
                <b-icon icon="exclamation-triangle-fill" variant="yellow" font-scale="4" title="Proceed with caution"></b-icon>
                <h5 class="my-3 font-weight-bold text-dark" v-html="item.title"></h5>
                <p class="mb-3" v-html="item.message"></p>
                <p class="mb-3 text-danger" style="font-size: 15.5px; line-height: 110%;"
                v-html="item.warning"></p>
                <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
                    <!-- cancel button -->
                    <b-button class="mt-3 mr-2 p-2 w-100" 
                    @click="$bvModal.hide('exit-course')" 
                    variant="secondary"
                    v-html="item.btn1"></b-button>
                    <!-- close session -->
                    <b-button class="mt-3 mr-2 p-2 w-100" 
                    @click="closeSession"
                    variant="orange"
                    v-html="item.btn2"></b-button>
                    <!-- exit LMS -->
                    <b-button class="mt-3 p-2 w-100" 
                    @click="exitCourse"
                    variant="danger"
                    v-html="item.btn3"></b-button>
                </div>
            </b-modal>
        </div>

        </div>
    </div>
</template>

<script>
import { SCORM } from 'pipwerks-scorm-api-wrapper';
import { lms } from '@/mixins/lms'

export default {
    name: 'ExitModal',
    mixins: [lms],
    props: [
        'logout'
    ],
    computed: {
        exit() {
            return this.$store.state.data.exit;
        },
    },
    methods: {
         closeSession() {
            this.$bvModal.hide("exit-course");
            this.$store.dispatch("com_exit");
        },
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