<template>
  <div class="container-fluid p-3">
    <ProductsNav />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-7">
          <div class="row">
            <div class="d-none d-md-block col-md-3">
              <img class="photo" :src="`${item.image}`" />
              <img class="photo mt-4" :src="`${item.image}`" />
            </div>
            <div class="d-none d-md-block col-md-3">
              <img class="photo" :src="`${item.image}`" />
              <img class="photo mt-4" :src="`${item.image}`" />
            </div>
            <div class="col-md-6">
              <img class="photo" :src="`${item.image}`" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 text-center pt-5">
          <h2 class="p2">{{ item.title }}</h2>
          <p class="mt-2 p-2">Category: {{ item.category }}</p>
          <p class="mt-2 p-2 display-6">Price: {{ item.price }}$</p>
          <button
            disabled="true"
            @click="addItem"
            class="item-btn m-3 p-2 btn btn-lg btn-dark"
          >
            Add to basket
          </button>
          <h4 class="p-3 mt-4 m-2">Available sizes:</h4>
          <div class="p-3 m-2 d-md-flex d-flex-column justify-content-center">
            <label for="xl">
              <input
                @click="checkboxChecked"
                class="checkbox_size"
                type="checkbox"
                id="xl"
                value="xl"
              />
              <span class="checkbox_span btn btn-secondary btn-lg m-2">XL</span>
            </label>
            <label for="l">
              <input
                @click="checkboxChecked"
                class="checkbox_size"
                type="checkbox"
                id="l"
                value="l"
              />
              <span class="checkbox_span btn btn-secondary btn-lg m-2">L</span>
            </label>
            <label for="m">
              <input
                @click="checkboxChecked"
                class="checkbox_size"
                type="checkbox"
                id="m"
                value="m"
              />
              <span class="checkbox_span btn btn-secondary btn-lg m-2">M</span>
            </label>
            <label for="s">
              <input
                @click="checkboxChecked"
                class="checkbox_size"
                type="checkbox"
                id="s"
                value="s"
              />
              <span class="checkbox_span btn btn-secondary btn-lg m-2">S</span>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="border-top mt-2 pt-3 d-flex justify-content-around">
          <img class="details_photo" src="../images/free_returns.jpg" alt="" />
          <img class="details_photo" src="../images/free_shipping.jpg" alt="" />
          <img class="details_photo" src="../images/installment.jpg" alt="" />
          <img class="details_photo" src="../images/paylater.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import ProductsNav from "./ProductsNav.vue";
import router from "@/router";
export default {
  components: { ProductsNav },
  setup() {
    const id = useRoute();
    let item = ref([]);
    let selectedSize = ref(null);
    let checked = ref(true);

    const getProduct = async () => {
      return fetch(`https://fakestoreapi.com/products/${id.params.id}`).then(
        (res) => res.json()
      );
    };

    onMounted(() => {
      getProduct().then((product) => {
        item.value = product;

        if (
          item.value.category === "electronics" ||
          item.value.category === "jewelery"
        ) {
          const btn = document.querySelector(".item-btn");
          btn.disabled = false;

          document.querySelector("h4").style.display = "none";
          const spans = document.querySelectorAll(".checkbox_span");

          let i;
          for (i = 0; i < spans.length; ++i) {
            spans[i].style.display = "none";
          }
        }
      });
    });


      const checkboxChecked = (e) => {
        const btn = document.querySelector(".item-btn");
        btn.disabled = !btn.disabled;

        const checkboxes = document.querySelectorAll(".checkbox_size");

        let i;
        for (i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].value !== e.target.value) {
            checkboxes[i].checked = false;
            checkboxes[i].disabled = !checkboxes[i].disabled;
          }
        }

        selectedSize = e.target.value;
      };
    

    const addItem = () => {
      let newItem = {
        title: item.value.title,
        price: item.value.price,
        image: item.value.image,
        size: selectedSize,
      };
      fetch(`http://localhost:3000/basket/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      }).then(() => {
        router.push("/basket");
      });
    };

    return {
      checked,
      getProduct,
      id,
      item,
      checkboxChecked,
      addItem,
      selectedSize,
    };
  },
};
</script>

<style scoped>
.photo {
  width: 100%;
  height: auto;
  border-radius: 3px;
  box-shadow: -1px 3px 9px -4px rgba(148, 149, 154, 1);
  transition: 1s;
}
@media screen and (min-width: 765px) {
  .photo:hover {
    transform: scale(1.1);
    z-index: 2;
  }
}
.checkbox_size {
  display: none;
}
.checkbox_size:checked + .checkbox_span {
  border: 2px solid rgb(5, 5, 5);
}

.details_photo {
  max-height: 50px;
  width: auto;
}
</style>
