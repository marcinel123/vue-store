<template>
  <nav
    class="navbar navbar-light navbar-expand-md p-4"
    style="background-color: white; color: black; font-size: 25px"
  >
    <router-link class="navbar-brand" to="/">
      <span class="logo fw-bold text-secondary display-6"> VUE-STORE </span>
    </router-link>

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
          <router-link to="/basket"><img src="./images/cart.png"/></router-link>
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
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 3px;
}

.logo {
  filter: drop-shadow(0 0 0.75rem rgb(198, 117, 133))
}
</style>
