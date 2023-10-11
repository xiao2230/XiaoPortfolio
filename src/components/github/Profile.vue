<script setup>
import { ref, inject, onMounted } from "vue";
import useFetchProfile from "@/composables/useFetchProfile.js";

const { github } = inject("githubStore");
const { fetchProfile } = useFetchProfile();
const profileName = ref(github.profileName);

const changeProfileName = () => {
    fetchProfile(profileName.value);
};

onMounted(() => {
    fetchProfile(profileName.value);
});
</script>

<template>
    <section class="profile">
        <div class="avatar text-center">
            <img :src="github.profileAvatar" alt="avatar" title="avatar">
        </div>
        <h1 class="name text-center">{{ github.profileName }}</h1>
        <input type="text" v-model="profileName">
        <button @click="changeProfileName">click</button>
    </section>
</template>

<style lang="scss" scoped>
.profile {
    margin-bottom: 2rem;

    .avatar img {
        display: inline-block;
        width: clamp(168px, 60%, 280px);
        aspect-ratio: 1;
        background-color: var(--secondaryColor);
        border: 2px solid $secondaryColor;
        border-radius: 50%;
        margin-bottom: 0.5rem;
    }

    .name {
        font-size: 1.5rem;
        font-weight: 500;
    }
}
</style>