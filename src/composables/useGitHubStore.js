import { reactive } from "vue";

const github = reactive({
    profileAvatar: "",
    profileName: "MikeCheng1208",
    repositories: []
});

const setProfile = ({ profileAvatar, profileName }) => {
    github.profileAvatar = profileAvatar;
    github.profileName = profileName;
};

const setRepositories = (repos) => github.repositories = [...github.repositories, ...repos];

const clearRepositories = () => github.repositories = [];

export default { github, setProfile, setRepositories, clearRepositories };