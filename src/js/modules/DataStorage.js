//Класс работы с localStorage
class DataStorage {
  constructor () {
  }
//Добавление массива данных новостей в localStorage
  setNewsItems(dataObject) {
    const jsonStr = JSON.stringify(dataObject.articles);
    localStorage.setItem(`NewsAnalyzer news`, `${jsonStr}`);
    localStorage.setItem(`NewsAnalyzer newsTotalResults`, `${dataObject.totalResults}`);
  }

//Добавление поискового запроса в localStorage
  setReqPhrase(phrase) {
    localStorage.setItem(`NewsAnalyzer reqPhrase`, `${phrase}`);
  }
//Метод возвращающий объект данных новостей
  getNewsDataObj() {
    return JSON.parse(localStorage['NewsAnalyzer news']);
  }
//Метод возвращающий массив данных заданных карточек
  getNewsItems(firstCard, lastCard) {
    const arrCards = [];
    const dataObject = this.getNewsDataObj();
    for (let i = firstCard; i < lastCard; i++) {
      if (dataObject[i]) {
        arrCards.push(dataObject[i]);
      }
      else {continue}
    }
    return arrCards;
  }
}

export { DataStorage };
