<script setup>
import Profile from "@/components/github/Profile.vue";
import Repositories from "@/components/github/Repositories.vue";
</script>

<template>
  <div class="github">
    <div class="container">
      <Profile />
      <Repositories />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}

@media (max-width: 767.98px) {
  .container {
    padding: 4.5rem;
  }
}
</style>
