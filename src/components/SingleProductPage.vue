<template>
  <h3>{{product.title}}</h3>
    <p class="display-4">Price: {{product.price}}</p>
    <p></p>
    <img width="200" height="200" 
    :src="`${product.image}`" 
    :alt="`${product.title}`">
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ["product"],
    setup(props) {

        


        return {}
    }

}
</script>

<style>

</style>