<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <user-icon style="height: 150px; width: 150px;"></user-icon>
        <h3 class="my-4 px-3 text-center">{{ emptyPlan }}</h3>
    </div>
</template>

<script>
import UserIcon from '../icons/UserIcon.vue'
export default {
    name: 'EmptyCart',
    components: {
        UserIcon,
    },
    props: [
        'emptyPlan'
    ],
}
</script>