<template>
    <Layout>
        <h1 class="text-3xl">Users</h1>

        <div style="margin-top: 400px">
        The current time is {{ time }}
        </div>

        <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout'
import { Link } from '@inertiajs/inertia-vue3'

export default {
    name: "Users",
    components: { Layout, Link },
    props: {
        time: String
    }
}
</script>

<style scoped>

</style>
