import { DATE_REQ_FROM, DATE_REQ_TO } from "../../js/constants/dates.js";
import { NEWS_API_KEY } from "../../js/constants/api-keys.js";

//Класс отвечающий за работу формы поиска новостей
export class Search {
  constructor ({form, searchInput, submitFunc, results, newsApi, dataStorage, searchFieldset, searchFieldError, searchButton}) {
    this._newsApi = newsApi;
    this._dataStorage = dataStorage;
    this._results = results;

    this._form = form;
    this._searchFieldset = searchFieldset;
    this._searchInput = searchInput;
    this._searchFieldError = searchFieldError;
    this._searchButton = searchButton;
    this._submitFunc = submitFunc;

//Добавляем слушатели событий на форму и инпут
    this._searchInput.addEventListener('input', this._inputHandler.bind(this));
    this._searchInput.addEventListener('blur', this._inputBlurHandler.bind(this));
    this._searchInput.addEventListener('focus', this._inputFocusHandler.bind(this));
    this._form.addEventListener('submit', this._submitHandler.bind(this));
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

  //Колбэк для слушателя сабмита
  _submitHandler(event) {
    event.preventDefault();
    this._submitFunc({
      keyPhrase: this._searchInput.value,
      dateFrom: DATE_REQ_FROM,
      dateTo: DATE_REQ_TO,
      apiKey: NEWS_API_KEY,
      newsApi: this._newsApi,
      dataStorage: this._dataStorage,
      results: this._results,
      search: this
    });
  }

//Основной колбэк, валидирующий инпут
  _inputHandler(event) {
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
  _inputBlurHandler() {
    this._displayError('hide'); //Скрыть текст ошибки
  }

//Колбэк при фокусе на инпуте
  _inputFocusHandler(event) {
    if (event.target.value === '') { //Скрыть текст если инпут пустой
      this._displayError('hide');
    }
    else {
      this._inputHandler(event);
    }
  }
}
