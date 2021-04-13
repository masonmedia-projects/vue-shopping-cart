<template>
    <div>
        <div v-for="items in $t('myLearningPlan')" :key="items.id">
            <h3 class="mb-4 mt-0" v-html="items.subtitle"></h3>
            <hr class="text-dark bg-dark w-100 mb-4" />
            <ul class="list-unstyled d-flex">
                <li v-for="item in items.nextSteps" :key="item.id"
                class="border border-dark p-4 mr-3">
                    <span v-html="item"></span>
                </li>
                <!-- <li>Promo code: </li> -->
                <!-- <li>Shipping: {{ totalPrice + 50 }}</li> -->
                <!-- <li>Subtotal: {{ totalPrice + checkoutTotal}}</li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartSummary',
    components: {
        // EmptyCart
    },
    props: [
        'totalPrice',
        ],
    computed: {
        myLearningPlan() {
            return this.$store.state.data.myLearningPlan;
        }
    }
}
</script>