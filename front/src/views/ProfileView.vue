<template>
  <div class="profile">
    <form class="p-5 m-auto">
      <div class="row mb-3 offset-1">
        <label for="emailInput" class="col-2 col-form-label">Email</label>
        <div class="col-8">
          <input type="email" :disabled="!isInEditMode" v-model="email" class="form-control" id="emailInput">
        </div>
      </div>
      <div class="row mb-3 offset-1">
        <label for="usernameInput" class="col-2 col-form-label">Username</label>
        <div class="col-8">
          <input type="text" :disabled="!isInEditMode" v-model="username" class="form-control" id="usernameInput">
        </div>
      </div>
      <div class="row mb-3 offset-1">
        <label for="firstNameInput" class="col-2 col-form-label">First Name</label>
        <div class="col-8">
          <input type="text" :disabled="!isInEditMode" v-model="firstName" class="form-control" id="firstNameInput">
        </div>
      </div>
      <div class="row mb-3 offset-1">
        <label for="lastNameInput" class="col-2 col-form-label">Last Name</label>
        <div class="col-8">
          <input type="text" :disabled="!isInEditMode" v-model="lastName" class="form-control" id="lastNameInput">
        </div>
      </div>

      <div class="accordion offset-1 col-10">
        <div v-for="address in addresses" :key="address.id" class="accordion-item">
          <h2 class="accordion-header collapsed">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+address.id+'colapse'">
              {{ address.country }} {{ address.city }}
            </button>
          </h2>
          <div :id="address.id+'colapse'" class="accordion-collapse collapse">
            <div class="accordion-body d-flex justify-content-between">
            <div class="text-start">
              <span class="fw-bold">Address: </span>
              <span>{{  address.country }}, </span>
              <span>{{  address.city }}, </span>
              <span>{{  address.street }}, </span>
              <span>{{  address.house_number }}, <br></span>
              <span class="fw-bold">Postcode: </span>
              <span>{{  address.postcode }} </span>
            </div>
          </div>
          </div>
        </div>
      </div>


    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProfileView',
  data() {
    return {
      firstName:'',
      lastName:'',
      email:'',
      username:'',
      addresses: [],
      cards: [],
      isInEditMode: false,
    }
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
  },
  watch: {
    getUser : function (user) {
      this.firstName = user.first_name;
      this.lastName = user.last_name;
      this.username = user.username;
      this.email = user.email;
      this.addresses = user.addresses;
      this.cards = user.creditCards; 
    }
  }
}
</script>