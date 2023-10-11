import { ref, onMounted, onUnmounted } from "vue";

export default function useScrollBottom() {
    const isBottom = ref(false);

    const chkScrollBottom = () => {
        const { clientHeight, scrollTop, offsetHeight } = document.documentElement;
        Math.ceil(clientHeight + scrollTop) === offsetHeight ? isBottom.value = true : isBottom.value = false;
    };

    onMounted(() => window.addEventListener("scroll", chkScrollBottom));
    onUnmounted(() => window.removeEventListener("scroll", chkScrollBottom));

    return { isBottom };
};