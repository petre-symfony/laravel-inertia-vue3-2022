<template>
    <header class="flex">
        <h1 class="font-bold text-lg">My App</h1>
        <Nav />
    </header>
    <slot/>
</template>

<script>
import Nav from './Nav'
export default {
    name: "Layout",
    components: { Nav }
}
</script>

<style scoped>

</style>
