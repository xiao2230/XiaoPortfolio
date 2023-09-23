<script setup>
</script>

<template>
    <header>
        <img src="@/assets/img/bg.png" alt="bg" title="bg">
        <img src="@/assets/img/planet_1.png" alt="planet_1" title="planet_1">
        <img src="@/assets/img/planet_2.png" alt="planet_2" title="planet_2">
        <div class="text">HELLO SPACE</div>
        <img src="@/assets/img/planet_3.png" alt="planet_3" title="planet_3">
        <img src="@/assets/img/land_1.png" alt="land_1" title="land_1">
        <img src="@/assets/img/land_2.png" alt="land_2" title="land_2">
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20vh;
        background: linear-gradient(to top, $primaryColor, transparent);
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