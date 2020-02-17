import { NewsCard } from "./NewsCard.js";
import { DataStorage } from "../../modules/DataStorage.js";
import { dateTranslate } from "../../utils/date-func.js";

//Класс отвечающий за работу контейнера карточек
class NewsCardList {
  constructor (resultsSection, cardsContainer, updateButton, loadingCont, notFoundCont, resultsError, resultsContent) {

    this.resultsSection = resultsSection;
    this.cardsContainer = cardsContainer;
    this.updateButton = updateButton;
    this.loadingCont = loadingCont;
    this.notFoundCont = notFoundCont;
    this.resultsError = resultsError;
    this.resultsContent = resultsContent;

    this.numForRender = 3;  //Сколько карточек отображать за рендер

    this.render = this.render.bind(this);

    this.updateButton.addEventListener('click', this.render);
  }

//Функция показать/скрыть элемент
  displayElement(arg, element) {
    switch (arg) {
      case 'show': {
        element.classList.add(`${element.classList[0]}_is-displayed`);
        break;
      }
      case 'hide': {
        element.classList.remove(`${element.classList[0]}_is-displayed`);
        break;
      }
    }
  }

//Отрисовка карточек
  render() {
    if (!this.firstCount) {
      this.firstCount = 0;
      this.lastCount = this.numForRender;
    }
    const dataStorage = new DataStorage;
    dataStorage.getNewsItems(this.firstCount, this.lastCount).forEach(e => {
      const newCard = new NewsCard(e.urlToImage, dateTranslate(e.publishedAt), e.title, e.description, e.url, e.source.name);
      this.cardsContainer.insertAdjacentHTML('beforeend', newCard.cardLayout);
      this.lastCount++;
      this.firstCount++;
      this.displayElement('show', this.updateButton);
      if (this.firstCount === dataStorage.getNewsDataObj().length) {
        this.displayElement('hide', this.updateButton);
      }
    });
  }

//Удаление карточек и счетчика
  clear() {
    while (this.cardsContainer.firstChild) {
      this.cardsContainer.firstChild.remove();
    }
    this.firstCount = 0;
  }
}

export { NewsCardList };
