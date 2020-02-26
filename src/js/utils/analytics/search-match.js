// Функция возвращающая объект с кол-вом упоминаний запроса в описании и заголовке новостей
function searchMatches(dataArrayOfObj, keyPhrase) {
  const obj = {};
  obj['total'] = 0; //Всего упоминаний за все дни
  const regex = new RegExp(keyPhrase, 'gi');

  dataArrayOfObj.forEach((elem) => {
    if (elem.title !== null) {
      const titleMatches = elem.title.match(regex);
      if (titleMatches !== null) {
        let day = new Date(elem.publishedAt).getDate();
        if (typeof(obj[day])==='number') {
          obj[day] += titleMatches.length;
          obj['total'] += titleMatches.length;
        }
        else {
          obj[day] = 0;
        }
      }
    }

    if (elem.description !== null) {
      const descriptionMatches = elem.description.match(regex);
      if (descriptionMatches !== null) {
        let day = new Date(elem.publishedAt).getDate();
        if (typeof(obj[day])==='number') {
          obj[day] += descriptionMatches.length;
          obj['total'] += descriptionMatches.length;
        }
        else {
          obj[day] = 0;
        }
      }
    }
  });
  return obj;
}

export { searchMatches };
