<script setup>
import { onMounted } from "vue";
import Parallax from "@/components/home/Parallax.vue";
import Introduction from "@/components/home/Introduction.vue";
import Skill from "@/components/home/Skill.vue";
import Contact from "@/components/home/Contact.vue";

onMounted(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
</script>

<template>
  <div class="home">
    <Parallax />
    <Introduction />
    <Skill />
    <Contact />
  </div>
</template>

<style lang="scss"></style>
