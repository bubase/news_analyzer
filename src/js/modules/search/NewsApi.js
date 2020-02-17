//Класс взаимодействия с NewsAPI
class NewsApi {
  constructor() {
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
        return res.json();
      })
      .then(data => {
        console.log(data);

        return data;
      })
      .catch(err => {
        console.log(`NewsAPI response error: ${err}`)
      });
  }
}

export { NewsApi };
