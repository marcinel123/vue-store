<template>
  <div v-show="basketItems.length < 1">
    <p>Your basket is empty.</p>
  </div>
  <div v-show="basketItems.length > 0">
    <div v-for="item in basketItems" :key="item.id">
      <div class="container flex-column flex-md-row d-inline-flex d-md-flex p-2 m-5 border-bottom w-75" >
        <img class="photo" :src="`${item.image}`" />
        <div class="container d-flex flex-column align-items">
        <div class="d-flex flex-column m-1 p-1">
          <h6>{{ item.title }}</h6>
        </div>
        <div class="d-flex">
        <div class="d-flex flex-column m-1 p-1">
          <h5>Price</h5>
          <p>{{ item.price }}</p>
        </div>
        <div class="d-flex flex-column m-1 p-1">
          <h5>Size</h5>
          <p>{{ item.size }}</p>
        </div>
      </div>
      </div>
      <button class="ms-md-auto p-2 btn btn-sm btn-light" @click="removeItem(item.id)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const basketItems = ref([]);

    onMounted(() => {
      fetch("http://localhost:3000/basket")
        .then((res) => res.json())
        .then((data) => {
          basketItems.value = data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

    const removeItem = (id) => {
      fetch(`http://localhost:3000/basket/${id}`, { method: "DELETE" }).then(
        () => {
          location.reload();
        }
      );
    };

    return { basketItems, removeItem };
  },
};
</script>

<style scoped>

.photo {
  width: 100px;
  height: auto;
}

.btn {
  height: auto;
  width: auto;
}


</style>
