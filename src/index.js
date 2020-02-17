import "./styles/index.css";

import { DataStorage } from "./js/modules/DataStorage.js";
import { NewsApi } from "./js/modules/search/NewsApi.js";
import { NewsCardList } from "./js/components/results/NewsCardList.js";
import { SearchInput } from "./js/components/search/SearchInput.js"
import { submitSearchForm } from "./js/utils/results/submit-search-form.js";
import { resultsSection, cardsCont, resultsMoreButton, searchForm, loadingCont, notFoundCont, resultsContent, resultsError } from "./js/constants/main-consts.js";


// Создание экземпляров классов
const newsApi = new NewsApi;
const dataStorage = new DataStorage;
const newsCardList = new NewsCardList (resultsSection, cardsCont, resultsMoreButton, loadingCont, notFoundCont, resultsError, resultsContent);
const searchInput = new SearchInput(searchForm, submitSearchForm, newsCardList, newsApi, dataStorage);
