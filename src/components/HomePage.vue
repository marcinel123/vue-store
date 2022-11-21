<template>
  <div class="container-fluid">
    <div
      id="carousel-clothes"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div style="max-height: 80vh" class="mb-1 carousel-inner">
        <div class="carousel-item active">
          <img src="../images/photo1.jpg" class="d-block w-100" alt="clothes" />
        </div>
        <div class="carousel-item">
          <img src="../images/photo2.jpg" class="d-block w-100" alt="clothes" />
        </div>
        <div class="carousel-item">
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
      <div class="d-flex flex-column align-items-center justify-content-center input-group m-2">
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
        <h5>You can call us anytime</h5>
        <p>Monday-Sunday 9.00-18.00</p>
        <p>Phone: 555-555-5555</p>
        <p>{{ email }}</p>
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

    const emailValid = (e)=>{
      const signupBtn = document.querySelector(".signup-btn")
      if(e.target.value.includes("@")) {
        signupBtn.disabled = false
      } else {
        const signupAlert = document.querySelector(".signup-alert")
        signupAlert.innerText = "Please enter a valid email address."
        signupBtn.disabled = true
      }
    }

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
