<template>
  <div v-for="product in items" :key="product.id">
      <SingleProductPage :product="product" />
    </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import SingleProductPage from "./SingleProductPage.vue";
export default {
    components: { SingleProductPage },
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