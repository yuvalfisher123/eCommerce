<template>
  <div class="products">
    <div class="card-group d-flex justify-content-center">
      <productCard
      class="m-3"
       v-for="(product, index) in products" :key="product.id"
       :name="product.name+index" 
       :description="product.description" 
       :image="product.image"
       :price="product.price"/>
    </div>
  <ul class="pagination mx-auto d-flex justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import productCard from '@/components/productCard.vue'
import api from '@/server/api.js'

export default {
  name: 'ProductView',
  components: {
    productCard
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    async loadData() {
      this.products = await api.getProducts();
    }
  },
  async mounted() {
    this.loadData();
  }
}
</script>