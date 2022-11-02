<template>
  <nav class="navbar navbar-light bg-light navbar-expand-md">
    <div class="container-fluid">
      <h2 class="navbar-brand">Categories</h2>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
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
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
