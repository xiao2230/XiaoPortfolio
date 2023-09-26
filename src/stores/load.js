import { ref, onMounted } from "vue";
import { defineStore } from "pinia";

export const useLoadStore = defineStore("load", () => {
    const load = ref("loading");
    const imgsUrl = ["/src/assets/img/bg.png", "/src/assets/img/land_1.png", "/src/assets/img/land_2.png", "/src/assets/img/planet_1.png", "/src/assets/img/planet_2.png", "/src/assets/img/planet_3.png"];
    const chkLoad = imgsUrl => {
        let i = 0;
        imgsUrl.forEach(imgUrl => {
            console.log(imgUrl);
            const img = new Image();
            img.src = imgUrl;
            img.onload = () => {
                console.log("load：", imgUrl);
                i += 1;
                if (i === imgsUrl.length) {
                    load.value = "loaded";
                    console.log("loaded");
                }
            };
        })
    };
    onMounted(() => {
        console.log("onMounted");
        chkLoad(imgsUrl);
    });

    return { load };
})