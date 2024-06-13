<template>
  <div class="login p-5">
    <form class="mt-5" @submit.prevent="register">
      <div>
        <div class="row mb-3 ms-4">
          <label for="emailInput" class="col-2 col-form-label">Email</label>
          <div class="col-9">
            <input type="email" v-model="email" class="form-control" id="emailInput" required>
          </div>
        </div>
        <div class="row mb-3 ms-4">
          <label for="usernameInput" class="col-2 col-form-label">Username</label>
          <div class="col-9">
            <input type="text" v-model="username" class="form-control" id="usernameInput" required>
          </div>
        </div>
        <div class="row mb-3 ms-4">
          <label for="passwordInput" class="col-2 col-form-label">Password</label>
          <div class="col-9">
            <input type="password" v-model="password" class="form-control" id="passwordInput" required>
          </div>
        </div>
        <div class="row mb-3 ms-4">
          <label for="firstNameInput" class="col-2 col-form-label">First Name</label>
          <div class="col-9">
            <input type="text" v-model="firstName" class="form-control" id="firstNameInput" required>
          </div>
        </div>
        <div class="row mb-3 ms-4">
          <label for="lastNameInput" class="col-2 col-form-label">Last Name</label>
          <div class="col-9">
            <input type="text" v-model="lastName" class="form-control" id="lastNameInput" required>
          </div>
        </div> 
      </div> 
      
      <button type="submit" class="btn btn-dark">Register</button>
    </form>
  </div>
</template>

<script>
import api from '@/server/api.js'

export default {
  name: 'RegisterView',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      lastName: '',
      firstName: '',
    }
  },
  methods: {
    async register() {
      const user = {
        username: this.username,
        password: this.password,
        email: this.email,
        last_name: this.lastName,
        first_name: this.firstName
      }
      await api.addUser(user);
      this.$router.push('login')
    },
  },
}
</script>