import { SCORM } from "pipwerks-scorm-api-wrapper";

export const lms = {
    data() {
        return {
            text: "",
        };
    },
    methods: {
        lmsInitialize() {
            var status = SCORM.init();
            if (status) {
                // otherwise it's gonna set completion=completed and Success=passed if you just open and close the course
                this.lmsSet({
                    key: "cmi.exit",
                    value: "suspend",
                });
                this.lmsSave();
            }
            console.log("### lmsInitialize: ", status);
        },

        lmsSet(payload) {
            var key = payload.key;
            var value = payload.value;

            var status = SCORM.set(key, value);
            console.log("### lmsSet: ", payload, status);
        },

        lmsGet (payload) {
            var returnValue = SCORM.get(payload);

            console.log("### lmsGet: ", payload, returnValue);
            return returnValue;
        },

        lmsSave () {
            var returnValue = SCORM.save();

            console.log("### lmsSave: ", returnValue);
        },

        lmsQuit () {
            var status = SCORM.quit();
            console.log("### lmsQuit: ", status);
        },

        updateSuspendData() {
            this.lmsSet({
                key: "cmi.suspend_data",
                value: this.text,
            });
        },

        ogSuspendData() {
            this.text = this.lmsGet("cmi.suspend_data");
        },

        setCompletion() {
             this.lmsSet({
                key: "cmi.completion_status",
                value: "completed",
            });
        },

        setSuccessStatus() {
             this.lmsSet({
                key: "cmi.success_status",
                value: "passed",
            });
        }
    },
    mounted() {
        this.lmsInitialize();
    }
};
