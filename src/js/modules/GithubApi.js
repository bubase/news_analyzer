import { ApiComponent } from "./ApiComponent.js";

//Класс работы с GithubAPI
export class GithubApi extends ApiComponent {
  constructor(user, repo) {
    super();
    this._url = `https://api.github.com/repos/${user}/${repo}/commits`
  }
//Возвращает промис и обрабатывает ответ от сервера
  getCommits() {
    const commitsReq = new Request(this._url);
    return fetch(commitsReq)
      .then(res => {
        return this._getResJson(res);
      })
  }
}
