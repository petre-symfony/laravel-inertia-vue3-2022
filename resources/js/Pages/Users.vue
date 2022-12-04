<template>
    <Head title="Users"></Head>
    <h1 class="text-3xl">Users</h1>

    <h1 class="text-3xl">
        Home
    </h1>

    <ul>
        <li
            v-for="user in users"
            :key="user.id"
            v-text="user.name"
        ></li>
    </ul>
</template>

<script setup>
    import { Link } from '@inertiajs/inertia-vue3'

    defineProps({
        users: Array
    })

</script>

<style scoped>

</style>
