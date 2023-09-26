<script setup>
</script>

<template>
    <header>
        <img class="bg" src="@/assets/img/bg.png" alt="bg" title="bg">
        <img class="planet-1" src="@/assets/img/planet_1.png" alt="planet_1" title="planet_1">
        <img class="planet-2" src="@/assets/img/planet_2.png" alt="planet_2" title="planet_2">
        <div class="text text-1">HELLO</div>
        <div class="text text-2">SPACE</div>
        <img class="planet-3" src="@/assets/img/planet_3.png" alt="planet_3" title="planet_3">
        <img class="land-1" src="@/assets/img/land_1.png" alt="land_1" title="land_1">
        <img class="land-2" src="@/assets/img/land_2.png" alt="land_2" title="land_2">
    </header>
</template>

<style lang="scss" scoped>
[data-load="loading"] header {
    .text-1 {
        opacity: 0;
        transform: translateY(-50vh);
    }

    .text-2 {
        opacity: 0;
        transform: translateY(30vh);
    }

    .planet-2 {
        transform: translateY(50vh);
    }

    .planet-3 {
        transform: translateY(10vh);
    }

    .land-1 {
        transform: translateY(-10vh);
    }

    .land-2 {
        transform: translateY(20vh);
    }
}

header {
    height: 100vh;
    width: 100%;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20vh;
        background: linear-gradient(to top, $primaryColor, transparent);
    }

    >* {
        transition: transform 2s ease-in-out, opacity 3s ease-in-out;
    }

    img {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    .text {
        width: 100%;
        font-size: calc($rule / 20);
        font-weight: 700;
        position: absolute;
        top: 25vh;
        text-align: center;
        letter-spacing: calc($rule / 120);
        text-shadow: 0 0 20px $primaryColor;

        &.text-2 {
            top: calc(25vh + $rule / 20);
        }
    }
}</style>