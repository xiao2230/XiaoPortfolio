<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";
import Sidebar from "@/components/Sidebar.vue";

const store = useThemeStore();
const { theme } = storeToRefs(store);


onMounted(() => {
  // let image = new Image();
  // image.src = "src/assets/img/bg.png";
  // image.onload = () => {
  //   console.log("OKOKOK");
  // }
});
</script>

<template>
  <div class="app" :data-theme="theme">
    <Sidebar />
    <RouterView />
  </div>
</template>

<style lang="scss">
.app {
  color: $secondaryColor;
  background-color: $primaryColor;
  display: flex;
}
</style>
