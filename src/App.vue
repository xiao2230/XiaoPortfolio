<script setup>
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";
import Sidebar from "@/components/Sidebar.vue";
import Loading from "@/components/Loading.vue";

const store = useThemeStore();
const { theme } = storeToRefs(store);

onMounted(() => {
  let image = new Image();
  image.src = "src/assets/img/bg.png";
  image.onload = () => {
    console.log("OKOKOK");
  }
});
</script>

<template>
  <div class="app" :data-theme="theme">
    <!-- <Loading /> -->
    <Sidebar />
    <RouterView />
  </div>
</template>

<style lang="scss">
.app {
  color: $secondaryColor;
  background-color: $primaryColor;
  display: flex;

  &.loading{
    height: 100vh;
    overflow: hidden;
  }
}
</style>
