<script setup>
import { watch, onMounted, inject } from "vue";
import useScrollBottom from "@/composables/useScrollBottom.js";
import useFetchRepos from "@/composables/useFetchRepos.js";

const { isBottom, isScroll, chkScrollBottom } = useScrollBottom();
const { isLoaded, isLoading, isNotFound, fetchRepos, showNextRepos, resetData } = useFetchRepos();
const { github } = inject("githubStore");

watch([isBottom, isScroll], (newVal) => {
    if (!isBottom.value) return;
    showNextRepos();
})

watch(() => github.profileName, (newVal) => {
    resetData();
    fetchRepos();
});

onMounted(() => {
    fetchRepos();
});
</script>

<template>
    <section class="repositories">
        <div class="card" v-for="item in github.repositories" :key="item">
            <h4>
                <span>{{ item.name }}</span>
                <span>{{ item.visibility }}</span>
            </h4>
            <a class="url" :href="item.html_url" target="_blank">{{ item.html_url }}</a>
            <div class="star">
                <font-awesome-icon :icon="['fas', 'star']" />
                <span>{{ item.stargazers_count }}</span>
            </div>
        </div>
        <div v-show="isNotFound" class="notFound text-center">User not found</div>
        <div v-show="!isLoaded && !isLoading && !isNotFound" class="notLoading text-center">Scroll down to load new
            repositories</div>
        <div v-show="isLoading && !isNotFound" class="loading text-center"><font-awesome-icon :icon="['fas', 'spinner']"
                spin /></div>
        <div v-show="isLoaded" class="loaded text-center">All repositories have been loaded</div>
    </section>
</template>

<style lang="scss" scoped>
[data-load="loading"] .repositories {
    transform: translateY(10vh);
    opacity: 0;
}

.repositories {
    transition: transform 2s ease-in-out, opacity 3s ease-in-out;

    .card {
        font-size: 1.1rem;
        width: clamp(210px, 95%, 360px);
        margin: 0 auto;

        &:not(:last-child) {
            margin-bottom: 1rem;
        }

        h4 {
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-size: 1.3rem;
                font-weight: 500;

                &+span {
                    font-size: 1rem;
                    border: 2px solid $secondaryColor;
                    padding: 0.3rem;
                }
            }
        }

        .url {
            font-size: 1.1rem;
            color: transparent;
            -webkit-text-stroke: 0.5px $secondaryColor;
            display: inline-block;
            width: 100%;
            word-wrap: break-word;
            margin-block: 0.8rem;
            transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;

            &:hover {
                color: $secondaryColor;
                text-shadow: 0 0 10px $secondaryColor;
            }
        }

        .star svg {
            color: #8f7500;
            margin-right: 0.2rem;
        }
    }

    .loading {
        font-size: 2rem;
    }

    .notFound,
    .notLoading,
    .loaded {
        font-size: 1.1rem;
    }
}

@keyframes border {
    to {
        transform: rotateZ(-360deg);
    }
}

@media (max-width: 575.98px) {
    .card {
        padding: 1rem;
    }
}
</style>