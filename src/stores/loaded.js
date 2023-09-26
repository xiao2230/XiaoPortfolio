import { ref, onMounted } from "vue";
import { defineStore } from "pinia";

export const useLoadedStore = defineStore("loaded", () => {
    const loaded = ref("loading");
    const imgsUrl = ["/src/assets/img/bg.png", "/src/assets/img/land_1.png", "/src/assets/img/land_2.png", "/src/assets/img/planet_1.png", "/src/assets/img/planet_2.png", "/src/assets/img/planet_3.png"];
    const chkLoaded = imgsUrl => {
        let i = 0;
        imgsUrl.forEach(imgUrl => {
            const img = new Image();
            img.src = imgUrl;
            img.addEventListener("load", () => {
                i += 1;
                if (i === imgsUrl.length) {
                    loaded.value = "loaded";
                }
            });
        })
    };
    onMounted(() => {
        chkLoaded(imgsUrl);
    });

    return { loaded };
})