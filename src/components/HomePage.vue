<template>
  <div class="container-fluid">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../images/us1.jpg.jpg" class="d-block w-100" alt="clothes">
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome at your very first VUE store!</h5>
        <p>You should definitely checkout all the features!</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../images/us2.jpg.jpg" class="d-block w-100" alt="clothes">
      <div class="carousel-caption d-none d-md-block">
        <h5 style="color: white">I hope you like it!</h5>
        <p style="color: white">The store has been build using JavaScript, VUE and Bootstrap 5.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../images/us3.jpg.jpg" class="d-block w-100" alt="clothes">
      <div class="carousel-caption d-none d-md-block">
        <h5>Hope to hear from you soon!</h5>
        <p>Please do not order too many things at one time :)</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

   

    <div class="row">
      <div class="col-6">
        <img src="../images/photo4.jpg" class="w-100" alt="clothes" />
      </div>
      <div class="col-6">
        <img src="../images/photo5.jpg" class="w-100" alt="clothes" />
      </div>
    </div>
    <div
      class="discount d-flex flex-column justify-content-center align-items-center bg-light"
    >
      <h2><strong>Are you already our client?</strong></h2>
      <p>You can receive a 25% discount for your next order!</p>
      <span>If you sign up for our newsletter!</span>
      <div
        class="d-flex flex-column align-items-center justify-content-center input-group m-2"
      >
        <form @submit.prevent>
          <label for="email"></label>
          <input
            @change="emailValid"
            id="email"
            class="email_input border-0"
            type="email"
            placeholder="your email address"
            v-model="email"
          />
          <button
            disabled="true"
            type="submit"
            class="signup-btn btn btn-outline-dark"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            Sign Up
          </button>
        </form>
        <p class="m-1 signup-alert"></p>
      </div>
    </div>

    <SignupNotification :email="email" />

    <div class="d-flex flex-row justify-content-around mt-2">
      <div class="d-flex flex-column">
        <h5>Customer service</h5>
        <a class="link" href="#">Size guides</a>
        <a class="link" href="#">FAQs</a>
        <a class="link" href="#">Delivery</a>
        <a class="link" href="#">Covid Information</a>
      </div>
      <div class="d-flex flex-column">
        <h5>You can call us:</h5>
        <p>Monday-Sunday 9.00-18.00</p>
        <p>Phone: 555-555-5555</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import SignupNotification from "./SignupNotification.vue";
export default {
  name: "HomePage",
  components: { SignupNotification },
  setup() {
    const email = ref("");

    const emailValid = (e) => {
      const signupBtn = document.querySelector(".signup-btn");
      const signupAlert = document.querySelector(".signup-alert");
      if (e.target.value.includes("@")) {
        signupBtn.disabled = false;
        signupAlert.innerText = "";
      } else {
        signupAlert.innerText = "Please enter a valid email address.";
        signupAlert.style.color = "red";
        signupBtn.disabled = true;
      }
    };

    return { email, emailValid };
  },
};
</script>

<style scoped>
.discount {
  height: 40vh;
}

.link {
  text-decoration: none;
  color: gray;
}
</style>
