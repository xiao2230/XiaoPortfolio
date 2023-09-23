<script setup>
import { ref, onBeforeMount } from "vue";
import { RouterLink } from 'vue-router';
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";
import { getStored, setStored } from "@/lib/localStorage.js";

// 判斷 & 控制深色模式：取得　pinia 變數與方法
const store = useThemeStore();
const { theme } = storeToRefs(store);
const { changeTheme } = store;

// 判斷 & 控制選單開合：設定變數與方法
const menu = ref();
const storedKey = "menu";
const initMenu = () => {
    const getStoredVal = getStored(storedKey);
    menu.value = getStoredVal ? getStoredVal : "open";
    setStored(storedKey, menu.value);
};
const changeMenu = () => {
    menu.value = menu.value === "open" ? "close" : "open";
    setStored(storedKey, menu.value);
}

onBeforeMount(() => { initMenu() });
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
            <button type="button" class="menuBtn" @click="changeMenu">
                <Transition name="menuBtn">
                    <font-awesome-icon v-show="menu === 'open'" :icon="['fas', 'down-left-and-up-right-to-center']" />
                </Transition>
                <Transition name="menuBtn">
                    <font-awesome-icon v-show="menu === 'close'" :icon="['fas', 'up-right-and-down-left-from-center']" />
                </Transition>
            </button>
        </header>
        <nav>
            <div class="topNav">
                <ul>
                    <li>
                        <RouterLink to="/">
                            <font-awesome-icon :icon="['fas', 'house']" class="icon" />
                            <span class="text">Home</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/github">
                            <font-awesome-icon :icon="['fab', 'github']" class="icon" />
                            <span class="text">GitHub</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="bottomNav">
                <button type="button" class="themeBtn" @click="changeTheme">
                    <span class="iconGroup">
                        <Transition name="themeBtn">
                            <font-awesome-icon v-show="theme === 'auto'" :icon="['fas', 'circle-half-stroke']"
                                class="icon" />
                        </Transition>
                        <Transition name="themeBtn">
                            <font-awesome-icon v-show="theme === 'dark'" :icon="['fas', 'moon']" class="icon" />
                        </Transition>
                        <Transition name="themeBtn">
                            <font-awesome-icon v-show="theme === 'light'" :icon="['fas', 'sun']" class="icon" />
                        </Transition>
                    </span>
                    <span class="text" v-show="theme === 'auto'">Auto Mode</span>
                    <span class="text" v-show="theme === 'dark'">Dark Mode</span>
                    <span class="text" v-show="theme === 'light'">Light Mode</span>
                </button>
            </div>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
$menuOpenW: 15rem;
$menuCloseW: 3.5rem;

button {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
}

.pattern,
.icon,
.iconGroup {
    font-size: 1.2rem;
    min-width: $menuCloseW;
}

.text {
    font-size: 1rem;
    transition: opacity 0.2s ease-in-out 0.1s, transform 0.2s ease-in-out 0.1s;
}

.menuBtn:hover svg {
    filter: drop-shadow(0 0 2px $primaryColor) drop-shadow(0 0 8px $primaryColor);
}

a:not(.router-link-exact-active):hover,
.themeBtn:hover {
    filter: drop-shadow(0 0 2px $secondaryColor) drop-shadow(0 0 8px $secondaryColor);
}

aside {
    width: $menuOpenW;
    min-height: 100vh;
    box-shadow: 0 0 2px $secondaryColor;
    display: flex;
    flex-direction: column;
    background-color: $primaryColor;
    position: fixed;
    white-space: nowrap;
    transition: width 0.3s ease-in-out;
    z-index: 999;

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

                span {
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
                font-size: 1rem;
                position: absolute;
                top: 0.4rem;
                left: 0.4rem;

                &.menuBtn-enter-active {
                    transition: transform 0.3s ease-in-out 0.1s, opacity 0.3s ease-in-out 0.1s;
                }

                &.menuBtn-leave-active {
                    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
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
                    background-color: $thirdColor;
                    pointer-events: none;
                }
            }
        }

        .bottomNav button {
            height: 3rem;
            line-height: 3rem;
            display: flex;
            align-items: center;
            color: $secondaryColor;
            cursor: pointer;

            .iconGroup {
                display: flex;
                align-items: center;

                .icon {
                    position: absolute;

                    &.themeBtn-enter-active {
                        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                    }

                    &.themeBtn-leave-active {
                        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                    }

                    &.themeBtn-enter-from,
                    &.themeBtn-leave-to {
                        transform: scale(0) rotate(180deg);
                        opacity: 0;
                    }
                }
            }
        }

    }

    &[data-menu="close"] {
        width: $menuCloseW;

        header .text,
        nav .text {
            opacity: 0;
            transform: translateX(-0.5rem);
            pointer-events: none;
            transition-delay: 0s;
        }
    }
}
</style>