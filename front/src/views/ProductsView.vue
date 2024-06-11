<template>
  <div class="products">
    <div class="card-group d-flex justify-content-center">
      <productCard
      class="m-3"
       v-for="product in productsOnPage" :key="product.id"
       :name="product.name" 
       :description="product.description" 
       :image="product.image"
       :price="product.price"/>
    </div>
  <ul class="pagination mx-auto d-flex justify-content-center">
    <li v-if="page != 1" class="page-item"><a class="page-link" @click="page = page - 1" href="#">Previous</a></li>
    <li class="page-item" v-for="index in Math.ceil(products.length / 20)" :key="index"><a @click="page = index" class="page-link" href="#">{{index}}</a></li>
    <li v-if="page != Math.ceil(products.length / 20)" class="page-item"><a class="page-link" @click="page = page + 1" href="#">Next</a></li>
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
      products: [],
      page: 1
    }
  },
  methods: {
    async loadData() {
      this.products = await api.getProducts(0, this.$route.query?.search);
    }
  },
  async created() {
    await this.loadData();
  },
  computed: {
    productsOnPage() {
      return this.products.slice((this.page-1)*20, this.page*20)
    }
  },
  watch: {
    async '$route'() {
      await this.loadData()
    }
  },
}
</script>