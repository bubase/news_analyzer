import { DATE_REQ_FROM, DATE_REQ_TO } from "../../js/constants/dates.js";
import { NEWS_API_KEY } from "../../js/constants/api-keys.js";

//Класс отвечающий за работу формы поиска новостей
export class SearchInput {
  constructor (form, searchInput, submitFunc, newsCardList, newsApi, dataStorage, searchFieldset, searchFieldError, searchButton) {
    this._newsApi = newsApi;
    this._dataStorage = dataStorage;
    this._newsCardList = newsCardList;

    this._form = form;
    this._searchFieldset = searchFieldset;
    this._searchInput = searchInput;
    this._searchFieldError = searchFieldError;
    this._searchButton = searchButton;

//Колбэк для слушателя сабмита
    this._submitHandler = event => {
      event.preventDefault();
      submitFunc(this._searchInput.value, DATE_REQ_FROM, DATE_REQ_TO, NEWS_API_KEY, this._newsApi, this._dataStorage, this._newsCardList, this);
    }

//Основной колбэк, валидирующий инпут
    this._inputHandler = event => {
      if (!(this._validate(event.target))) {
        this._displayError('show');
        this._searchButton.setAttribute('disabled', true);
      }
      else {
        this._displayError('hide');
        this._searchButton.removeAttribute('disabled', true);
      }
    }

//Колбэк при потери фокуса инпута
    this._inputBlurHandler = () => {
      this._displayError('hide'); //Скрыть текст ошибки
    }

//Колбэк при фокусе на инпуте
    this._inputFocusHandler = event => {
      if (event.target.value === '') { //Скрыть текст если инпут пустой
        this._displayError('hide');
      }
      else {
        this._inputHandler(event);
      }
    }

//Добавляем слушатели событий на форму и инпут
    this._searchInput.addEventListener('input', this._inputHandler);
    this._searchInput.addEventListener('blur', this._inputBlurHandler)
    this._searchInput.addEventListener('focus', this._inputFocusHandler);
    this._form.addEventListener('submit', this._submitHandler);
  }

//Заблокировать форму
  lockForm() {
    this._searchFieldset.setAttribute('disabled', 'disabled');
  }

//Разблокировать форму
  unlockForm() {
    this._searchFieldset.removeAttribute('disabled');
  }

//Проверяет на валидацию и возвращает булево значение
  _validate(input) {
    return (/\S+/).test(input.value); //Пробелы также валидируются
  }

//Показать текст с ошибкой
  _displayError(arg) {
    switch (arg) {
      case 'show': {
        this._searchFieldError.classList.add('search__field-error_shown');
        break;
      }
      case 'hide': {
        this._searchFieldError.classList.remove('search__field-error_shown');
        break;
      }
    }
  }
}
