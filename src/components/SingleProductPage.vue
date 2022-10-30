<template>
  <p>{{product.title}}</p>
    <p>Price: {{product.price}}</p>
    <p>{{snippet}}</p>
    <img width="200" height="200" 
    :src="`${product.image}`" 
    :alt="`${product.title}`">
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ["product"],
    setup(props) {

        const snippet = computed(()=>{
            return props.product.description.substr(0,50) + "..."
        })


        return {snippet}
    }

}
</script>

<style>

</style>