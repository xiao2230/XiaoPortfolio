<script setup>
const scrollTop = () => window.scrollTo(0, 0);

</script>

<template>
    <div class="scrollTopBtn">
        <button type="button" @click="scrollTop"><font-awesome-icon :icon="['fas', 'rocket']" flip="horizontal" /></button>
    </div>
</template>

<style lang="scss" scoped>
.scrollTopBtn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;

    button {
        cursor: pointer;

        svg {
            width: 2rem;
            height: 2rem;

            path {
                fill: transparent;
                stroke: $secondaryColor;
                stroke-width: 1rem;
            }
        }
    }

    path {
        fill: transparent;
        stroke: $secondaryColor;
        stroke-width: 1rem;
    }
}
</style>
