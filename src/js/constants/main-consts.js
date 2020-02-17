//Элементы интерфейса сайта
const searchForm = document.forms.search; //Форма поиска
const resultsSection = document.querySelector('.results'); //Секция "Результаты поиска"
const cardsCont = document.querySelector('.results__container'); //Контейнер с результатами
const resultsMoreButton = document.querySelector('.results__more'); //Кнопка "Показать еще"
const loadingCont = document.querySelector('.results__loading'); //Прелоадер
const notFoundCont = document.querySelector('.results__not-found'); //Элемент "Ничего не найдено"
const resultsError = document.querySelector('.results__error'); //Элемент ошибки запроса
const resultsContent = document.querySelector('.results__content'); //Элемент с заголовком и ссылкой на аналитику

const statTitleResult = document.querySelector('.analytics__title-result'); //Текст запроса
const statSubtitleNewsResult = document.querySelector('.analytics__subtitle-news-result'); //Новостей за неделю
const statSubtitleResult = document.querySelector('.analytics__subtitle-result'); //Упоминаний в заголовке

const chartLineDates = document.querySelectorAll('.chart__line-date'); //Даты и дни недели в таблице статистики
const chartLineValues = document.querySelectorAll('.chart__line-value'); //Значения в таблице
const chartCaptionMonth = document.querySelector('.chart__caption-date span'); //Заголовок с месяцем

const swiperWrapper = document.querySelector('.swiper-wrapper'); //Контейнер карточек коммитов

export { resultsSection, cardsCont, resultsMoreButton, searchForm, loadingCont, notFoundCont, resultsContent, resultsError, statTitleResult, statSubtitleNewsResult, statSubtitleResult, chartLineDates, chartLineValues, chartCaptionMonth, swiperWrapper };
