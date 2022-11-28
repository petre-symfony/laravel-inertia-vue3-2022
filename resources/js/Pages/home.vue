<template>
    <h1>Hello {{ name }}</h1>
    In this series will use the following frameworks

    <ul>
        <li v-for="framework of frameworks" v-text="framework"></li>
    </ul>
</template>

<script>
export default {
    name: "home",
    props: {
        name: String,
        frameworks: Array
    }
}
</script>

<style scoped>

</style>
