import { reactive } from "vue";

const github = reactive({
    profileAvatar: "",
    profileName: "MikeCheng1208",
    repositories: []
});

const setRepositories = (repos) => {
    github.repositories = [...github.repositories, ...repos];
};

export default { github, setRepositories };