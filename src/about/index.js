import "../styles/about.css";

import { GithubApi } from "../js/modules/GithubApi.js";
import { CommitCard } from "../blocks/commits/__slide/CommitCard.js";
import { CommitCardList } from "../blocks/commits/CommitCardList.js";
import { GITHUB_USER, GITHUB_REPO } from "../js/constants/github-info.js";



//Создание экземпляров классов
const githubApi = new GithubApi(GITHUB_USER, GITHUB_REPO);
const commitCard = new CommitCard;
const commitCardList = new CommitCardList(commitCard, githubApi);

//Загрузка и отрисовка коммитов
window.onload = () => {
  commitCardList.render();
}
