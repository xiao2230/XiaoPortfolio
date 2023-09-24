<script setup>
import { storeToRefs } from "pinia";
import { useLoadedStore } from "@/stores/loaded.js";

const store = useLoadedStore();
const { loaded } = storeToRefs(store);
const { changeLoaded } = store;
</script>

<template>
    <div class="loading">
        <div>LOADING：{{ loaded }}</div>
        <button @click="changeLoaded">CHANGE</button>
    </div>
</template>

<style lang="scss" scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background: #000;
}
</style>