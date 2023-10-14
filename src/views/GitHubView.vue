<script setup>
import { provide, onMounted } from "vue";
import useGitHubStore from "@/composables/useGitHubStore.js";
import Profile from "@/components/github/Profile.vue";
import Repositories from "@/components/github/Repositories.vue";

const githubStore = useGitHubStore;
provide("githubStore", githubStore);

onMounted(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
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
.github {
  overflow-x: hidden;

  .container {
    min-height: 100vh;
  }

}

@media (max-width: 767.98px) {
  .container {
    padding: 5rem 2rem;
  }
}
</style>
