import { statTitleResult, statSubtitleNewsResult, statSubtitleResult, chartLineDates, chartCaptionMonth, chartLineValues } from "../../js/constants/main-consts.js";
import { searchMatches } from "../../js/utils/analytics/search-match.js";
import { MONTH_NOW, MONTHS, DAYS_WEEK_NOW } from "../../js/constants/dates.js";

//Класс отвечающий за работу заголовков аналитики и графиков
export class Analytics {
  constructor (storageNewsObject, storageReqPhrase, storageTotalNews) {
    this._storageNewsObject = storageNewsObject;
    this._storageReqPhrase = storageReqPhrase;
    this._storageTotalNews = storageTotalNews;
    this._searchMatchesObj = searchMatches(this._storageNewsObject, this._storageReqPhrase);
  }

//Отрисовка значений заголовков
  renderStatTitles() {
    statTitleResult.textContent = `«${this._storageReqPhrase}»`;
    statSubtitleNewsResult.textContent = this._storageTotalNews;
    statSubtitleResult.textContent = this._searchMatchesObj['total'];
  }

//Отрисовка столбца с датами текущей прошедшей недели
  renderStatDates(datesArray) {
    chartCaptionMonth.textContent = `(${MONTHS[MONTH_NOW]})`;
    datesArray.forEach((elem, idx) => {
      if (elem.slice(0,2) === '1,' && idx !== 0) { //Вставка названия месяца, если неделя охватывает 2 месяца
        chartLineDates[idx].parentNode.insertAdjacentHTML('beforebegin', `<p class="chart__caption-date">Дата<span>(${MONTHS[MONTH_NOW]})</span></p>`);
        chartCaptionMonth.textContent = `(${MONTHS[MONTH_NOW-1]})`;
      }
      chartLineDates[idx].textContent = elem;
    });
  }

//Отрисовка графиков
  renderStatValues() {
    chartLineValues.forEach((item, idx) => {
      if (Object.keys(this._searchMatchesObj).includes(DAYS_WEEK_NOW()[idx].slice(0,2))) {
        item.style.width = `calc(${this._searchMatchesObj[DAYS_WEEK_NOW()[idx].slice(0,2)]/100} * (100% - 104px) - 6px)`;
        item.textContent = this._searchMatchesObj[DAYS_WEEK_NOW()[idx].slice(0,2)];
      }
    });
  }
}
