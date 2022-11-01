<template>
    <h3>Products List</h3>
    <ProductsNav/>
  <div v-for="product in items" :key="product.id">
    <SingleProductPage :product="product" />
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
      return fetch(`https://fakestoreapi.com/products/category/jewelery`).then(
        (res) => res.json()
      );
    };

    onMounted(() => {
      getProducts().then((products) => {
        items.value = products;
      });
    });

    return { items, getProducts };
  },
};
</script>

<style></style>
