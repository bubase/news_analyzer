//Класс работы с localStorage
export class DataStorage {
  constructor () {
  }
//Добавление массива данных новостей в localStorage
  setNewsItems(newsArray) {
    const jsonStrNews = JSON.stringify(newsArray.articles);
    localStorage.setItem(`NewsAnalyzer news`, `${jsonStrNews}`);
    localStorage.setItem(`NewsAnalyzer newsTotalResults`, `${newsArray.totalResults}`);
  }

//Добавление поискового запроса в localStorage
  setReqPhrase(phrase) {
    localStorage.setItem(`NewsAnalyzer reqPhrase`, `${phrase}`);
  }

//Метод возвращающий массив объектов данных новостей из localStorage
  getNewsArray() {
    return JSON.parse(localStorage['NewsAnalyzer news']);
  }

//Метод возвращающий массив данных заданных карточек из localStorage
  getNewsItems(firstCard, lastCard) {
    const newsCards = [];
    const newsArray = this.getNewsArray();
    for (let i = firstCard; i < lastCard; i++) {
      if (newsArray[i]) {
        newsCards.push(newsArray[i]);
      }
      else {continue}
    }
    return newsCards;
  }
}
