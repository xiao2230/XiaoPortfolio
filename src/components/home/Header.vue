<script setup>
import { onMounted } from "vue";
// import imagesLoaded from "imagesLoaded";

// onMounted(() => {
//     const imgLoad = imagesLoaded('header', { background: '.parallax' });
//     console.log(imgLoad);
//     imgLoad.on("done", instance => {
//         console.log("OK");
//     })
// });
</script>

<template>
    <header>
        <div class="parallax bg"></div>
        <div class="parallax planet-1"></div>
        <div class="parallax planet-2"></div>
        <div class="text">HELLO SPACE</div>
        <div class="parallax planet-3"></div>
        <div class="parallax land-1"></div>
        <div class="parallax land-2"></div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;

    .parallax {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;

        &.bg {
            background: url(@/assets/img/bg.png) no-repeat center / cover;
        }

        &.planet-1 {
            background: url(@/assets/img/planet_1.png) no-repeat center / cover;
        }

        &.planet-2 {
            background: url(@/assets/img/planet_2.png) no-repeat center / cover;
        }

        &.planet-3 {
            background: url(@/assets/img/planet_3.png) no-repeat center / cover;
        }

        &.land-1 {
            background: url(@/assets/img/land_1.png) no-repeat center / cover;
        }

        &.land-2 {
            background: url(@/assets/img/land_2.png) no-repeat center / cover;
        }
    }

    .text {
        font-size: calc($rule / 20);
        font-weight: 700;
        position: absolute;
        top: calc(50% - 15vh);
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        letter-spacing: calc($rule / 120);
        text-shadow: 0 0 20px $primaryColor;
    }
}
</style>