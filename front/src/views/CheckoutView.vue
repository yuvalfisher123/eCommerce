<template>
  <div class="cart">
    <div v-if="!orderId">
      <form @submit.prevent="buy">
        <h1 class="text-start mb-0 mt-5">Address: </h1>
        <select v-model="address" id="addressSelect" class="form-select form-select-lg mb-5 "  required>
          <option v-for="address in getUser.addresses" :key="'address'+address.id" :value="address.id">{{ address.street }},
             {{ address.city }}, {{ address.country }}</option>
        </select>
        <h1 class="text-start mb-0 mt-5">Credit Card: </h1>
        <select v-model="card" id="cardSelect" class="form-select form-select-lg mb-5"  required>
          <option v-for="card in getUser.creditCards" :key="'card'+card.id" :value="card.id">{{ card.card_number}}</option>
        </select>
      
      <button type="submit" class="btn btn-dark">Place Order</button>
      </form>
    </div>

    <div id="page" v-else>
      <h1>Thank You For Ordering From Us</h1>
      <p>your order id is:</p>
      <p>{{ orderId }}</p>
    </div>
  </div>
</template>

<script>
import api from '@/server/api';
import { mapGetters} from 'vuex'; 

export default {
  name: 'CartView',
  data() {
    return {
      address: '',
      card: '',
      orderId: ''
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    async buy() {
      try {
        this.orderId = (await api.makeOrder(this.card, this.address)).data.order.id;
        await api.clearCart();

        const user = this.getUser;
        user.cart = [];

        this.$store.commit('ADD_USER_DATA', user);


      } catch (error) {
        this.$alertify.error('Failed');
      }
      
    }
  }
}
</script>

<style scoped>
#page {
  position: absolute;
  top: 40vh;
  left: 32vw;
}
</style>