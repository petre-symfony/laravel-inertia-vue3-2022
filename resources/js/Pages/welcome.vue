<template>
<h1>Hello {{ name }}</h1>
</template>

<script>
export default {
    name: "welcome",
    props: {
        name: String
    }
}
</script>

<style scoped>

</style>
