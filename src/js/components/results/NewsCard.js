//Класс карточки новостей
class NewsCard {
  constructor (imageUrl, date, title, text, url, sourceName) {
    this.cardLayout = this.createCard(imageUrl, date, title, text, url, sourceName);
  }

//Создание разметки карточки
  createCard (imageUrl, date, title, text, url, sourceName) {
    return `
    <a href="${url}" class="result" target="_blank">
      <img src=${imageUrl} alt="Изображение для новости" class="result__image">
        <div class="result__content">
          <p class="result__date">${date}</p>
          <h3 class="result__title">${title}</h3>
          <p class="result__text">${text}</p>
          <p class="result__source">${sourceName}</p>
        </div>
    </a>
    `
  }
}

export { NewsCard };
