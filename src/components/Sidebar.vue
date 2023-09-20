<script setup>
import { ref, computed } from "vue";
import { RouterLink } from 'vue-router';
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";

// 判斷 & 控制深色模式：取得　pinia 變數與方法
const store = useThemeStore();
const { themeBtn } = storeToRefs(store);
const { changeTheme } = store;

// 判斷 & 控制選單開合：設定變數與方法
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
$menuOpenW: 15rem;
$menuCloseW: 3.5rem;

aside {
    width: $menuOpenW;
    min-height: 100vh;
    box-shadow: 0 0 2px $secondaryColor;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    transition: width 0.3s ease-in-out;

    header {
        position: relative;
        padding-block: 1rem;

        .logo {
            display: flex;
            pointer-events: none;

            .pattern {
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: $menuCloseW;

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
                transition: opacity 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out 0.1s;

                .name {
                    font-size: 1.2rem;
                    font-weight: 500;
                }

                .job {
                    font-weight: 300;
                }
            }
        }

        .menuBtn {
            width: 1.8rem;
            height: 1.8rem;
            position: absolute;
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            color: $primaryColor;
            background-color: $secondaryColor;
            cursor: pointer;
            transition: box-shadow 0.3s ease-in-out;

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

            &:hover {
                box-shadow: 0 0 0.8rem var(--primaryColor) inset;
            }
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        padding-block: 1rem;

        .topNav ul {
            list-style: none;

            a {
                display: flex;
                align-items: center;
                height: 3rem;
                line-height: 3rem;
                border-right: 0rem solid $secondaryColor;
                transition: border-right 0.2s ease-in-out;

                &.router-link-exact-active {
                    border-right: 0.3rem solid $secondaryColor;
                }

                svg {
                    min-width: $menuCloseW;
                    font-size: 1.2rem;
                }

                span {
                    transition: opacity 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out 0.1s;
                }
            }
        }

        .bottomNav {
            button {
                margin: 0;
                padding: 0;
                border: none;
                outline: none;
                background-color: transparent;
            }
        }

    }

    &[data-menu="close"] {
        width: $menuCloseW;

        header .logo .text,
        nav .topNav ul a span {
            opacity: 0;
            transform: translateX(-0.5rem);
            pointer-events: none;
            transition-delay: 0s;
        }
    }
}
</style>