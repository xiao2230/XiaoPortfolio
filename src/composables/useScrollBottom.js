import { ref, onMounted, onUnmounted } from "vue";
import { debounce } from "@/lib/Debounce.js";

export default function useScrollBottom() {
    const isBottom = ref(false);
    const isScroll = ref(false);
    const triggerEarly = 10;
    const msg = ref("");

    const chkScrollBottom = debounce(() => {
        isScroll.value = !isScroll.value
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        clientHeight + scrollTop >= scrollHeight - triggerEarly ? isBottom.value = true : isBottom.value = false;
        console.log("documentElement：", document.documentElement.scrollHeight);
        console.log("body：", document.body.scrollHeight);
        msg.value = "github：" + document.querySelector(".github").clientHeight + "scrollHeight：" + document.documentElement.scrollHeight + "@@@" + (clientHeight + scrollTop);
    });

    onMounted(() => window.addEventListener("scroll", chkScrollBottom));
    onUnmounted(() => window.removeEventListener("scroll", chkScrollBottom));

    return { isBottom, isScroll, chkScrollBottom, msg };
};