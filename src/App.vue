<script setup>
import { RouterView } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
import { ref } from 'vue';

const theme = ref("auto");
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
