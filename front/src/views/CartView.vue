<template>
  <div class="cart">
    <h1 v-if="Object.keys(getUser).length === 0">Sign In To View Cart</h1>
    <div v-else>
      <h1 v-if="getUser.cart.length === 0">Cart Is Empty</h1>
      <div v-else class="card-group d-flex justify-content-center">
        <cartCard
        class="m-3"
        v-for="item in getUser.cart" :key="item.product.id"
        :name="item.product.name" 
        :description="item.product.description" 
        :image="item.product.image"
        :price="item.product.price"
        :productId="item.product.id"/>
      </div>
      <div v-if="getUser.cart.length !== 0">
        <a type="button" class="btn btn-dark" href="/checkout">Checkout</a>
      </div>
    </div>
    
  </div>
</template>

<script>
import cartCard from '@/components/cartCard.vue'
import { mapGetters} from 'vuex'; 

export default {
  name: 'CartView',
  components: {
    cartCard
  },
  computed: {
    ...mapGetters(['getUser'])
  },
}
</script>