import { ref } from "vue";
import { apiGetRepositories } from "@/api/github.js";
import useGitHubStore from "@/composables/useGitHubStore.js";

export default function useFetchRepos() {
    const isLoaded = ref(false);
    const isLoading = ref(true);
    const isNotFound = ref(false);
    const pageIdx = ref(0);
    const { github, setRepositories, clearRepositories } = useGitHubStore;

    const fetchRepos = async () => {
        pageIdx.value += 1;
        isLoading.value = true;

        const data = {
            profileName: github.profileName,
            page: pageIdx.value
        }

        try {
            const res = await apiGetRepositories(data);
            setRepositories(res.data);
            if (res.data.length === 0) isLoaded.value = true;
            isLoading.value = false;
        } catch (error) {
            isLoading.value = false;
            isNotFound.value = true;
        }
    };

    const showNextRepos = () => {
        if (isLoaded.value) return;
        fetchRepos();
    };

    const resetData = () => {
        isLoaded.value = false;
        isLoading.value = true;
        isNotFound.value = false;
        pageIdx.value = 0;
        clearRepositories();
    };

    return { isLoaded, isLoading, isNotFound, fetchRepos, showNextRepos, resetData };
};