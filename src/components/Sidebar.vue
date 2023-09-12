<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <aside>
        <div class="asideTop">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/github">GitHub</RouterLink>
        </div>
        <div class="asideBottom">
            <button type="button">Change Theme</button>
        </div>
    </aside>
</template>

<style lang="scss">
aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    padding: 1rem;
    border-right: 2px solid $secondaryColor;

    .asideTop {
        display: flex;
        flex-direction: column;
    }
}
</style>