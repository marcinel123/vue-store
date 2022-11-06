<template>
    <ProductsNav/>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-6 col-lg-4" v-for="product in items" :key="product.id">
          <SingleProductCard :product="product" />

      </div>
      </div>
      
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from "@vue/runtime-core";
  import SingleProductCard from "./SingleProductCard.vue";
  import ProductsNav from "./ProductsNav.vue";
  export default {
      components: { SingleProductCard, ProductsNav },
    setup() {
      let items = ref([]);
  
      const getProducts = async () => {
        return fetch(`https://fakestoreapi.com/products/category/electronics`)
          .then((res) => res.json())
        }
  
      onMounted(()=>{
        getProducts().then((products) => {
            items.value = products
          });
      })
  
  
      
  
      return {items, getProducts };
    },
  
  
  
  
      
  
  }
  </script>
  
  <style>
  
  </style>