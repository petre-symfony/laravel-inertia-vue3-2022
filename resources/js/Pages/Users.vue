<template>
    <Head title="My App - Users"></Head>
    <h1 class="text-3xl">Users</h1>

    <div style="margin-top: 400px">
    The current time is {{ time }}
    </div>

    <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>

</template>

<script setup>
    import { Link } from '@inertiajs/inertia-vue3'
    import { Head } from '@inertiajs/inertia-vue3'

    defineProps({
        time: String
    })

</script>

<style scoped>

</style>
