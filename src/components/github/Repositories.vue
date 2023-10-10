<script setup>
import { watch } from "vue";
import useScrollBottom from "@/composables/useScrollBottom.js";

const { isBottom } = useScrollBottom();

watch(isBottom, (newVal) => {
    if (!isBottom) return;
    console.log("isBottom=>", newVal);
})
</script>

<template>
    <section class="repositories">
        <div class="card" v-for="i in 20" :key="i">
            <h4>repository title</h4>
            <a class="url" href="javascript:;">url</a>
            <div class="star">
                <font-awesome-icon :icon="['fas', 'star']" />
                <span>10</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card {
    font-size: 1.1rem;
    color: $primaryColor;
    background-color: $secondaryColor;
    width: clamp(210px, 95%, 360px);
    padding: 1rem 1.5rem;
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    >*:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .url {
        color: $primaryColor;
        display: inline-block;
    }

    .star svg {
        color: #8f7500;
        margin-right: 0.2rem;
    }
}

@media (max-width: 575.98px) {
    .card {
        padding: 0.5rem 1rem;
    }
}
</style>