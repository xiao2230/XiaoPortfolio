<script setup>
import { gsap } from "gsap";
import { ref, watch, onMounted } from "vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";
import { useLoadStore } from "@/stores/load.js";
import Sidebar from "@/components/Sidebar.vue";
import Loading from "@/components/Loading.vue";

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

const loadStore = useLoadStore();
const { load } = storeToRefs(loadStore);

const app = ref(null);

onMounted(() => {
  watch(load, () => {
    gsap.to(app.value, {
      height: "auto",
      delay: 1.5,
      ease: "circ.inOut"
    });
  })
});
</script>

<template>
  <div ref="app" :data-theme="theme" class="app">
    <Loading />
    <Sidebar />
    <RouterView />
  </div>
</template>

<style lang="scss">
.app {
  color: $secondaryColor;
  background-color: $primaryColor;
  display: flex;
  height: 100vh;
  overflow-y: hidden;
}
</style>
