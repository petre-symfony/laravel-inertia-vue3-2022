<template>
    <Layout>
        <h1 class="text-3xl">Users</h1>

        <div style="margin-top: 400px">
        The current time is {{ time }}
        </div>

        <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
    </Layout>
</template>

<script setup>
import Layout from '../Shared/Layout'
import { Link } from '@inertiajs/inertia-vue3'

defineProps({
    time: String
})

</script>

<style scoped>

</style>
