<template>
  <div class="container-fluid p-3 bg-light border">
    <ProductsNav />
    Pageeee {{ id.params.id }}
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const id = useRoute();
    console.log(id.params.id);

    return { id };
  },
};
</script>

<style></style>
