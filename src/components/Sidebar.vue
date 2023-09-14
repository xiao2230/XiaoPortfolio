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
        <header>
            <div class="logo">
                <div class="pattern">XP</div>
                <div class="text">
                    <span>XiaoPortfolio</span>
                    <span>Front-End Engineer</span>
                </div>
            </div>
        </header>
        <!-- <div class="asideTop">
            <div class="logo">
                <div class="logoIcon">XP</div>
                <div class="logoName">XiaoPortfolio</div>
            </div>

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
        </div> -->
    </aside>
</template>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
    border-right: 2px solid $secondaryColor;

    header{
        display: flex;
        .text{
            display: flex;
            flex-direction: column;
        }
    }
}
</style>