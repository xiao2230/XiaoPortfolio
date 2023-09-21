<script setup>

</script>

<template>
    <header>
        <img src="@/assets/img/aaa.jpg" alt="">
        <img src="@/assets/img/ccc.png" alt="">
        <img src="@/assets/img/bbb.png" alt="">
    </header>
</template>

<style lang="scss" scoped>
header {
    min-height: 100vh;
    position: relative;
    width: 100vw;

    img{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
}
</style>