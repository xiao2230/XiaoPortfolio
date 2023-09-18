<script setup>
import { ref } from "vue";
import { RouterLink } from 'vue-router';
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";

// 取得　pinia 變數與方法：判斷 & 控制深色模式
const store = useThemeStore();
const { button } = storeToRefs(store);
const { changeTheme } = store;

// 設定變數：控制選單開合
const menuShow = ref(true);
</script>

<template>
    <aside>
        <header>
            <div class="logo">
                <div class="pattern">
                    <span>XP</span>
                </div>
                <div class="text">
                    <span>XiaoPortfolio</span>
                    <span>Front-End Engineer</span>
                </div>
            </div>
            <div class="menuToggle" @click="menuShow = !menuShow">
                <Transition name="menuToggle">
                    <font-awesome-icon v-show="menuShow" :icon="['fas', 'down-left-and-up-right-to-center']" />
                </Transition>
                <Transition name="menuToggle">
                    <font-awesome-icon v-show="!menuShow" :icon="['fas', 'up-right-and-down-left-from-center']" />
                </Transition>
            </div>
        </header>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">
                        <font-awesome-icon :icon="['fas', 'house']" />
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/github">
                        <font-awesome-icon :icon="['fab', 'github']" />
                        <span>GitHub</span>
                    </RouterLink>
                </li>
            </ul>
        </nav>
        <footer>
            <button type="button" @click="changeTheme()">Change Theme:{{ button }}</button>
        </footer>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
    border-right: 2px solid $secondaryColor;

    header {
        position: relative;

        .logo {
            display: flex;

            .pattern {
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    font-family: "Poppins Bold 700", sans-serif;
                    font-size: 1.2rem;
                    display: inline-block;
                    padding: 0.4rem;
                    color: $primaryColor;
                    background-color: $secondaryColor;
                    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
                }
            }

            .text {
                display: flex;
                flex-direction: column;
                padding-inline: 0.5rem;
            }
        }

        .menuToggle {
            width: 1.8rem;
            height: 1.8rem;
            position: absolute;
            top: 50%;
            right: -1.9rem;
            transform: translateY(-50%);
            color: $primaryColor;
            background-color: $secondaryColor;
            border-radius: 50%;
            cursor: pointer;

            svg {
                position: absolute;
                top: 0.4rem;
                left: 0.4rem;

                &.menuToggle-enter-active,
                &.menuToggle-leave-active {
                    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                }

                &.menuToggle-enter-active {
                    transition-delay: 0.3s;
                }

                &.menuToggle-enter-from,
                &.menuToggle-leave-to {
                    transform: scale(0);
                    opacity: 0;
                }
            }
        }
    }
}
</style>