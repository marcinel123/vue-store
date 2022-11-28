<template>
  <nav
    class="navbar navbar-light navbar-expand-md p-4"
    style="background-color: white; color: black; font-size: 25px"
  >
    <router-link class="navbar-brand" to="/">
      <span class="logo fw-bold text-secondary display-6"> VUE-STORE </span>
    </router-link>

    <div class="search d-none d-md-block">
      <input
        class="search-input border-0 border-bottom"
        type="search"
        placeholder="search..."
        @input="search"
      />
      <div class="input-results mw-80">
        <ul class="result" tabindex="0">
          <li class="list-element p-1" v-for="item in results" :key="item.id">
            <router-link
              @click="close"
              class="link"
              :to="`/products/${item.id}`"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
      </div>
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
      class="collapse navbar-collapse justify-content-end align-center w-50"
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
      if (e.target.value == "") {
        document.querySelector(".result").style.visibility = "hidden";
      } else {
        document.querySelector(".result").style.visibility = "visible";
        const filteredData = data.value.filter((result) => {
          return result.title.toLowerCase().includes(e.target.value);
        });
        results.value = filteredData;
      }
    };

    const close = () => {
      document.querySelector(".result").style.visibility = "hidden";
      document.querySelector(".search-input").value = "";
    };

    return { data, search, results, close };
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
.list-element {
  font-size: small;
  list-style: none;
  background: rgb(255, 255, 255);
}
.list-element:hover {
  background: rgb(222, 221, 221);
}
.link {
  text-decoration: none;
  color: black;
}
.search {
  position: relative;
  margin-left: 8em;
}
.search-input::-webkit-search-cancel-button {
  display: none;
}
.input-results {
  background: white;
  width: 200px;
}
.result {
  position: absolute;
  max-height: 200px;
  z-index: 5;
  overflow-y: auto;

}
</style>
