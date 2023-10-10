<script setup>
</script>

<template>
    <section class="profile">
        <div class="avatar text-center">
            <img src="@/assets/img/404.png" alt="profilePhoto" title="profilePhoto">
        </div>
        <h1 class="name text-center">profileName</h1>
    </section>
</template>

<style lang="scss" scoped>
.profile {
    margin-bottom: 2rem;

    .avatar img {
        width: clamp(168px, 60%, 280px);
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