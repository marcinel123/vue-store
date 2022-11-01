<template>
  <h3>{{product.id}} - {{product.title}}</h3>
    <img width="200" height="200" 
    :src="`${product.image}`" 
    :alt="`${product.title}`">
    <p class="display-4">Price: {{product.price}}</p>
</template>

<script>

export default {
    props: ["product"],
    setup() {

        


        return {}
    }

}
</script>

<style>

</style>