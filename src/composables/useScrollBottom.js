import { ref, onMounted, onUnmounted } from "vue";

export default function useScrollBottom() {
    const isBottom = ref(false);

    const chkScrollBottom = () => {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        clientHeight + scrollTop === scrollHeight ? isBottom.value = true : isBottom.value = false;
    };

    onMounted(() => window.addEventListener("scroll", chkScrollBottom));
    onUnmounted(() => window.removeEventListener("scroll", chkScrollBottom));

    return { isBottom };
};