<template>
  <ProductsNav />
  <div class="main-container container-fluid p-3">
    <section class="container-fluid p-3 d-flex">
      <span
        >Filters:
        <select class="form-select" aria-label="Filters" @change="setCategory">
          <option value="all" selected>Choose your category</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </span>
      <span
        >Sort by:
        <select class="form-select" aria-label="Sort" @change="sortByPrice">
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
import { onMounted, ref } from "@vue/runtime-core";
import SingleProductCard from "./SingleProductCard.vue";
import ProductsNav from "./ProductsNav.vue";
import mockData from "../mockData.json";
export default {
  components: { SingleProductCard, ProductsNav },
  setup() {
    let items = ref([]);

    const setCategory = (e) => {
      items.value = mockData;
      if (e.target.value === "all") {
        return items.value;
      } else {
        items.value = items.value.filter((item) => {
          return item.category === e.target.value;
        });
      }
    };
    onMounted(() => {
      items.value = mockData;
    });

    const sortByPrice = (e) => {
      switch (e.target.value) {
        case "1":
          items.value = mockData;
          items.value = items.value.sort((a, b) => {
            return b.price - a.price;
          });
          break;

        case "2":
          items.value = mockData;
          items.value = items.value.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "3":
          items.value = mockData;
          items.value = items.value.sort((a, b) => {
            return b.rating.rate - a.rating.rate;
          });
          break;
        case "4":
          items.value = mockData;
          items.value = items.value.sort((a, b) => {
            return a.rating.rate - b.rating.rate;
          });
          break;
        default:
      }
    };

    return { items, setCategory, sortByPrice };
  },
};
</script>

<style scoped>
.main-container {
  background-image: linear-gradient(
    to bottom right,
    rgb(252, 252, 252),
    rgb(248, 248, 242)
  );
}
</style>
