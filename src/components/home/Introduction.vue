<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const introduction = ref(null);
const text = ref(null);
const img = ref(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const mm = gsap.matchMedia();

    mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767.98px)"
    }, (context) => {
        const { isDesktop, isMobile } = context.conditions;
        const firstAction = { x: "-3vw", y: "3vh", opacity: 0 };
        const nextAction = { x: "3vw", y: "3vh", opacity: 0 };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: introduction.value,
                start: "top 70%",
                end: "bottom 90%",
                scrub: true
            }
        });

        tl
            .fromTo(img.value, isDesktop ? nextAction : firstAction, { x: 0, y: 0, opacity: 1 })
            .fromTo(text.value, isDesktop ? firstAction : nextAction, { x: 0, y: 0, opacity: 1 }, isDesktop ? "0sec" : "-=0.1");
    });
});
</script>

<template>
    <section ref="introduction" class="introduction">
        <div class="container">
            <div ref="text" class="text">
                <h1>Hi！I'm Xiao</h1>
                <div class="aniText">
                    <h3>Frontend Developer</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias quae similique
                    necessitatibus
                    nemo. Tenetur modi quibusdam voluptatibus unde aliquid, facilis officiis sunt consequatur ab,
                    tempora
                    facere possimus alias assumenda.</p>
                <div class="email">
                    <h4>Email</h4>
                    <span>xiaobow2230@gmail.com</span>
                </div>
                <div class="socialBtn">
                    <a href="#" target="_blank"><button type="button" class="btn circle"><font-awesome-icon
                                :icon="['fab', 'linkedin-in']" /></button></a>
                    <a href="#" target="_blank"><button type="button" class="btn circle"><font-awesome-icon
                                :icon="['fab', 'facebook-f']" /></button></a>
                </div>
            </div>
            <div ref="img" class="img">
                <img class="introBg" src="@/assets/img/introBg.png" alt="introBg" title="introBg">
                <img class="intro" src="@/assets/img/intro.png" alt="intro" title="intro">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.introduction .container {
    display: flex;

    >* {
        flex: 1 0 50%;
        transition: transform 0.1s ease-out;

        &.text {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-weight: 700;
                font-size: 2rem;
            }

            .aniText {
                width: 15rem;

                h3 {
                    font-size: 1.5rem;
                    font-weight: 500;
                    white-space: nowrap;
                    color: transparent;
                    -webkit-text-stroke: 1px $secondaryColor;
                    background: linear-gradient($secondaryColor, $secondaryColor) no-repeat;
                    background-clip: text;
                    -webkit-background-clip: text;
                    background-position: 0 0;
                    position: relative;
                    animation: aniBg 3s linear infinite;

                    &::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 0;
                        height: 100%;
                        border-right: 2px solid $secondaryColor;
                        animation: aniCursor 3s linear infinite;
                    }
                }
            }

            p {
                margin-block: 0.5rem;
                color: $fourthColor;
            }

            .email {
                h4 {
                    font-size: 1.1rem;
                    font-weight: 500;
                }

                span {
                    color: $fourthColor;
                }
            }

            .socialBtn {
                margin-top: 2rem;

                .circle {
                    margin-right: 0.5rem;
                }
            }
        }

        &.img {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: clamp(300px, 75%, 450px);
                border-radius: 50%;
                box-shadow: 0 0 30px 30px var(--primaryColor) inset;

                &.intro {
                    width: clamp(310px, 76%, 460px);
                    position: absolute;
                }
            }
        }
    }
}

@keyframes aniBg {

    0%,
    10%,
    100% {
        background-position: -15rem 0;
    }

    75%,
    90% {
        background-position: 0 0;
    }
}

@keyframes aniCursor {

    0%,
    10%,
    100% {
        width: 0;
    }

    75%,
    85%,
    90% {
        width: 100%;
        opacity: 1;
    }

    80% {
        opacity: 0;
    }
}

@media (max-width: 767.98px) {
    .introduction .container {
        flex-direction: column-reverse;

        .img {
            margin-bottom: 3rem;

            img {
                width: clamp(158px, 60%, 350px);

                &.intro {
                    width: clamp(168px, 61%, 360px);
                    ;
                }
            }
        }
    }
}
</style>