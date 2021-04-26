<template>
    <div>
        <div v-for="items in $t('aboutpage')" :key="items.id">
            <h1 class="display-4 font-weight-bold mb-4"
            style="line-height: 90%; letter-spacing: -3px"
            v-html="items.section_title2"></h1>
            <p class="mb-2" v-html="items.text3"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabThree',
    computed: {
      aboutpage() {
        return this.$store.state.data.aboutpage;
      },
    }
}
</script>