<script setup>
</script>

<template>
    <section class="profile">
        <div class="profilePhoto text-center">
            <img src="@/assets/img/404.png" alt="profilePhoto" title="profilePhoto">
        </div>
        <div class="profileName text-center">profileName</div>
    </section>
</template>

<style lang="scss" scoped>
.profilePhoto img{
    width: clamp(168px, 60%, 300px);
    border: 2px solid $secondaryColor;
    border-radius: 50%;
}
</style>