<template>
  <div class="product-list">
    <h3>Products List</h3>
    <button @click="items = mens">Men's clothing</button>
    <button @click="items = jewelery">Jewelery</button>
    <button @click="items = electronics">Electronics</button>
    <button @click="items = women">Women's clothing</button>
    <div v-for="product in items" :key="product.id">
      <SingleProductPage :product="product" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import SingleProductPage from "./SingleProductPage.vue";
export default {
  components: { SingleProductPage },
  props: ["products"],
  setup(props) {
    let items = ref(props.products);

    const jewelery = computed(() => {
      return props.products.filter(
        (product) => product.category === "jewelery"
      );
    });

    const mens = computed(() => {
      return props.products.filter(
        (product) => product.category === "men's clothing"
      );
    });

    const electronics = computed(() => {
      return props.products.filter(
        (product) => product.category === "electronics"
      );
    });

    const women = computed(() => {
      return props.products.filter(
        (product) => product.category === "women's clothing"
      );
    });

    return { mens, items, women, jewelery, electronics };
  },
};
</script>

<style></style>
