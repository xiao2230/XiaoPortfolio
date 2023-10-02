<script setup>
</script>

<template>
    <section class="skill">
        <div class="container">
            <h3>SKILL</h3>
            <div class="allSkill">
                <div class="frondendSkill">
                    <h4>
                        <div>Frontend</div>
                        <div class="smoky">
                            <span>F</span>
                            <span>r</span>
                            <span>o</span>
                            <span>n</span>
                            <span>t</span>
                            <span>e</span>
                            <span>n</span>
                            <span>d</span>
                        </div>
                    </h4>
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
                            <img src="@/assets/img/skill/JQuery.png" alt="JQuery" title="JQuery">
                            <span>JQuery</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/Bootstrap.png" alt="Bootstrap" title="Bootstrap">
                            <span>Bootstrap</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/Vue.png" alt="Vue" title="Vue">
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
                    <div class="cube">
                        <div class="front"></div>
                        <div class="back"></div>
                        <div class="top"></div>
                        <div class="bottom"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
                <div class="otherSkill">
                    <h4>
                        <div>Other</div>
                        <div class="smoky">
                            <span>O</span>
                            <span>t</span>
                            <span>h</span>
                            <span>e</span>
                            <span>r</span>
                        </div>
                    </h4>
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
                    <div class="cube">
                        <div class="front"></div>
                        <div class="back"></div>
                        <div class="top"></div>
                        <div class="bottom"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.skill {
    background-color: $fifthColor;

    .container {
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 2rem;
        }

        .allSkill {
            display: flex;
            justify-content: space-between;
            flex-grow: 1;

            >div {
                flex-basis: calc(50% - 2rem);
                border: 2px solid $secondaryColor;
                padding-block: 2rem;
                margin-bottom: 2rem;
                position: relative;
                perspective: 1000px;

                h4 {
                    font-size: 1.5rem;
                    font-weight: 500;
                    line-height: 2rem;
                    position: absolute;
                    top: -1.5rem;
                    left: -2rem;
                    background-color: $fifthColor;
                    padding: 0.5rem 1rem;


                    .smoky {
                        position: absolute;
                        top: 0.5rem;
                        left: 1rem;

                        span {
                            display: inline-block;
                            color: transparent;
                            text-shadow: 0 0 1px $fourthColor;
                            animation: smoky 1.5s alternate infinite;
                        }

                        @for $item from 1 through 8 {
                            span:nth-of-type(#{$item}) {
                                animation-delay: #{(1 + calc($item / 8))}s;
                            }
                        }
                    }
                }

                .skillList {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    height: 100%;

                    .skillItem {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-block: 0.5rem;

                        img {
                            width: 50%;
                            margin-bottom: 0.5rem;
                            transform: translateY(1rem);
                            transition: transform 0.5s ease-in-out;
                        }

                        span {
                            color: transparent;
                            opacity: 0;
                            transform: translate(0.5rem, -1rem);
                            text-shadow: 0 0 20px $secondaryColor;
                            transition: color 0.5s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
                        }
                    }
                }

                .cube {
                    height: 100%;
                    position: absolute;
                    right: 0.5rem;
                    top: 0;
                    transform-style: preserve-3d;
                    animation: rotate-1 5s alternate infinite ease-in-out;

                    div {
                        position: absolute;
                        width: 1rem;
                        height: 1rem;
                        background: $secondaryColor;
                        border: 1px solid $fourthColor;

                        &.front {
                            transform: translateZ(0.5rem);
                        }

                        &.back {
                            transform: rotateY(180deg) translateZ(0.5rem);
                        }

                        &.top {
                            transform: rotateX(90deg) translateZ(0.5rem);
                        }

                        &.bottom {
                            transform: rotateX(-90deg) translateZ(0.5rem);
                        }

                        &.left {
                            transform: rotateY(-90deg) translateZ(0.5rem);
                        }

                        &.right {
                            transform: rotateY(90deg) translateZ(0.5rem);
                        }
                    }
                }

                &.otherSkill .cube {
                    animation: rotate-2 5s alternate infinite ease;
                }

                &:hover .skillItem,
                &:active .skillItem {
                    img {
                        transform: translateY(0);
                    }

                    span {
                        color: $secondaryColor;
                        opacity: 1;
                        text-shadow: 0 0 1px $secondaryColor;
                        transform: translate(0, 0);
                    }
                }
            }
        }
    }
}

@keyframes rotate-1 {
    0% {
        transform: translateY(0) rotate3d(0, 0, 0, 0);
    }

    100% {
        transform: translateY(calc(100% - 1rem)) rotate3d(0.01, 0.1, 0.01, 720deg);
    }
}

@keyframes rotate-2 {
    0% {
        transform: translateY(0) rotate3d(0, 0, 0, 0);
    }

    100% {
        transform: translateY(calc(100% - 1rem)) rotate3d(0.01, 0.1, -0.01, 720deg);
    }
}

@keyframes smoky {
    30% {
        transform: translateY(-5px);
        text-shadow: 0 0 5px $fourthColor;
    }

    70% {
        transform: translateY(5px);
        text-shadow: 0 0 5px $fourthColor;
    }

    100% {
        transform: translateY(0);
    }
}

@media (max-width: 767.98px) {
    .skill .container .allSkill {

        flex-direction: column;

        &>div .skillList {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}

@media (max-width: 575.98px) {
    .skill .container .allSkill>div .skillList {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 319.98px) {
    .skill .container .allSkill>div .skillList {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
