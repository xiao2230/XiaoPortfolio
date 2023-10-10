<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skill = ref(null);
const h3 = ref(null);
const frondendSkill = ref(null);
const otherSkill = ref(null);
const mm = gsap.matchMedia();

onMounted(() => {
    mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767.98px)"
    }, (context) => {
        const { isDesktop, isMobile } = context.conditions;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: skill.value,
                start: "top 85%",
                end: "bottom 90%",
                scrub: true
            }
        });

        tl
            .fromTo(h3.value, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1 })
            .fromTo(frondendSkill.value, { x: "-3vw", y: "3vh", opacity: 0 }, { x: 0, y: 0, opacity: 1 }, "+=0.1")
            .fromTo(otherSkill.value, { x: "3vw", y: "3vh", opacity: 0 }, { x: 0, y: 0, opacity: 1 }, isDesktop ? "<" : "+=0.2");
    });
});

onUnmounted(() => mm.kill());
</script>

<template>
    <section ref="skill" class="skill">
        <div class="container">
            <h3 ref="h3" class="text-center">
                SKILL
                <div class="cube cube-1">
                    <div class="front"></div>
                    <div class="back"></div>
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
                <div class="cube cube-2">
                    <div class="front"></div>
                    <div class="back"></div>
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
            </h3>
            <div class="allSkill">
                <div ref="frondendSkill" class="frondendSkill">
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
                            <img src="@/assets/img/skill/CSS3.png" alt="CSS3" title="CSS3">
                            <span>CSS3</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/JavaScript.png" alt="JavaScript" title="JavaScript">
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
                            <img src="@/assets/img/skill/D3.png" alt="D3" title="D3">
                            <span>D3</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/GSAP.png" alt="GSAP" title="GSAP">
                            <span>GSAP</span>
                        </span>
                    </div>
                </div>
                <div ref="otherSkill" class="otherSkill">
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
                            <img src="@/assets/img/skill/GitHub.png" alt="GitHub" title="GitHub">
                            <span>GitHub</span>
                        </span>
                        <span class="skillItem">
                            <img src="@/assets/img/skill/Netlify.png" alt="Netlify" title="Netlify">
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

    .container {
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 2rem;
            font-weight: 700;
            text-shadow: 0 0 2px $primaryColor;
            margin-bottom: 2rem;
            position: relative;
            perspective: 1000px;
            transition: transform 0.2s ease-out, opacity 0.2s ease-out;

            .cube {
                height: 100%;
                position: absolute;
                top: 0;
                left: 40%;
                transform-style: preserve-3d;
                animation: rotate-1 5s infinite linear;
                z-index: -1;

                &.cube-2 {
                    left: 60%;
                    animation: rotate-2 5s infinite linear;
                    z-index: 1;
                }

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
        }

        .allSkill {
            display: flex;
            justify-content: space-between;
            flex-grow: 1;

            >div {
                flex-basis: calc(50% - 2rem);
                border: 1px solid $secondaryColor;
                border-radius: 5px;
                padding-block: 2rem;
                margin-bottom: 2rem;
                position: relative;
                transition: transform 0.2s ease-out, opacity 0.2s ease-out;

                h4 {
                    font-size: 1.4rem;
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
                            text-shadow: 0 0 1px $secondaryColor;
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
                        position: relative;

                        &::after {
                            content: "";
                            display: inline-block;
                            width: 65%;
                            aspect-ratio: 1;
                            background-image: linear-gradient(to bottom, $secondaryColor, transparent 45%);
                            border-radius: 50%;
                            position: absolute;
                            z-index: -1;
                        }

                        img {
                            width: 50%;
                            margin-bottom: 0.5rem;
                            filter: drop-shadow(0 0 10px $fourthColor );
                            transform: translateY(1rem);
                            transition: transform 0.3s ease-in-out;
                        }

                        span {
                            color: transparent;
                            opacity: 0;
                            transform: translate(0.5rem, -1rem);
                            text-shadow: 0 0 20px $secondaryColor;
                            transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
                        }
                    }
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
        transform: rotate3d(0, 0, 0, 0);
    }

    100% {
        transform: rotate3d(0.8, 1, 0, 720deg);
    }
}

@keyframes rotate-2 {
    0% {
        transform: rotate3d(0, 0, 0, 0);
    }

    100% {
        transform: rotate3d(0.8, -0.7, 0.5, -720deg);
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
