<template>
  <nav
    class="navbar navbar-light navbar-expand-md p-4"
    style="background-color: white; color: black; font-size: 25px"
  >
    <router-link class="navbar-brand" to="/">
      <span class="logo fw-bold text-secondary display-6"> VUE-STORE </span>
    </router-link>

    <input
      class="search-input border-0 border-bottom"
      type="search"
      placeholder="search..."
      value=""
      @input="search"
    />
    <div>
      <ul class="result">
        <li v-for="item in results" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#main-nav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      id="main-nav"
      class="collapse navbar-collapse justify-content-end align-center"
    >
      <ul class="navbar-nav">
        <li class="nav-item me-2">
          <router-link to="/basket"
            ><img src="./images/cart.png"
          /></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/aboutus">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
import mockData from "./mockData.json";
import { ref } from "@vue/reactivity";
export default {
  name: "App",

  setup() {
    let data = ref([]);
    data.value = mockData;
    const results = ref([]);

    const search = (e) => {
      const filteredData = data.value.filter((result) => {
        return result.title.toLowerCase().includes(e.target.value);
      });
      results.value = filteredData;
    };

    return { data, search, results };
  },
};
</script>

<style>
body {
  margin: 3px;
}

.logo {
  filter: drop-shadow(0 0 0.75rem rgb(198, 117, 133));
}
</style>
