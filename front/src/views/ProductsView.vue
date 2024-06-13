<template>
  <div class="products">
    <div class="dropdown d-flex">
      <button class="btn btn-dark dropdown-toggle ms-4 mt-4" type="button" data-bs-toggle="dropdown">
        Order By
      </button>
      <ul class="dropdown-menu">
        <li><button class="dropdown-item" @click="sorter = 'price'; invert = -1">Price Low to High</button></li>
        <li><button class="dropdown-item" @click="sorter = 'price'; invert = 1">Price High to Low</button></li>
        <li><button class="dropdown-item" @click="sorter = 'name'; invert = 1">Name A-Z</button></li>
        <li><button class="dropdown-item" @click="sorter = 'name'; invert = -1">Name Z-A</button></li>
      </ul>
    </div>
    <div class="card-group d-flex justify-content-center">
      <productCard
      class="m-3"
       v-for="product in productsOnPage" :key="product.id"
       :name="product.name" 
       :description="product.description" 
       :image="product.image"
       :price="product.price"
       :productId="product.id"/>
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
      page: 1,
      sorter: 'name',
      invert: 1
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
      return this.sortedProducts.slice((this.page-1)*20, this.page*20)
    },
    sortedProducts() {
      return this.products.sort((a,b) => this.invert*String(a[this.sorter]).localeCompare(String(b[this.sorter])));
    }
  },
  watch: {
    async '$route'() {
      await this.loadData()
    }
  },
}
</script>