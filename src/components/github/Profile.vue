<script setup>
import { ref, inject, onMounted, watch } from "vue";
import useFetchProfile from "@/composables/useFetchProfile.js";

const { github, setProfileName, clearProfileAvatar } = inject("githubStore");
const { isLoaded, fetchProfile } = useFetchProfile();
const profileName = ref(github.profileName);
const isEdit = ref(false);
const editName = ref(github.profileName);

const openEdit = () => isEdit.value = true;

const saveEdit = () => {
    isEdit.value = false;
    setProfileName(editName.value);
    clearProfileAvatar();
    fetchProfile(editName.value);
};

const closeEdit = () => {
    isEdit.value = false;
    editName.value = github.profileName;
};

onMounted(() => {
    fetchProfile(profileName.value);
});
</script>

<template>
    <section class="profile text-center">
        <div class="avatar">
            <img v-show="isLoaded" :src="github.profileAvatar" alt="avatar" title="avatar">
            <font-awesome-icon v-show="!isLoaded" :icon="['fas', 'spinner']" spin />
        </div>
        <div class="name">
            <div class="edited" v-if="!isEdit">
                <h3>{{ github.profileName }}</h3>
                <button type="button" @click="openEdit"><font-awesome-icon :icon="['fas', 'pen']" /></button>
            </div>
            <div class="editing" v-else="isEdit">
                <input type="text" v-model="editName" v-focus @keyup.enter="saveEdit">
                <button type="button" @click="saveEdit"><font-awesome-icon :icon="['fas', 'check']" /></button>
                <button type="button" @click="closeEdit"><font-awesome-icon :icon="['fas', 'xmark']" /></button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.profile {
    margin-bottom: 2rem;

    .avatar {
        position: relative;
        margin-bottom: 0.5rem;
        display: inline-block;
        width: clamp(168px, 60%, 280px);
        aspect-ratio: 1;
        background-color: var(--secondaryColor);
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
        }

        svg {
            font-size: 2rem;
            color: $primaryColor;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
        }
    }

    .name>* {
        position: relative;

        h3,
        input {
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 2rem;
            display: inline-block;
            padding: 0.5rem 1rem;
            width: clamp(168px, 60%, 280px);
            text-align: center;
        }

        input {
            color: $primaryColor;
            background-color: $secondaryColor;
            border: none;

            &:focus {
                background-color: $fourthColor;
                outline-color: $secondaryColor;
            }
        }

        button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 0.5rem;
        }

        &.edited button {
            font-size: 1.3rem;
        }

        &.editing button {
                font-size: 1.5rem;

            &:last-child {
                font-size: 1.6rem;
                margin-left: 2rem;
            }
        }

    }
}
</style>