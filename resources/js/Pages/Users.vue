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

export default {
    name: "Users",
    components: { Layout },
    props: {
        time: String
    }
}
</script>

<style scoped>

</style>
