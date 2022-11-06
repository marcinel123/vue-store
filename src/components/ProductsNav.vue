<template>
  <nav class="navbar navbar-light navbar-expand-md ">
    <div class="container-fluid mt-3 mb-1 p-3">

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

      <div class="category-nav collapse navbar-collapse" id="navbarNav">
        <ul class="container-fluid navbar-nav d-flex justify-content-around border-bottom ">
          <li><router-link class="nav-link" to="/mens"> Men's clothing </router-link></li>
          <li><router-link class="nav-link" to="/jewelery"> Jewelery </router-link></li>
          <li><router-link class="nav-link" to="electronics"> Electronics </router-link></li>
          <li><router-link class="nav-link" to="womens"> Women's clothing </router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>

a.nav-link {
  font-size: 1.25rem;
}

.category-nav:hover {
  background-color: rgb(192, 193, 195);
  transition: 0.5s;
}


</style>
