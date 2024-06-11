<template>
  <div class="login p-5">
    <form class="mt-5" @submit.prevent="login">
      <div class="mx-auto my-5 col-6">
        <label for="usernameInput" class="row form-label">Username</label>
        <input v-model="username" type="text" class="row form-control" id="usernameInput" required>
      </div>
      <div class="mx-auto mt-5 mb-4 col-6">
        <label for="passwordInput" class="row form-label">Password</label>
        <input v-model="password" type="password" class="row form-control" id="passwordInput" required>
      </div>

      <p v-if="failedAttempt" class="fs-5 fw-bold text-danger mb-3">username or password are incorrect</p>

      <button type="submit" class="btn btn-dark mt-2">login</button>
      <p class="m-3">don't have an acount <a href="/register">register</a></p>
      
    </form>
  </div>
</template>

<script>
import api from '@/server/api.js'

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      failedAttempt: false
    }
  },
  methods: {
    async login() {
      try {
        const response = await api.login(this.username, this.password);
        const data = response.data;
        localStorage.setItem('token', data.token);
        this.$store.commit('ADD_USER_DATA', data.user);
        this.$router.push('products')
      } catch (error) {
        this.failedAttempt = true;
      }
    },
    validate() {
      return this.username && this.password
    }
  },
}
</script>