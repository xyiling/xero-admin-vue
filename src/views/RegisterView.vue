<template>
    <div class="register">
        <h1>注册</h1>
        <form @submit.prevent="handleRegister">
            <div>
                <label for="username">用户名:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">注册</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p>已有账号? <RouterLink to="/login">登录</RouterLink></p>
        <p><RouterLink to="/">返回首页</RouterLink></p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleRegister = () => {
    // Registration logic here
};

</script>