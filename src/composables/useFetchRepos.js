import { ref } from "vue";
import { apiGetRepositories } from "@/api/github.js";
import useGitHubStore from "@/composables/useGitHubStore.js";

export default function useFetchRepos() {
    const isLoaded = ref(false);
    const pageIdx = ref(0);
    const { setRepositories } = useGitHubStore;
    const newRepos = ref([]);

    const init = async () => {
        pageIdx.value += 1;

        const data = {
            profileName: "MikeCheng1208",
            page: pageIdx.value
        }

        try {
            const res = await apiGetRepositories(data);
            setRepositories(res.data);
            if (res.data.length === 0) isLoaded.value = true;
            newRepos.value = res.data;
        } catch (error) {
            console.log("取得Repos錯誤", error);
        }
    };

    const next = () => {
        if (newRepos.value.length === 0) return;
        init();
    };

    return { isLoaded, init, next };
};