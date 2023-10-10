<script setup>
</script>

<template>
    <section class="repositories">
        <div class="card">
            <h4>repository title</h4>
            <a href="javascript:;">url</a>
            <div class="star">
                <font-awesome-icon :icon="['fas', 'star']" />
                <span>10</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card {
    font-size: 1.1rem;
    color: $primaryColor;
    background-color: $secondaryColor;
    width: clamp(200px, 60%, 360px);
    padding: 1rem 1.5rem;
    margin: 0 auto;

    >*:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    a {
        color: $primaryColor;
        display: inline-block;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .star svg{
        color: #8f7500;
        margin-right: 0.2rem;
    }
}
</style>