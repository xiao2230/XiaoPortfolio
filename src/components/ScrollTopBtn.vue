<script setup>
import { ref, onMounted } from "vue";

const isShow = ref(false);

const scrollTop = () => window.scrollTo({ top: 0 });
const showSrollBtn = () => {
    const otop = document.body.scrollTop || document.documentElement.scrollTop;
    otop === 0 ? isShow.value = false : isShow.value = true;
};

onMounted(() => {
    window.addEventListener("scroll", showSrollBtn);
});

</script>

<template>
    <div v-show="isShow" class="scrollBtn">
        <button type="button" @click="scrollTop"><font-awesome-icon :icon="['fas', 'rocket']" /></button>
    </div>
</template>

<style lang="scss" scoped>
.scrollTopBtn {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 998;

    button {
        padding: 0.5rem;
        background-color: $secondaryColor;
        border: 5px solid $fourthColor;
        border-radius: 50%;
        cursor: pointer;

        svg {
            width: 2rem;
            height: 2rem;
            color: transparent;
            stroke: $primaryColor;
            stroke-width: 2.5rem;
            transform: translate(2px, 3px) rotateZ(-90deg);
        }
    }
}
</style>
