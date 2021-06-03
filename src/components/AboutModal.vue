<template>
    <div>
        <div v-for="items in $t('aboutpage')" :key="items.id">
            <!-- modal -->
            <b-button 
            v-b-modal.modal-center
            variant="lightblue" 
            size="lg"
            class="mr-2 mt-2 w-sm-100 mb-2 mb-sm-0" v-html="items.btn1"></b-button>
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
                <h3 class="font-weight-bold text-lightblue mb-3 py-3 border-top border-bottom border-lightblue-trans">Where to start</h3>
                <h5 class="alert alert-lightblue my-4">If you’re unsure of which key leader competencies to focus on:</h5>
                <ul>
                    <li>Review the Leadership Behaviour Model and choose your areas of focus through self-reflection and speaking with your colleagues.</li> 
                    <li>Reflect on what you’re passionate about developing.</li>
                </ul>
                <h5 class="alert alert-yellow my-4">Talk to others</h5>
                <ul>
                    <li>Connect with those around you – your leader, other team members, and your direct reports.</li>
                    <li>Set the context for the conversation by sharing your desire to grow as a leader and ask them: 
                What do you appreciate about me?</li>
                    <li>What could I do to be even more effective?</li>
                </ul>
                <h5 class="alert alert-green my-4">Reflect </h5>
                <ul>
                    <li>How did this feedback make you feel?</li>
                    <li>Did it reinforce or add to what you considered were your areas for growth?</li>
                    <li>Choose your initial 2–3 areas of focus. Return to this tool, and select Get Started.</li>
                </ul>
                <template #modal-footer="{ hide }">
                    <b-button
                        variant="lightblue"
                        size="lg"
                        class="float-right"
                        @click="hide()">
                        Close
                    </b-button>
                    <b-button
                        variant="orange"
                        size="lg"
                        class="float-right"
                        @click="getStarted"
                        >
                        Get Started
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
      aboutpage() {
        return this.$store.state.data.aboutpage;
      },
    }
}
</script>