<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { throttle } from "@/lib/Throttle.js";

const isShow = ref(false);

const scrollTop = () => window.scrollTo({ top: 0 });
const showBtn = throttle(() => {
    const otop = document.body.scrollTop || document.documentElement.scrollTop;
    otop === 0 ? isShow.value = false : isShow.value = true;
}, 100);

onMounted(() => {
    window.addEventListener("scroll", showBtn);
});

onUnmounted(() => {
    window.removeEventListener("scroll", showBtn);
});
</script>

<template>
    <Transition name="scrollBtn">
        <div v-show="isShow" class="scrollBtn">
            <button type="button" @click="scrollTop"><font-awesome-icon :icon="['fas', 'rocket']" /></button>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.scrollBtn {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 998;

    &.scrollBtn-enter-active,
    &.scrollBtn-leave-active {
        will-change: transform, opacity;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    &.scrollBtn-enter-from,
    &.scrollBtn-leave-to {
        transform: scale(0);
        opacity: 0;
    }

    button {
        padding: 0.5rem;
        background-color: $secondaryColor;
        border: 5px solid $fourthColor;
        border-radius: 50%;
        cursor: pointer;

        &:hover svg {
            color: $primaryColor;
            stroke-width: 0;
            filter: drop-shadow(0 0 12px $primaryColor);
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: transparent;
            stroke: $primaryColor;
            stroke-width: 2.5rem;
            transform: translate(2px, 3px) rotateZ(-90deg);
            transition: color 0.2 ease-in-out, filter 0.2s ease-in-out;
        }
    }
}

@media (max-width: 575.98px) {
    .scrollBtn {
        bottom: 1rem;
        right: 1rem;
    }
}
</style>
