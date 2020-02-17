import "../styles/about.css";

import { GithubApi } from "../js/modules/commits/GithubApi.js";
import { CommitCardList } from "../js/components/commits/CommitCardList.js";

//Создание экземпляров классов
const githubApi = new GithubApi;
const commitCardList = new CommitCardList(githubApi);

//Загрузка и отрисовка коммитов
commitCardList.render();
