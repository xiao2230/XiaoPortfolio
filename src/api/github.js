import axios from 'axios';

const githubRequest = axios.create({
    baseURL: "https://api.github.com/users/"
});

export const apiGetProfile = profileName =>
    githubRequest.get(`/${profileName}`);

export const apiGetRepositories = ({ profileName, page }) =>
    githubRequest.get(`/${profileName}/repos?page=${page}&per_page=10&sort=pushed`);