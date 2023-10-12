<script setup>
</script>

<template>
  <div class="notFound">
    <img src="@/assets/img/notFound/spaceWindow.png" alt="spaceWindow" title="spaceWindow">
    <img src="@/assets/img/notFound/astronaut.png" alt="astronaut" title="astronaut">
    <img src="@/assets/img/notFound/planetGroup_1.png" alt="planetGroup-1" title="planetGroup-1">
    <img src="@/assets/img/notFound/planetGroup_2.png" alt="planetGroup-2" title="planetGroup-2">
    <div class="text text-center">Space not found</div>
    <img src="@/assets/img/notFound/planetGroup_3.png" alt="planetGroup-3" title="planetGroup-3">
  </div>
</template>

<style lang="scss">
.notFound {
  height: 100vh;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: top center;
  }

  .text {
    width: 100%;
    font-size: calc($rule / 20);
    font-weight: 700;
    position: absolute;
    top: 25vh;
    text-shadow: 0 0 20px $primaryColor;
    mix-blend-mode: hard-light;
  }
}
</style>
