//Базовый класс для карточек
export class BaseComponent {
  constructor() {
  }

//Фильтр для разметки для предотвращения XSS
  _sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  };
}
