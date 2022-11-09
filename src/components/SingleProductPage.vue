<template>
  <div class="container-fluid p-3 border">
    <ProductsNav />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-7">
          <div class="row">
            <div class="d-none d-md-block col-md-3">
              <img class="photo" :src="`${item.image}`"/>
              <img class="photo mt-4" :src="`${item.image}`"/>
            </div>
            <div class="d-none d-md-block col-md-3">
              <img class="photo" :src="`${item.image}`"/>
              <img class="photo mt-4" :src="`${item.image}`"/>
            </div>
            <div class="col-md-6"><img class="photo" :src="`${item.image}`"/></div>
          </div>
        </div>
        <div class="col-12 col-md-5 text-center pt-5">
          <h1 class="p2">{{item.title}}</h1>
          <p class="mt-2 p-2 display-6">Category: {{item.category}}</p>
          <p class="mt-2 p-2 display-6">Price: {{item.price}}</p>
          <button class="m-3 p-2 btn btn-lg btn-outline-dark">Add to basket</button>
          <h4 class="p-3 mt-4 m-2">Availble sizes:</h4>
<div class="p-3 m-2 d-md-flex d-flex-column justify-content-center">
  <span class="btn btn-secondary btn-lg m-2">XL</span>
  <span class="btn btn-secondary btn-lg m-2">L</span>
  <span class="btn btn-secondary btn-lg m-2">M</span>
  <span class="btn btn-secondary btn-lg m-2">S</span>
</div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 bg-primary">adasda</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRoute } from "vue-router";
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {

  
    const id = useRoute();
    let item = ref([]);

const getProduct = async () => {
  return fetch(`https://fakestoreapi.com/products/${id.params.id}`)
    .then((res) => res.json())
  }

onMounted(()=>{
  getProduct().then((product) => {
      item.value = product
    });
})




    return {getProduct, id, item };
  },
};
</script>

<style>

.photo {
  width: 100%;
  height: auto;
  border-radius: 3px;
  box-shadow: -1px 3px 9px -4px rgba(148, 149, 154, 1);
  transition: 1s;
}

.photo:hover {
  transform: scale(1.3);
  z-index: 2;
}


</style>
