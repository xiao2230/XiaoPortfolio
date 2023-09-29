<script setup>
</script>

<template>
    <section class="skill">
        <div class="container">
            <h3>SKILL</h3>
            <div class="allSkill">
                <div class="frondendSkill">
                    <h4>Frondend</h4>
                    <div class="skillList">
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="HTML5" title="HTML5">
                            <span>HTML5</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="CSS3" title="CSS3">
                            <span>CSS3</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="JavaScript" title="JavaScript">
                            <span>JavaScript</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="JQuery" title="JQuery">
                            <span>JQuery</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="Bootstrap" title="Bootstrap">
                            <span>Bootstrap</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="Vue" title="Vue">
                            <span>Vue</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="D3" title="D3">
                            <span>D3</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="GSAP" title="GSAP">
                            <span>GSAP</span>
                        </span>
                    </div>
                </div>
                <div class="otherSkill">
                    <h4>Other</h4>
                    <div class="skillList">
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="GitHub" title="GitHub">
                            <span>GitHub</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/HTML5.png" alt="Netlify" title="Netlify">
                            <span>Netlify</span>
                        </span>
                    </div>
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
        margin-bottom: 2rem;
    }

    .allSkill {
        display: flex;
        justify-content: space-between;

        >div {
            flex-basis: calc(50% - 2rem);
            border: 2px solid $secondaryColor;
            padding-block: 2rem;
            position: relative;

            h4 {
                display: inline-block;
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 2rem;
                position: absolute;
                top: -1.5rem;
                left: -2rem;
                background-color: $fifthColor;
                padding: 0.5rem 1rem;
            }

            .skillList {
                display: grid;
                grid-template-columns: repeat(3, 1fr);

                .skillItem {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-block: 0.5rem;

                    img {
                        width: 50%;
                        margin-bottom: 0.5rem;
                    }
                }
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
