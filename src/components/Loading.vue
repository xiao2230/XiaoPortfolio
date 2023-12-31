<script setup>
import { gsap } from "gsap";
import { ref, watch, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useLoadStore } from "@/stores/load.js";

const loadstore = useLoadStore();
const { load } = storeToRefs(loadstore);

const curtains = ref(null);
const svg = ref(null);
const loading = ref(null);

onMounted(() => {
    watch(load, () => {
        const tl = gsap.timeline();
        tl
            .to(svg.value, {
                scale: 0,
                duration: 0.8,
                ease: "circ.inOut"
            })
            .to(curtains.value.children, {
                scaleY: 0,
                stagger: 0.15,
                ease: "circ.inOut"
            }, "-=0.3")
            .to(loading.value, {
                zIndex: -1,
                duration: 0.1
            }, "-=0.1");
    });
});
</script>

<template>
    <div ref="loading" class="loading">
        <div ref="curtains" class="curtains">
            <div class="curtain"></div>
            <div class="curtain"></div>
            <div class="curtain"></div>
            <div class="curtain"></div>
            <div class="curtain"></div>
        </div>
        <svg ref="svg" viewBox="-10 -10 532.00 532.00" xmlns="http://www.w3.org/2000/svg">
            <filter id="filterBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            </filter>
            <path class="fire"
                d="M511.328,20.8027c-11.60759,38.70264-34.30724,111.70173-61.30311,187.70077,6.99893,2.09372,13.4042,4,18.60653,5.59368a16.06158,16.06158,0,0,1,9.49854,22.906c-22.106,42.29635-82.69047,152.795-142.47819,214.40356-.99984,1.09373-1.99969,2.5-2.99954,3.49995A194.83046,194.83046,0,1,1,57.085,179.41009c.99985-1,2.40588-2,3.49947-3,61.59994-59.90549,171.97367-120.40473,214.37343-142.4982a16.058,16.058,0,0,1,22.90274,9.49988c1.59351,5.09368,3.49947,11.5936,5.5929,18.59351C379.34818,35.00565,452.43074,12.30281,491.12794.70921A16.18325,16.18325,0,0,1,511.328,20.8027Z" />
            <path class="fire filterBlur"
                d="M511.328,20.8027c-11.60759,38.70264-34.30724,111.70173-61.30311,187.70077,6.99893,2.09372,13.4042,4,18.60653,5.59368a16.06158,16.06158,0,0,1,9.49854,22.906c-22.106,42.29635-82.69047,152.795-142.47819,214.40356-.99984,1.09373-1.99969,2.5-2.99954,3.49995A194.83046,194.83046,0,1,1,57.085,179.41009c.99985-1,2.40588-2,3.49947-3,61.59994-59.90549,171.97367-120.40473,214.37343-142.4982a16.058,16.058,0,0,1,22.90274,9.49988c1.59351,5.09368,3.49947,11.5936,5.5929,18.59351C379.34818,35.00565,452.43074,12.30281,491.12794.70921A16.18325,16.18325,0,0,1,511.328,20.8027Z" />
            <path class="meteor"
                d="M319.951,320.00207A127.98041,127.98041,0,1,0,191.97061,448.00046,127.97573,127.97573,0,0,0,319.951,320.00207Z" />
            <path class="hole_1"
                d="M319.951,320.00207Zm-127.98041-31.9996a31.9951,31.9951,0,1,1-31.9951-31.9996A31.959,31.959,0,0,1,191.97061,288.00247Z" />
            <path class="hole_2"
                d="M191.97061,288.00247Zm31.9951,79.999a15.99755,15.99755,0,1,1-15.99755-15.9998A16.04975,16.04975,0,0,1,223.96571,368.00147Z" />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.loading {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 9999;

    .curtains {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;

        .curtain {
            flex-grow: 1;
            background-image: linear-gradient(to top, $primaryColor, $secondaryColor);
            transform-origin: top;
        }
    }

    svg {
        width: 30vw;
        height: 30vh;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;

        .fire {
            fill: none;
            stroke: #d44f4f;
            stroke-width: 10px;
            stroke-dasharray: 200;
            animation: dash 3s ease-in-out infinite;

            &.filterBlur {
                filter: url(#filterBlur);
            }
        }

        .meteor {
            fill: #d2ad73;
        }

        .hole_1,
        .hole_2 {
            fill: #9a754e;
        }
    }
}

@keyframes dash {
    to {
        stroke-dashoffset: 2000;
    }
}
</style>