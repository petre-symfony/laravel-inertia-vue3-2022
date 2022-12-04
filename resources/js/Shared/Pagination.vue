<template>
    <Component
        v-for="link in links"
        :is="link.url ? 'Link' : 'span'"
        :href="link.url"
        v-html="link.label"
        class="px-1"
        :class="link.url ? '' : 'text-gray-500'"
    />
</template>

<script setup>
    defineProps({
       links: Array
    })
</script>

<style scoped>

</style>
