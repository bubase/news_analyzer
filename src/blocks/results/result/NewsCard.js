import imgPlaceholder from "../../../images/image-placeholder.png";
import { BaseComponent } from "../../../js/components/BaseComponent.js";

//Класс карточки новостей
export class NewsCard extends BaseComponent {
  constructor () {
    super();
  }

//Создание разметки карточки
  createCard (imageUrl, date, title, text, url, sourceName) {
    return `
    <a href="${this._sanitizeHTML(url)}" class="result" target="_blank">
      <img src=${this._sanitizeHTML(imageUrl)} alt="Изображение для новости" class="result__image" onerror=this.src="${this._sanitizeHTML(imgPlaceholder)}">
        <div class="result__content">
          <p class="result__date">${this._sanitizeHTML(date)}</p>
          <h3 class="result__title">${this._sanitizeHTML(title)}</h3>
          <p class="result__text">${this._sanitizeHTML(text)}</p>
          <p class="result__source">${this._sanitizeHTML(sourceName)}</p>
        </div>
    </a>
    `
  }
}
