<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const trackPosition = e => e.target.style.cssText = `--scrollX : ${e.clientX - window.innerWidth / 2}px; --scale : ${e.clientY - window.innerHeight / 2};`;

const backHome = () => router.push({ path: "/" });

</script>

<template>
  <div class="notFound" @mousemove="trackPosition">
    <img class="spaceWindow" src="@/assets/img/notFound/spaceWindow.png" alt="spaceWindow" title="spaceWindow">
    <img class="planetGroup-1" src="@/assets/img/notFound/planetGroup_1.png" alt="planetGroup-1" title="planetGroup-1">
    <img class="planetGroup-2" src="@/assets/img/notFound/planetGroup_2.png" alt="planetGroup-2" title="planetGroup-2">
    <img class="astronaut" src="@/assets/img/notFound/astronaut.png" alt="astronaut" title="astronaut">
    <div class="text text-center">Page not found</div>
    <img class="planetGroup-3" src="@/assets/img/notFound/planetGroup_3.png" alt="planetGroup-3" title="planetGroup-3">
    <button type="button" class="btn backHomeBtn" @click="backHome">BACK HOME</button>
  </div>
</template>

<style lang="scss">
.notFound {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  >*:not(button) {
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: top center;
    transform-origin: bottom;

    &.astronaut {
      transform: translateX(calc(var(--scrollX) / -20)) scale(calc(1 + (var(--scale) / 2500)));
    }

    &.planetGroup-1 {
      transform: translateX(calc(var(--scrollX) / -100)) scale(calc(1 + (var(--scale) / 6000)));
    }

    &.planetGroup-2 {
      transform: translateX(calc(var(--scrollX) / -50)) scale(calc(1 + (var(--scale) / 5000)));
    }

    &.planetGroup-3 {
      transform: translateX(calc(var(--scrollX) / -10)) scale(calc(1 + (var(--scale) / 1500)));
    }
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

  .backHomeBtn {
    font-size: clamp(1rem, calc($rule / 40), 2rem);
    border-width: 5px;
    padding: 0.3rem 0.6rem;
    background-color: $thirdColor-7;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    margin-bottom: 15vh;
  }
}

@media (max-width: 767.98px) {
  .notFound .backHomeBtn {
    margin-bottom: 40vh;
  }
}
</style>
