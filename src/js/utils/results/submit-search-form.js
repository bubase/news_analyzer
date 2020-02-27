// Колбэк-функция, исполняемая при сабмите формы
function submitSearchForm({keyPhrase, dateFrom, dateTo, apiKey, newsApi, dataStorage, results, search}) {
  search.lockForm();
  results.displayElement('hide', results._resultsContent);
  results.displayElement('hide', results._notFoundCont);
  results.displayElement('hide', results._updateButton);
  results.displayElement('hide', results._resultsError);
  results.clear();
  results.displayElement('show', results._resultsSection);
  results.displayElement('show', results._loadingCont);
  newsApi.getNews(keyPhrase, dateFrom, dateTo, apiKey)
    .then(res => {
      dataStorage.setNewsItems(res);
      dataStorage.setReqPhrase(keyPhrase);
      if (res.totalResults === 0) {
        results.displayElement('hide', results._loadingCont);
        results.displayElement('show', results._notFoundCont);
      }
      else {
        results.displayElement('hide', results._loadingCont);
        results.displayElement('show', results._resultsContent);
        results.render();
      }
    })
    .catch((err) => {
      console.log(`NewsAPI res error: ${err}`);
      results.displayElement('hide', results._loadingCont);
      results.displayElement('show', results._resultsError);
    })
    .finally(() => {
      search.unlockForm();
    });
}

export { submitSearchForm };
