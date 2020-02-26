import "./styles/index.css";

import { DataStorage } from "./js/modules/DataStorage.js";
import { NewsApi } from "./js/modules/NewsApi.js";
import { SearchInput } from "./blocks/search/SearchInput.js"
import { submitSearchForm } from "./js/utils/results/submit-search-form.js";
import { resultsSection, cardsCont, resultsMoreButton, searchForm, searchBar, loadingCont, notFoundCont, resultsContent, resultsError, searchFieldset, searchFieldError, searchButton } from "./js/constants/main-consts.js";
import { NewsCard } from "./blocks/results/result/NewsCard.js";
import { NewsCardList } from "./blocks/results/NewsCardList.js";

// Создание экземпляров классов
const newsApi = new NewsApi;
const dataStorage = new DataStorage;
const newsCard = new NewsCard;
const newsCardList = new NewsCardList(resultsSection, cardsCont, resultsMoreButton, loadingCont, notFoundCont, resultsError, resultsContent, newsCard, dataStorage);
const searchInput = new SearchInput(searchForm, searchBar, submitSearchForm, newsCardList, newsApi, dataStorage, searchFieldset, searchFieldError, searchButton);

//Отрисовка результатов из localStorage при загрузке страницы
window.onload = () => {
  if (localStorage['NewsAnalyzer newsTotalResults'] && localStorage['NewsAnalyzer newsTotalResults'] !== '0') {
    searchBar.value = localStorage['NewsAnalyzer reqPhrase'];
    newsCardList.render()
    newsCardList.displayElement('show', resultsSection)
    newsCardList.displayElement('show', resultsContent)
  }
}

