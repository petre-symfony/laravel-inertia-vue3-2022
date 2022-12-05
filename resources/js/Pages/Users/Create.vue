<template>
    <Head title="Create User"/>

    <h1 class="text-3xl">Create New User</h1>

    <form @submit.prevent="submit" method="POST" class="max-w-md mx-auto mt-8">
        <div class="mb-6">
            <label for="name" class="block mb-2 uppercase font-bold text-xs text-gray-700">Name</label>
            <input v-model="form.name" type="text" class="border border-gray-400 p-2 w-full" name="name" id="name">
            <div v-if="$page.props.errors.name" v-text="$page.props.errors.name" class="text-red-500 text-xs mt-1" />
        </div>

        <div class="mb-6">
            <label for="email" class="block mb-2 uppercase font-bold text-xs text-gray-700">Email</label>
            <input v-model="form.email" type="text" class="border border-gray-400 p-2 w-full" name="email" id="email">
            <div v-if="$page.props.errors.email" v-text="$page.props.errors.email" class="text-red-500 text-xs mt-1" />
        </div>

        <div class="mb-6">
            <label for="password" class="block mb-2 uppercase font-bold text-xs text-gray-700">Password</label>
            <input v-model="form.password" type="password" class="border border-gray-400 p-2 w-full" name="password" id="password">
            <div v-if="$page.props.errors.password" v-text="$page.props.errors.password" class="text-red-500 text-xs mt-1" />
        </div>

        <div class="mb-6">
            <button type="submit" class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500">Submit</button>
        </div>
    </form>
</template>

<script setup>
    import { reactive } from 'vue'
    import { Inertia } from "@inertiajs/inertia"

    let form = reactive({
        name: '',
        email: '',
        password: ''
    })

    let submit = () => {
        Inertia.post('/users', form)
    }
</script>

<style scoped>

</style>
