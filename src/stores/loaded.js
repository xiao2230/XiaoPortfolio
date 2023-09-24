import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoadedStore = defineStore("loaded", () => {
    const loaded = ref(false);
    const changeLoaded = () => loaded.value = !loaded.value;
    return { loaded, changeLoaded };
})