import { dateTranslate } from "../../js/utils/date-func.js";

//Класс отвечающий за работу контейнера карточек
export class Results {
  constructor ({resultsSection, cardsContainer, updateButton, loadingCont, notFoundCont, resultsError, resultsContent, result, dataStorage}) {
    this._result = result;
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
    this._dataStorage.getNewsItems(this.firstCount, this.lastCount).forEach(elem => {
      const newCard = this._result.createCard({
        imageUrl: elem.urlToImage,
        date: dateTranslate(elem.publishedAt),
        title: elem.title,
        text: elem.description,
        url: elem.url,
        sourceName: elem.source.name
      });
      this._cardsContainer.insertAdjacentHTML('beforeend', newCard);
      this.lastCount++;
      this.firstCount++;
      this.displayElement('show', this._updateButton);
      if (this.firstCount === this._dataStorage.getNewsArray().length) {
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
