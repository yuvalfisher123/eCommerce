<template>
    <div class="productCard">
        <div class="card p-0">
            <img :src="image" class="card-img-top" alt="image">
            <div class="card-body p-0">
                <h5 class="card-title">{{ name }}</h5>
                <p class="card-text">{{ description }}</p>
                <p class="fw-bold">{{ price }} $</p>
                <div class="card-footer d-flex">
                    <input type="number" v-model="quantity" class="form-control ms-3 me-3">
                    <button type="button" @click="addToCart(productId, quantity)" class="btn btn-dark col-8">add to cart</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import api from '@/server/api';
    import { mapGetters} from 'vuex';  

  export default {
    name: 'product-card',
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
        async addToCart(productId, quantity) {
            try {
                if (Object.keys(this.getUser).length === 0) {
                    throw new Error('Log In To Add Products To Cart');
                } else if (this.getUser.cart.some((item) => {return item.user_id == this.getUser.id 
                    && item.product.id === productId})) {
                    throw new Error('Product Already In Cart');
                }

                await api.addToUserCart(productId, quantity)

                const user = this.getUser;
                user.cart.push({
                user_id : this.getUser.id,
                product: { 
                    name: this.name,
                    description: this.description,
                    image: this.image,
                    price: this.price,
                    id: this.productId
                } 
                });

                this.$store.commit('ADD_USER_DATA', user);

                this.$alertify.success('Added To Cart')
                
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
  