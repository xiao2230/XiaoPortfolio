<script setup>
import { ref } from "vue";
import { RouterLink } from 'vue-router';
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.js";

const store = useThemeStore();
const { button } = storeToRefs(store);
const { changeTheme } = store;

const show = ref(true);
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
            <div class="toggle" @click="show = !show">
                <Transition name="show">
                    <font-awesome-icon v-show="show" :icon="['fas', 'down-left-and-up-right-to-center']" />
                </Transition>
                <Transition name="show">
                    <font-awesome-icon v-show="!show" :icon="['fas', 'up-right-and-down-left-from-center']" />
                </Transition>
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
.show-enter-active {
    transition: all 0.5s ease-out;
    animation-delay: 0.5s;
}

.show-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.show-enter-from,
.show-leave-to {
    transform: scale(0);
    opacity: 0;
}

.toggle svg{
    position: absolute;
}

aside {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
    border-right: 2px solid $secondaryColor;

    header {
        .logo {
            display: flex;

            .pattern {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 0.4rem;

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
            }
        }
    }
}
</style>