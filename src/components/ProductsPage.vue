<template>
  <div class="product-list">
    <h3>Products List</h3>
    <div v-for="product in products" :key="product.id">
    <p>{{product.title}}</p>
    <p>{{product.price}}</p>
    <p>{{product.description}}</p>
    <img width="200" height="200" :src="`${product.image}`" :alt="`${product.title}`">
    </div>
  </div>
</template>

<script>
export default {
 props: ["products"],
 setup(props) {
  console.log(props.products)
 }
}
</script>

<style>

</style>