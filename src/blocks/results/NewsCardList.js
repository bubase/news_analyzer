import { dateTranslate } from "../../js/utils/date-func.js";

//Класс отвечающий за работу контейнера карточек
export class NewsCardList {
  constructor (resultsSection, cardsContainer, updateButton, loadingCont, notFoundCont, resultsError, resultsContent, newsCard, dataStorage) {
    this._newsCard = newsCard;
    this._dataStorage = dataStorage;

    this._resultsSection = resultsSection;
    this._cardsContainer = cardsContainer;
    this._updateButton = updateButton;
    this._loadingCont = loadingCont;
    this._notFoundCont = notFoundCont;
    this._resultsError = resultsError;
    this._resultsContent = resultsContent;

    this._numForRender = 3;  //Сколько карточек отображать за рендер

    this.render = this.render.bind(this);

    this._updateButton.addEventListener('click', this.render);
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
      this.lastCount = this._numForRender;
    }
    this._dataStorage.getNewsItems(this.firstCount, this.lastCount).forEach(e => {
      const newCard = this._newsCard.createCard(e.urlToImage, dateTranslate(e.publishedAt), e.title, e.description, e.url, e.source.name);
      this._cardsContainer.insertAdjacentHTML('beforeend', newCard);
      this.lastCount++;
      this.firstCount++;
      this.displayElement('show', this._updateButton);
      if (this.firstCount === this._dataStorage.getNewsDataObj().length) {
        this.displayElement('hide', this._updateButton);
      }
    });
  }

//Удаление карточек и счетчика
  clear() {
    while (this._cardsContainer.firstChild) {
      this._cardsContainer.firstChild.remove();
    }
    this.firstCount = 0;
  }
}
