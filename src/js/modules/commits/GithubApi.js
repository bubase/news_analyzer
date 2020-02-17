//Класс работы с GithubAPI
class GithubApi {
  constructor() {
  }
//Возвращает промис и обрабатывает ответ от сервера
  getCommits() {
    const commitsUrl = `https://api.github.com/repos/bubase/news_analyzer/commits`;
    const commitsReq = new Request(commitsUrl);
    return fetch(commitsReq)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(`NewsAPI response error: ${err}`)
      });
  }
}

export { GithubApi }
