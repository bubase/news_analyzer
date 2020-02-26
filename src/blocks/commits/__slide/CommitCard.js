import { BaseComponent } from "../../../js/components/BaseComponent.js";

//Класс карточки коммита
export class CommitCard extends BaseComponent {
  constructor () {
    super();
  }

//Создание разметки карточки
  createCard (url, date, imageUrl, committerName, email, text) {
    return `
    <a href="${this._sanitizeHTML(url)}" class="swiper-slide commits__slide">
      <p class="commits__date">${this._sanitizeHTML(date)}</p>
      <div class="commits__info">
        <img src="${this._sanitizeHTML(imageUrl)}" alt="Фотография пользователя" class="commits__user-photo">
        <h3 class="commits__user">${this._sanitizeHTML(committerName)}</h3>
        <p class="commits__user-email">${this._sanitizeHTML(email)}</p>
      </div>
      <p class="commits__comment">${this._sanitizeHTML(text)}</p>
    </a>
    `
  }
}
