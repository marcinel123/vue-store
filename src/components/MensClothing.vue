<template>
    <ProductsNav/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" v-for="product in items" :key="product.id">
          <SingleProductPage :product="product" />

      </div>
      </div>
      
    </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import SingleProductPage from "./SingleProductPage.vue";
import ProductsNav from "./ProductsNav.vue";
export default {
    components: { SingleProductPage, ProductsNav },
  setup() {
    let items = ref([]);

    const getProducts = async () => {
      return fetch(`https://fakestoreapi.com/products/category/men's clothing`)
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