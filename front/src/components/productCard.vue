<template>
    <div class="productCard">
        <div class="card p-0">
            <img :src="image" class="card-img-top" alt="image">
            <div class="card-body p-0">
                <h5 class="card-title">{{ name }}</h5>
                <p class="card-text">{{ description }}</p>
                <p class="fw-bold">{{ price }} $</p>
                <div class="card-footer">
                    <button class="btn btn-dark">add to cart</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'product-card',
    props: {
        name: String,
        description: String,
        image: String,
        price: Number
    }
  }
  </script>
  
  <style scoped>
  .card {
    width: 22vw;
  }
  </style>
  