<template>
  <div class="profile">
    <form class="p-5 m-auto">
      <div>
        <div class="d-flex justify-content-between col-11 py-2 ps-3">
          <h3 class="text-start offset-1">Profile:</h3>
          <button v-if="!isInEditMode" class="btn btn-dark" type="button" @click="editProfile">Edit Profile</button>
          <div v-else>
            <button class="btn btn-dark mx-1" type="button" @click="saveChanges">Save</button>
            <button class="btn btn-danger" type="button" @click="discardChanges">Discard</button>
          </div>
        </div>

        <div class="row mb-3 ms-4">
          <label for="emailInput" class="col-2 col-form-label">Email</label>
          <div class="col-9">
            <input type="email" :disabled="!isInEditMode" v-model="email" class="form-control" id="emailInput">
          </div>
        </div>
        <div class="row mb-3 ms-4">
          <label for="usernameInput" class="col-2 col-form-label">Username</label>
          <div class="col-9">
            <input type="text" :disabled="!isInEditMode" v-model="username" class="form-control" id="usernameInput">
          </div>
        </div>
        <div class="row mb-3 ms-4">
          <label for="firstNameInput" class="col-2 col-form-label">First Name</label>
          <div class="col-9">
            <input type="text" :disabled="!isInEditMode" v-model="firstName" class="form-control" id="firstNameInput">
          </div>
        </div>
        <div class="row mb-3 ms-4">
          <label for="lastNameInput" class="col-2 col-form-label">Last Name</label>
          <div class="col-9">
            <input type="text" :disabled="!isInEditMode" v-model="lastName" class="form-control" id="lastNameInput">
          </div>
        </div> 
      </div>

      <div class="d-flex justify-content-between col-11 py-2 ps-3">
        <h3 class="text-start offset-1">Addresses:</h3>
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addressModal">Add Address</button>
      </div>

      <div class="accordion offset-1 col-10">
        <div v-for="address in addresses" :key="address.id" class="accordion-item">
          <h2 class="accordion-header collapsed">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#address'+address.id+'colapse'">
              {{ address.country }} {{ address.city }}
            </button>
          </h2>
          <div :id="'address'+address.id+'colapse'" class="accordion-collapse collapse">
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

      <div class="modal fade" id="addressModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Address</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form class="p-5 m-0" @submit.prevent="addAddress">
                <div class="row mb-3 align-items-center">
                  <label for="countryInput" class="col-2 col-form-label">Country</label>
                  <div class="col-9 ms-1">
                    <input type="text" v-model="newCountry" class="form-control" id="countryInput" required>
                  </div>
                </div>
                <div class="row mb-3 align-items-center">
                  <label for="cityInput" class="col-2 col-form-label">City</label>
                  <div class="col-9 ms-1">
                    <input type="text"  v-model="newCity" class="form-control" id="cityInput"  required>
                  </div>
                </div>
                <div class="row mb-3 align-items-center">
                  <label for="streetInput" class="col-2 col-form-label">Street</label>
                  <div class="col-9 ms-1">
                    <input type="text"  v-model="newStreet" class="form-control" id="streetInput"  required>
                  </div>
                </div>
                <div class="row mb-3 align-items-center">
                  <label for="houseNumberInput" class="col-2 col-form-label">House Number</label>
                  <div class="col-9 ms-1">
                    <input type="number"  v-model="newHouseNumber" class="form-control" id="houseNumberInput" required>
                  </div>
                </div> 
                <div class="row mb-3 align-items-center">
                  <label for="postcodeInput" class="col-2 col-form-label">Postcode</label>
                  <div class="col-9 ms-1">
                    <input type="number" v-model="newPostcode" class="form-control" id="postcodeInput" required>
                  </div>
                </div> 

                <div class="modal-footer d-flex justify-content-center">
                  <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-dark">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div class="d-flex justify-content-between mt-5 col-11 py-2 ps-3">
        <h3 class="text-start offset-1">Credit Cards:</h3>
        <button class="btn btn-dark">Add Credit Card</button>
      </div>

      <div class="accordion offset-1 col-10">
        <div v-for="card in cards" :key="card.id" class="accordion-item">
          <h2 class="accordion-header collapsed">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#card'+card.id+'colapse'">
              {{ card.card_number }}
            </button>
          </h2>
          <div :id="'card'+card.id+'colapse'" class="accordion-collapse collapse">
            <div class="accordion-body d-flex justify-content-between">
            <div class="text-start">
              <span class="fw-bold">card: </span>
              <span>{{  card.card_number }}, <br></span>
              <span class="fw-bold">cvc: </span>
              <span>{{  card.cvc }}, <br></span>
              <span class="fw-bold">name: </span>
              <span>{{  card.name_of_holder }}, <br></span>
              <span class="fw-bold">experation: </span>
              <span>{{  card.experation }}, <br></span>
            </div>
          </div>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import api from '@/server/api';
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
      newCountry: '',
      newCity: '',
      newStreet: '',
      newHouseNumber: '',
      newPostcode: '',
    }
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    editProfile() {
      this.isInEditMode = true;
    },
    discardChanges() {
      this.firstName = this.getUser.first_name;
      this.lastName = this.getUser.last_name;
      this.username = this.getUser.username;
      this.email = this.getUser.email;
      this.isInEditMode = false;
    },
    async saveChanges() {
      const user = {
        first_name: this.firstName,
        last_name: this.lastName,
        username: this.username,
        email: this.email
      }

      await api.updateUser(user);
      this.$store.commit('ADD_USER_DATA', {
        ...user,
        addresses: this.addresses,
        creditCards: this.cards
      });

      this.isInEditMode = false;
    },
    addAddress() {
      const address = {
        country: this.newCountry,
        city: this.newCity,
        street: this.newStreet,
        house_number: this.newHouseNumber,
        postcode: this.newPostcode
      }

      api.addAddress(address);
      this.addresses.push(address);

      this.newCountry = '';
      this.newCity = '';
      this.newStreet = '';
      this.newHouseNumber = '';
      this.newPostcode = '';


    }
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