<template>
  <ProductsNav />
  <div class="container-fluid p-3">
    <section class="container-fluid p-3 d-flex">
      <span
        >Filters:
        <select class="form-select" aria-label="Filters" @change="getValue">
          <option selected>Choose your category</option>
          <option value="men's clothing">
            Men's clothing
          </option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </span>
      <span
        >Sort by:
        <select class="form-select" aria-label="Sort">
          <option selected>Sort by</option>
          <option value="1">Price (High to low)</option>
          <option value="2">Price (Low to high)</option>
          <option value="3">Rate (Highest to lowest)</option>
          <option value="4">Rate (Lowest to highest)</option>
        </select>
      </span>
    </section>

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="col-sm-9 col-md-6 col-lg-4"
          v-for="product in items"
          :key="product.id"
        >
          <SingleProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref } from "@vue/runtime-core";
import SingleProductCard from "./SingleProductCard.vue";
import ProductsNav from "./ProductsNav.vue";
import mockData from "../mockData.json";
export default {
  components: { SingleProductCard, ProductsNav },
  setup() {
    let items = ref([]);

    const getValue = (e) => {
      items.value = mockData
      items.value = items.value.filter(
        (item) => { 
          return item.category === e.target.value}
      );
    };

    onMounted(() => {
      items.value = mockData;
    });




    return { items, getValue };
  },
};
</script>

<style></style>
