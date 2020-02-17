import { DATE_REQ_FROM, DATE_REQ_TO } from "../../constants/dates.js";
import { NEWS_API_KEY } from "../../constants/api-keys.js";

//Класс отвечающий за работу формы поиска новостей
class SearchInput {
  constructor (form, submitFunc, newsCardList, newsApi, dataStorage) {
    this.form = form;
    this.newsCardList = newsCardList;
    this.newsApi = newsApi;
    this.dataStorage = dataStorage;

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      newsCardList.displayElement('hide', newsCardList.resultsContent);
      newsCardList.displayElement('hide', newsCardList.notFoundCont);
      newsCardList.displayElement('hide', newsCardList.updateButton);
      newsCardList.displayElement('hide', newsCardList.resultsError);
      newsCardList.clear();
      newsCardList.displayElement('show', newsCardList.resultsSection);
      newsCardList.displayElement('show', newsCardList.loadingCont);
      submitFunc(form.elements.request.value, DATE_REQ_FROM, DATE_REQ_TO, NEWS_API_KEY, newsApi, dataStorage, newsCardList);
    });
  }
}

export { SearchInput };
