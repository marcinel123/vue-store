<template>
  <div class="container-fluid p-3 bg-light border">
    <ProductsNav />
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="col-sm-12 col-md-6"
          v-for="product in items"
          :key="product.id"
        >
          <SingleProductPage :product="product" />
        </div>
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
      return fetch("https://fakestoreapi.com/products/").then((res) =>
        res.json()
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
