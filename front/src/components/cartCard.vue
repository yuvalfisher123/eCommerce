<template>
    <div class="cartCard">
        <div class="card mb-3" style="min-width: 90vw;">
            <div class="row align-items-center g-0">
                <div class="col-2">
                <img :src="image" class="img-fluid rounded-start" style="height: 150px;" alt="...">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ name }}</h5>
                        <p class="card-text">{{  description }}</p>
                        <span>Quantity: </span>
                        <span class="card-text">{{ quantity }}</span>
                    </div>
                </div>
                <div class="col-2">
                    <button type="button" @click="deleteItem" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import api from '@/server/api';
    import { mapGetters} from 'vuex';  

  export default {
    name: 'cart-card',
    data() {
        return {
            quantity: 1
        }
    },
    props: {
        name: String,
        description: String,
        image: String,
        price: Number,
        productId: Number
    },
    methods: {
        async deleteItem() {
            try {
                if (Object.keys(this.getUser).length === 0) {
                    throw new Error('Log In To Remove Item From Cart');
                }

                await api.deleteFromUserCart(this.productId);

                const user = this.getUser;
                const index = user.cart.findIndex((item) => item.product.id == this.productId);
                user.cart.splice(index, 1);

                this.$store.commit('ADD_USER_DATA', user);
                
            } catch (error) {
                this.$alertify.error(error.message);
            }

        }
    },
    computed: {
        ...mapGetters(['getUser']),
    },
  }
  </script>
  
  <style scoped>
  .card {
    width: 22vw;
  }
  </style>
  