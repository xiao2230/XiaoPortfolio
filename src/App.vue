<script setup>
import { RouterView } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
import { ref } from 'vue';

const theme = ref(null);
</script>

<template>
  <div class="app" :data-theme="theme">
    <Sidebar />

    <RouterView />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

.app{
    background-color: $primaryColor;
}
</style>
