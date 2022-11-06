<template>
  <div class="container-fluid">
    <div  id="carousel-clothes" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div style="max-height: 50vh" class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../images/photo1.jpg"
            class="d-block w-100"
            alt="clothes"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../images/photo2.jpg"
            class="d-block w-100"
            alt="clothes"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../images/photo3.jpg"
            class="d-block w-100"
            alt="clothes"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-clothes"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel-clothes"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  setup() {
    return {};
  },
};
</script>

<style></style>
