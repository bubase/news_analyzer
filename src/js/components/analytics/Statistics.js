import { statTitleResult, statSubtitleNewsResult, statSubtitleResult, chartLineDates, chartCaptionMonth, chartLineValues } from "../../constants/main-consts.js";
import { searchMatches } from "../../utils/analytics/search-match.js";
import { MONTH_NOW, MONTHS, DAYS_WEEK_NOW } from "../../constants/dates.js";

//Класс отвечающий за работу заголовков аналитики и графиков
class Statistics {
  constructor (storageNewsObject, storageReqPhrase, storageTotalNews) {
    this.storageNewsObject = storageNewsObject;
    this.storageReqPhrase = storageReqPhrase;
    this.storageTotalNews = storageTotalNews;
    this.searchMatchesObj = searchMatches(this.storageNewsObject, this.storageReqPhrase);
  }
//Отрисовка значений заголовков
  renderStatTitles() {
    statTitleResult.textContent = `«${this.storageReqPhrase}»`;
    statSubtitleNewsResult.textContent = this.storageTotalNews;
    statSubtitleResult.textContent = this.searchMatchesObj['total'];
  }
//Отрисовка столбца с датами текущей прошедшей недели
  renderStatDates(datesArray) {
    chartCaptionMonth.textContent = `(${MONTHS[MONTH_NOW]})`;
    datesArray.forEach((elem, idx) => {
      if (elem.slice(0,2) === '1,' && idx !== 0) { //Вставка названия месяца, если неделя охватывает 2 месяца
        chartLineDates[idx].parentNode.insertAdjacentHTML('beforebegin', `<p class="chart__caption-date">Дата<span>(${MONTHS[MONTH_NOW]})</span></p>`)
        chartCaptionMonth.textContent = `(${MONTHS[MONTH_NOW-1]})`;
      }
      chartLineDates[idx].textContent = elem;
    })
  }
//Отрисовка графиков
  renderStatValues() {
    chartLineValues.forEach((item, idx) => {
      if (Object.keys(this.searchMatchesObj).includes(DAYS_WEEK_NOW()[idx].slice(0,2))) {
        item.style.width = `calc(${this.searchMatchesObj[DAYS_WEEK_NOW()[idx].slice(0,2)]/100} * (100% - 104px) - 6px)`;
        item.textContent = this.searchMatchesObj[DAYS_WEEK_NOW()[idx].slice(0,2)];
      }
    })
  }
}

export { Statistics };
