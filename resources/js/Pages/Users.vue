<template>
    <h1>Users</h1>

    <Nav />

    <div style="margin-top: 400px">
    The current time is {{ time }}
    </div>

    <Link href="/users" class="text-blue-500">Refresh</Link>
</template>

<script>
import Nav from '../Shared/Nav'
import { Link } from '@inertiajs/inertia-vue3'

export default {
    name: "Users",
    components: { Nav, Link },
    props: {
        time: String
    }
}
</script>

<style scoped>

</style>
