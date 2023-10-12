import { ref, onMounted, onUnmounted } from "vue";
import { debounce } from "@/lib/debounce.js";

export default function useScrollBottom() {
    const isBottom = ref(false);
    const isScroll = ref(false);
    const triggerEarly = 10;

    const chkScrollBottom = debounce(() => {
        isScroll.value = !isScroll.value
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        clientHeight + scrollTop >= scrollHeight - triggerEarly ? isBottom.value = true : isBottom.value = false;
    });

    onMounted(() => window.addEventListener("scroll", chkScrollBottom));
    onUnmounted(() => window.removeEventListener("scroll", chkScrollBottom));

    return { isBottom, isScroll, chkScrollBottom };
};