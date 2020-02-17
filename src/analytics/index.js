import "../styles/analytics.css";

import { Statistics } from "../js/components/analytics/Statistics.js";
import { DataStorage } from "../js/modules/DataStorage.js";
import { DAYS_WEEK_NOW } from "../js/constants/dates.js";

//Создание экземпляров классов
const dataStorage = new DataStorage;
const statistics = new Statistics(dataStorage.getNewsDataObj(), localStorage['NewsAnalyzer reqPhrase'], localStorage['NewsAnalyzer newsTotalResults']);

//Рендер статистики и заголовков при загрузке страницы
statistics.renderStatTitles();
statistics.renderStatDates(DAYS_WEEK_NOW());
statistics.renderStatValues();
