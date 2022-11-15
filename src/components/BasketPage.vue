<template>
  <div v-for="item in basketItems" :key="item.id">
    <p>{{ item.title }}</p>
    <p>{{ item.description }}</p>
    <p>{{ item.size }}</p>
    <img :src="`${item.image}`"/>
    <button @click="removeItem(item.id)">Remove item</button>
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


const removeItem = (id)=>{
    fetch(`http://localhost:3000/basket/${id}`, {method: "DELETE"}).then(()=>{
      location.reload()
    })
}


    return { basketItems, removeItem };
  },
};
</script>

<style></style>
