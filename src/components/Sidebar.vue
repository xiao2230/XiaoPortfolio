<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";

const store = useThemeStore();
const { button } = storeToRefs(store);
const { changeTheme } = store;
</script>

<template>
    <aside>
        <div class="asideTop">
            <RouterLink to="/">
                <font-awesome-icon :icon="['fas', 'house']" />
                Home
            </RouterLink>
            <RouterLink to="/github">
                <font-awesome-icon :icon="['fab', 'github']" />
                GitHub
            </RouterLink>
        </div>
        <div class="asideBottom">
            <button type="button" @click="changeTheme()">Change Theme:{{ button }}</button>
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