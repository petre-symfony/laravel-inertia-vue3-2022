<template>
    <Layout :username="username">
        <h1 class="text-3xl">Home</h1>
    </Layout>

</template>

<script>
import Layout from '../Shared/Layout'

export default {
    name: "Home",
    components: { Layout },
    props: {
        username: String
    }
}
</script>

<style scoped>

</style>
