import { ApiComponent } from "./ApiComponent.js";

//Класс взаимодействия с NewsAPI
export class NewsApi extends ApiComponent{
  constructor() {
    super();
  }

//Возвращает промис и обрабатывает ответ от сервера
  getNews(reqPhrase, dateReqFrom, dateReqTo, newsApiKey) {
    const newsUrl = 'https://newsapi.org/v2/everything?' +
                    `q=${reqPhrase}&` +
                    `from=${dateReqFrom}&`+
                    `to=${dateReqTo}&` +
                    'sortBy=relevancy&' +
                    'pageSize=100&' +
                    'language=ru&' +
                    `apiKey=${newsApiKey}`;
    const newsReq = new Request(newsUrl);
    return fetch(newsReq)
      .then(res => {
        return this._getResJson(res);
      })
  }
}
