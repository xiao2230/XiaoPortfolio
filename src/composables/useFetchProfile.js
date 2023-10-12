import { ref } from "vue";
import { apiGetProfile } from "@/api/github.js";
import useGitHubStore from "@/composables/useGitHubStore.js";
import avatar404 from "@/assets/img/avatar404.png";

export default function useFetchProfile() {
    const isLoaded = ref(false);
    const { setProfileAvatar } = useGitHubStore;

    const fetchProfile = async (profileName) => {
        isLoaded.value = false;
        try {
            const res = await apiGetProfile(profileName);
            setProfileAvatar(res.data.avatar_url);
            isLoaded.value = true;
        } catch (error) {
            setProfileAvatar(avatar404);
            isLoaded.value = true;
        }
    };

    return { isLoaded, fetchProfile };
};