//Функция перевода даты в формат для отправки запроса на NewsAPI
function dateRequest(date) {
  return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
};
//Функция перевода в формат даты для карточки
function dateTranslate(date) {
  const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  return date.slice(0, 10).replace(/(\d{4})-(\d{1,2})-0?([1-9]{1,2}0?)/, function(p1,p2,p3,p4){
    return `${p4} ${monthArr[parseFloat(p3)-1]}, ${p2}`;
  })
}

export { dateRequest, dateTranslate };
