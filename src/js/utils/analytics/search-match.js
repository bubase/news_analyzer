// Функция возвращающая объект с кол-вом упоминаний запроса в описании и заголовке новостей
function searchMatches(dataObject, keyPhrase) {

  let obj = {};
  obj['total'] = 0; //Всего упоминаний за все дни
  const regex = new RegExp(keyPhrase, 'gi');

  for (let i=0; i<dataObject.length; i++) {
    const objItem = dataObject[i];

    if (objItem.title !== null) {
      const titleMatches = objItem.title.match(regex);
      if (titleMatches !== null) {
        let day = new Date(objItem.publishedAt).getDate();
        if (typeof(obj[day])==='number') {
          obj[day] += titleMatches.length;
          obj['total'] += titleMatches.length;
        }
        else {
          obj[day] = 0;
        }
      }
    }

    if (objItem.description !== null) {
      const descriptionMatches = objItem.description.match(regex);
      if (descriptionMatches !== null) {
        let day = new Date(objItem.publishedAt).getDate();
        if (typeof(obj[day])==='number') {
          obj[day] += descriptionMatches.length;
          obj['total'] += descriptionMatches.length;
        }
        else {
          obj[day] = 0;
        }
      }
    }
  }
  return obj;
}

export { searchMatches };
