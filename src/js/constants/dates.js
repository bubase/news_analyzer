import { dateRequest } from "../utils/date-func.js";

//Функция возвращающая момент времени day дней назад
const DATE_FROM = day => new Date(Date.now() - day * 24 /* часов */ * 60 /* минут */ * 60 /* секунд */ * 1000 /* миллисекунд */);

//Функция возвращающая массив дней текущей недели
const DAYS_WEEK_NOW = function() {
  const arr = [];
  for (let i=0; i<7; i++) { //7 дней
    arr.push(`${DATE_FROM(i).getDate()}, ${DAYS_OF_WEEK[DATE_FROM(i+1).getDay()]}`);
  }
  return arr.reverse();
}

const DATE_TO = new Date(); //Текущая дата
const DATE_FROM_7 = DATE_FROM(7); //Неделю назад
const DATE_REQ_TO = dateRequest(DATE_TO);
const DATE_REQ_FROM = dateRequest(DATE_FROM_7);
const MONTH_NOW = DATE_TO.getMonth(); //Текущий месяц
const DAYS_OF_WEEK = ['пн','вт','ср','чт','пт','сб','вс'];
const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']


export { DATE_FROM, DATE_REQ_TO, DATE_REQ_FROM, DAYS_OF_WEEK, DAYS_WEEK_NOW, MONTHS, MONTH_NOW };