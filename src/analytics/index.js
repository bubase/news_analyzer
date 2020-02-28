import "../styles/analytics.css";

import { Analytics } from "../blocks/analytics/Analytics.js";
import { DataStorage } from "../js/modules/DataStorage.js";
import { DAYS_WEEK_NOW } from "../js/constants/dates.js";

//Создание экземпляров классов
const dataStorage = new DataStorage;
const analytics = new Analytics(dataStorage.getNewsArray(), localStorage['NewsAnalyzer reqPhrase'], localStorage['NewsAnalyzer newsTotalResults']);

//Рендер статистики и заголовков при загрузке страницы
window.onload = () => {
  analytics.renderStatTitles();
  analytics.renderStatDates(DAYS_WEEK_NOW());
  analytics.renderStatValues();
}

