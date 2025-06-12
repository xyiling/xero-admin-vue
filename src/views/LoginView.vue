<template>
    <div class="login">
        <h1>登录</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p>Don't have an account? <RouterLink to="/register">Register here</RouterLink></p>
        <p><RouterLink to="/">Back to Home</RouterLink></p>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
    // Login logic here
};

</script>