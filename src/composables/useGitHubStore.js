import { reactive } from "vue";

const github = reactive({
    profileAvatar: "",
    profileName: "MikeCheng1208",
    repositories: []
});

const setProfileAvatar = (profileAvatar) => github.profileAvatar = profileAvatar;

const setProfileName = (profileName) => github.profileName = profileName;

const setRepositories = (repos) => github.repositories = [...github.repositories, ...repos];

const clearProfileAvatar = () => github.profileAvatar = "";

const clearRepositories = () => github.repositories = [];

export default { github, setProfileAvatar, setProfileName, setRepositories, clearProfileAvatar, clearRepositories };