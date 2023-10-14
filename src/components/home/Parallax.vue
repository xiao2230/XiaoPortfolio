<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parallax = ref(null);
const text_1 = ref(null);
const text_2 = ref(null);
const planet_1 = ref(null);
const land_1 = ref(null);
const land_2 = ref(null);
const tl = gsap.timeline();

onMounted(() => {
    tl
        .to(text_1.value, { y: "32vh" }, "0sec")
        .to(text_2.value, { y: "35vh" }, "0sec")
        .to(planet_1.value, { y: "8vh" }, "0sec")
        .to(land_1.value, { y: "-4vh", scale: 1.1 }, "0sec")
        .to(land_2.value, { scale: 1.2 }, "0sec");

    ScrollTrigger.create({
        animation: tl,
        trigger: parallax.value,
        start: "top top",
        end: "80% top",
        scrub: true
    });
});

onUnmounted(() => tl.kill());
</script>

<template>
    <section ref="parallax" class="parallax">
        <div class="bg" role="img" aria-label="bg"></div>
        <div class="planet-2" role="img" aria-label="planet-2"></div>
        <div ref="text_1" class="text text-1 text-center">HELLO</div>
        <div ref="planet_1" class="planet-1" role="img" aria-label="planet-1"></div>
        <div class="planet-3" role="img" aria-label="planet-3"></div>
        <div ref="text_2" class="text text-2 text-center">SPACE</div>
        <div ref="land_1" class="land-1" role="img" aria-label="land-1"></div>
        <div ref="land_2" class="land-2" role="img" aria-label="land-2"></div>
    </section>
</template>

<style lang="scss" scoped>
[data-load="loading"] .parallax {
    .text-1 {
        opacity: 0;
        margin-top: -50vh;
    }

    .text-2 {
        opacity: 0;
        margin-top: 30vh;
    }

    .planet-2 {
        margin-top: 50vh;
    }

    .planet-3 {
        margin-top: 10vh;
    }

    .land-1 {
        margin-top: -5vh;
    }

    .land-2 {
        margin-top: 5vh;
    }
}

.parallax {
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 35vh;
        background: linear-gradient(to top, $primaryColor, transparent);
    }

    >* {
        transition: margin-top 2s ease-in-out, opacity 3s ease-in-out;
    }

    >div {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;

        &.bg {
            background: url(@/assets/img/parallax/bg.png) no-repeat center / cover;
        }

        &.planet-1 {
            background: url(@/assets/img/parallax/planet_1.png) no-repeat center / cover;
        }

        &.planet-2 {
            background: url(@/assets/img/parallax/planet_2.png) no-repeat center / cover;
        }

        &.planet-3 {
            background: url(@/assets/img/parallax/planet_3.png) no-repeat center / cover;
        }

        &.land-1 {
            background: url(@/assets/img/parallax/land_1.png) no-repeat bottom / cover;
        }

        &.land-2 {
            background: url(@/assets/img/parallax/land_2.png) no-repeat bottom / cover;
        }
    }

    .text {
        width: 100%;
        font-size: calc($rule / 20);
        font-weight: 700;
        position: absolute;
        top: 25vh;
        letter-spacing: calc($rule / 120);
        text-shadow: 0 0 20px $primaryColor;
        mix-blend-mode: overlay;

        &.text-2 {
            top: calc(25vh + $rule / 20);
        }
    }
}
</style>