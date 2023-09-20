<script setup>
import { ref, computed } from "vue";
import { RouterLink } from 'vue-router';
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";

// 取得　pinia 變數與方法：判斷 & 控制深色模式
const store = useThemeStore();
const { themeBtn } = storeToRefs(store);
const { changeTheme } = store;

// 設定變數與方法：控制選單開合
const menu = ref("open");
const changeMenu = () => menu.value = menu.value === "open" ? "close" : "open";
const menuBtn = computed(() => menu.value === "open" ? true : false);
</script>

<template>
    <aside :data-menu="menu">
        <header>
            <div class="logo">
                <div class="pattern">
                    <span>XP</span>
                </div>
                <div class="text">
                    <span class="name">XiaoPortfolio</span>
                    <span class="job">Front-End Engineer</span>
                </div>
            </div>
            <div class="menuBtn" @click="changeMenu">
                <Transition name="menuBtn">
                    <font-awesome-icon v-show="menuBtn" :icon="['fas', 'down-left-and-up-right-to-center']" />
                </Transition>
                <Transition name="menuBtn">
                    <font-awesome-icon v-show="!menuBtn" :icon="['fas', 'up-right-and-down-left-from-center']" />
                </Transition>
            </div>
        </header>
        <nav>
            <div class="topNav">
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
            </div>
            <div class="bottomNav">
                <button type="button" @click="changeTheme">Change Theme:{{ themeBtn }}</button>
            </div>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    width: 15rem;
    min-height: 100vh;
    border-right: 2px solid $secondaryColor;
    display: flex;
    flex-direction: column;

    header {
        position: relative;
        display: flex;
        justify-content: center;
        padding-block: 1rem;

        .logo {
            display: flex;

            .pattern {
                display: flex;
                align-items: center;

                span {
                    font-size: 1.2rem;
                    font-weight: 700;
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

                .name {
                    font-size: 1.2rem;
                    font-weight: 500;
                }
            }
        }

        .menuBtn {
            width: 1.8rem;
            height: 1.8rem;
            position: absolute;
            top: 50%;
            right: -0.9rem;
            transform: translateY(-50%);
            color: $primaryColor;
            background-color: $secondaryColor;
            border-radius: 50%;
            cursor: pointer;

            svg {
                position: absolute;
                top: 0.4rem;
                left: 0.4rem;

                &.menuBtn-enter-active,
                &.menuBtn-leave-active {
                    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                }

                &.menuBtn-enter-active {
                    transition-delay: 0.3s;
                }

                &.menuBtn-enter-from,
                &.menuBtn-leave-to {
                    transform: scale(0);
                    opacity: 0;
                }
            }
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        padding-block: 1rem;

        &>* {
            text-align: center;

            &.topNav {
                ul {
                    list-style: none;
                }
            }

            &.bottomNav {
                button {
                    margin: 0;
                    padding: 0;
                    border: none;
                    outline: none;
                    background-color: transparent;
                }
            }
        }
    }
}
</style>