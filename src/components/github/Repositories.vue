<script setup>
import { watch, onMounted, inject } from "vue";
import useScrollBottom from "@/composables/useScrollBottom.js";
import useFetchRepos from "@/composables/useFetchRepos.js";

const { isBottom, isScroll } = useScrollBottom();
const { isLoaded, init, next } = useFetchRepos();
const { github } = inject("githubStore");

watch([isBottom, isScroll], (newVal) => {
    if (!isBottom.value) return;
    next();
})

onMounted(() => {
    init();
});
</script>

<template>
    <section class="repositories">
        <div class="card" v-for="item in github.repositories" :key="item">
            <h4>{{ item.name }}</h4>
            <a class="url" :href="item.html_url" target="_blank">{{ item.html_url }}</a>
            <div class="star">
                <font-awesome-icon :icon="['fas', 'star']" />
                <span>{{ item.stargazers_count }}</span>
            </div>
        </div>
        {{ isBottom }}
        <div v-show="!isLoaded && !isBottom" class="notLoading text-center">Scroll down to load new repositories</div>
        <div v-show="!isLoaded && isBottom" class="loading text-center"><font-awesome-icon :icon="['fas', 'spinner']" spin /></div>
        <div v-show="isLoaded" class="loaded text-center">All repositories have been loaded</div>
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
        width: 100%;
        word-wrap: break-word;
    }

    .star svg {
        color: #8f7500;
        margin-right: 0.2rem;
    }
}

.loading {
    font-size: 2rem;
}

.loaded {
    font-size: 1.1rem;
}

@media (max-width: 575.98px) {
    .card {
        padding: 0.5rem 1rem;
    }
}
</style>