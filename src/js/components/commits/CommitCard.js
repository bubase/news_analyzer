//Класс карточки коммита
class CommitCard {
  constructor (url, date, imageUrl, committerName, email, text) {
    this.cardLayout = this.createCard(url, date, imageUrl, committerName, email, text);
  }

//Создание разметки карточки
  createCard (url, date, imageUrl, committerName, email, text) {
    return `
    <a href="${url}" class="swiper-slide commits__slide">
      <p class="commits__date">${date}</p>
      <div class="commits__info">
        <img src="${imageUrl}" alt="Фотография пользователя" class="commits__user-photo">
        <h3 class="commits__user">${committerName}</h3>
        <p class="commits__user-email">${email}</p>
      </div>
      <p class="commits__comment">${text}</p>
    </a>
    `
  }
}

export { CommitCard };
