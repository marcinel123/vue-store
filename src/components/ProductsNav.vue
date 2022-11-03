<template>
  <nav class="navbar navbar-light bg-light navbar-expand-md">
    <div class="container-fluid">
      <h2 class="navbar-brand d-none d-md-inline">Categories</h2>

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle d-md-none"
          id="btnDropdown"
          type="button"
          data-bs-toggle="dropdown"
        >
          Categories
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnDropdown">
          <li>
            <router-link class="dropdown-item" to="/mens"
              >Men's clothing</router-link
            >
          </li>
          <li>
            <router-link class="dropdown-item" to="/jewelery"
              >Jewelery</router-link
            >
          </li>
          <li>
            <router-link class="dropdown-item" to="/electronics"
              >Electronics</router-link
            >
          </li>
          <li>
            <router-link class="dropdown-item" to="/womens"
              >Women's clothing</router-link
            >
          </li>
        </ul>
      </div>

      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->

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
