<script setup>
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import Sidebar from "@/components/Sidebar.vue";
import { useThemeStore } from "@/stores/theme.js";

const store = useThemeStore();
const { theme } = storeToRefs(store);
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
