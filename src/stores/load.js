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

export const useLoadStore = defineStore("load", () => {
    const load = ref("loading");
    const imgsUrl = [bg, planet_1, planet_2, planet_3, land_1, land_2, intro, introBg];
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