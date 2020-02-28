import "../styles/about.css";

import { GithubApi } from "../js/modules/GithubApi.js";
import { CommitCard } from "../blocks/commits/__card/CommitCard.js";
import { Commits } from "../blocks/commits/Commits.js";
import { GITHUB_USER, GITHUB_REPO } from "../js/constants/github-info.js";



//Создание экземпляров классов
const githubApi = new GithubApi(GITHUB_USER, GITHUB_REPO);
const commitCard = new CommitCard;
const commits = new Commits(commitCard, githubApi);

//Загрузка и отрисовка коммитов
window.onload = () => {
  commits.render();
}
