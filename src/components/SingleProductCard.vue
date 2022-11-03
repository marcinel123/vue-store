<template>
  <div class="card border-0" style="width: 22rem; height: 24rem; margin-bottom: 15px;">
    <img
    style="height: 50%; width: 50%; margin: 0 auto; padding-top: 5px;"
      
      :src="`${product.image}`"
      class="card-img-top"
      :alt="`${product.title}`"
    />
    <div class="card-body text-end d-flex flex-column">
      <h5 class="card-title">{{ product.title }} - {{product.id}}</h5>
      <p class="card-text">
        {{ shortDescription }}
      </p>
      <router-link :to="`/products/${product.id}`" class="btn btn-outline-dark mt-auto">See the product</router-link>
    </div>
  </div>
</template>

<script>

export default {
  props: ["product"],
  setup(props) {
    const shortDescription = props.product.description.substring(0, 40) + "...";

    

    return { shortDescription };
  },
};
</script>

<style></style>
