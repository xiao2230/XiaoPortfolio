<script setup>
</script>

<template>
    <section class="skill">
        <div class="container">
            <h3>SKILL</h3>
            <div class="allSkill">
                <div class="skillList">
                    <h4>Frondend</h4>
                    <div class="skillItem">skillItem</div>
                </div>
                <div class="skillList">
                    <h4>Other</h4>
                    <div class="skillItem">skillItem</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.skill {
    background-color: $fifthColor;

    h3 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
    }

    .allSkill {
        display: flex;
        justify-content: space-between;
        padding-inline: 1rem;

        .skillList {
            flex-basis: calc(50% - 2rem);

            .skillItem {
                border: 2px solid $secondaryColor;
            }
        }
    }
}

@media (max-width: 767.98px) {
    .allSkill {
        flex-direction: column;
    }
}
</style>
