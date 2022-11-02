<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <h2>Products List</h2>
      <router-link to="/mens"
        ><button class="btn btn-secondary m-3 p-3">
          Men's clothing
        </button></router-link
      >
      <router-link to="/jewelery"
        ><button class="btn btn-secondary m-3 p-3">
          Jewelery
        </button></router-link
      >
      <router-link to="electronics"
        ><button class="btn btn-secondary m-3 p-3">
          Electronics
        </button></router-link
      >
      <router-link to="womens"
        ><button class="btn btn-secondary m-3 p-3">
          Women's clothing
        </button></router-link
      >
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
