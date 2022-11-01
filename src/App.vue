<template>
  <nav class="navbar navbar-light p-4" 
  style="background-color: gray; color: white; font-size: 25px;">
    <router-link class="navbar-brand" to="/">
      <span class="fw-bold text-secondary"> VUE-STORE </span>
    </router-link>
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/products">Products</router-link>
    <router-link class="nav-link" to="/aboutus">About Us</router-link>
    <router-link class="nav-link" to="/contact">Contact</router-link>
    <div id="main-nav" class="collapse navbar-collapse justify-content-end align-center">
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#main-nav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 10px;
}
</style>
