// Функция возвращающая объект с кол-вом упоминаний запроса в описании и заголовке новостей
function searchMatches(newsArray, keyPhrase) {
  const queryMatches = {};
  queryMatches['total'] = 0; //Всего упоминаний за все дни
  const regex = new RegExp(keyPhrase, 'gi');

  newsArray.forEach((elem) => {
    if (elem.title !== null) {
      const titleMatches = elem.title.match(regex);
      if (titleMatches !== null) {
        const newsDay = new Date(elem.publishedAt).getDate();
        if (typeof(queryMatches[newsDay])==='number') {
          queryMatches[newsDay] += titleMatches.length;
          queryMatches['total'] += titleMatches.length;
        }
        else {
          queryMatches[newsDay] = 0;
        }
      }
    }

    if (elem.description !== null) {
      const descriptionMatches = elem.description.match(regex);
      if (descriptionMatches !== null) {
        const newsDay = new Date(elem.publishedAt).getDate();
        if (typeof(queryMatches[newsDay])==='number') {
          queryMatches[newsDay] += descriptionMatches.length;
          queryMatches['total'] += descriptionMatches.length;
        }
        else {
          queryMatches[newsDay] = 0;
        }
      }
    }
  });
  return queryMatches;
}

export { searchMatches };
