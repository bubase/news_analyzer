import "./styles/index.css";

import { DataStorage } from "./js/modules/DataStorage.js";
import { NewsApi } from "./js/modules/NewsApi.js";
import { Results } from "./blocks/results/Results.js";
import { Search } from "./blocks/search/Search.js";
import { submitSearchForm } from "./js/utils/results/submit-search-form.js";
import { resultsSection, cardsCont, resultsMoreButton, searchForm, searchBar, loadingCont, notFoundCont, resultsContent, resultsError, searchFieldset, searchFieldError, searchButton } from "./js/constants/main-consts.js";
import { Result } from "./blocks/results/result/Result.js";

// Создание экземпляров классов
const newsApi = new NewsApi;
const dataStorage = new DataStorage;
const result = new Result;
const results = new Results ({
  resultsSection: resultsSection,
  cardsContainer: cardsCont,
  updateButton: resultsMoreButton,
  loadingCont: loadingCont,
  notFoundCont: notFoundCont,
  resultsError: resultsError,
  resultsContent: resultsContent,
  result: result,
  dataStorage: dataStorage
});
const search = new Search ({
  form: searchForm,
  searchInput: searchBar,
  submitFunc: submitSearchForm,
  results: results,
  newsApi: newsApi,
  dataStorage: dataStorage,
  searchFieldset: searchFieldset,
  searchFieldError: searchFieldError,
  searchButton: searchButton
});

//Отрисовка результатов из localStorage при загрузке страницы
window.onload = () => {
  const storage = localStorage['NewsAnalyzer newsTotalResults'];
  if (storage !== '0' && storage !== undefined) {
    searchBar.value = localStorage['NewsAnalyzer reqPhrase'];
    results.render()
    results.displayElement('show', resultsSection)
    results.displayElement('show', resultsContent)
  }
}

