import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import bg from "@/assets/img/bg.png";
import planet_1 from "@/assets/img/planet_1.png";
import planet_2 from "@/assets/img/planet_2.png";
import planet_3 from "@/assets/img/planet_3.png";
import land_1 from "@/assets/img/land_1.png";
import land_2 from "@/assets/img/land_2.png";
import intro from "@/assets/img/intro.png";
import introBg from "@/assets/img/introBg.png";
import HTML5 from "@/assets/img/skill/HTML5.png";
import CSS3 from "@/assets/img/skill/CSS3.png";
import JavaScript from "@/assets/img/skill/JavaScript.png";
import JQuery from "@/assets/img/skill/JQuery.png";
import Bootstrap from "@/assets/img/skill/Bootstrap.png";
import Vue from "@/assets/img/skill/Vue.png";
import D3 from "@/assets/img/skill/D3.png";
import GSAP from "@/assets/img/skill/GSAP.png";
import GitHub from "@/assets/img/skill/GitHub.png";
import Netlify from "@/assets/img/skill/Netlify.png";

export const useLoadStore = defineStore("load", () => {
    const load = ref("loading");
    const imgsUrl = [bg, planet_1, planet_2, planet_3, land_1, land_2, intro, introBg, HTML5, CSS3, JavaScript, JQuery, Bootstrap, Vue, D3, GSAP, GitHub, Netlify];
    const chkLoad = imgsUrl => {
        let i = 0;
        imgsUrl.forEach(imgUrl => {
            const img = new Image();
            img.src = imgUrl;
            img.addEventListener("load", () => {
                i += 1;
                if (i === imgsUrl.length) {
                    load.value = "loaded";
                }
            });
        })
    };
    onMounted(() => {
        chkLoad(imgsUrl);
    });

    return { load };
})