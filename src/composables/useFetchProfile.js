import { ref } from "vue";
import { apiGetProfile } from "@/api/github.js";
import useGitHubStore from "@/composables/useGitHubStore.js";
import avatar404 from "@/assets/img/avatar404.png";

export default function useFetchProfile() {
    const { setProfile } = useGitHubStore;

    const fetchProfile = async (profileName) => {
        try {
            const res = await apiGetProfile(profileName);
            const data = {
                profileAvatar: res.data.avatar_url,
                profileName: res.data.login
            };
            setProfile(data);
        } catch (error) {
            const data = {
                profileAvatar: avatar404,
                profileName: profileName
            };
            setProfile(data);
        }
    };

    return { fetchProfile };
};