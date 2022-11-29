<template>
 <div class="container-fluid">
  <div
      id="carousel-clothes"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="mb-1 carousel-inner">
        <div class="position-relative carousel-item active">
          <p class="text-carousel">To know more about me you should give it a try and contact me via my github or email! 
            Thanks for watching the store!
          </p>
          <img src="../images/photo1.jpg" class="d-block w-100" alt="clothes" />
        </div>
        <div class="position-relative carousel-item">
          <p class="text-carousel">To know more about me you should give it a try and contact me via my github or email! 
            Thanks for watching the store!
          </p>
          <img src="../images/photo2.jpg" class="d-block w-100" alt="clothes" />
        </div>
        <div class="position-relative carousel-item">
          <p class="text-carousel">To know more about me you should give it a try and contact me via my github or email! 
            Thanks for watching the store!
          </p>
          <img src="../images/photo3.jpg" class="d-block w-100" alt="clothes" />
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

}
</script>

<style scoped>
.text-carousel{
  position:absolute;
  font-size: 4vw;
  top: 20%;
  left:20%;
  color: white;
  font-weight: bold;
}

</style>