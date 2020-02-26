// Колбэк-функция, исполняемая при сабмите формы
function submitSearchForm(keyPhrase, dateFrom, dateTo, apiKey, newsApi, dataStorage, newsCardList, searchInput) {
  searchInput.lockForm();
  newsCardList.displayElement('hide', newsCardList._resultsContent);
  newsCardList.displayElement('hide', newsCardList._notFoundCont);
  newsCardList.displayElement('hide', newsCardList._updateButton);
  newsCardList.displayElement('hide', newsCardList._resultsError);
  newsCardList.clear();
  newsCardList.displayElement('show', newsCardList._resultsSection);
  newsCardList.displayElement('show', newsCardList._loadingCont);
  newsApi.getNews(keyPhrase, dateFrom, dateTo, apiKey)
    .then(res => {
      dataStorage.setNewsItems(res);
      dataStorage.setReqPhrase(keyPhrase);
      if (res.totalResults === 0) {
        newsCardList.displayElement('hide', newsCardList._loadingCont);
        newsCardList.displayElement('show', newsCardList._notFoundCont);
      }
      else {
        newsCardList.displayElement('hide', newsCardList._loadingCont);
        newsCardList.displayElement('show', newsCardList._resultsContent);
        newsCardList.render();
      }
    })
    .catch((err) => {
      console.log(`NewsAPI res error: ${err}`);
      newsCardList.displayElement('hide', newsCardList._loadingCont);
      newsCardList.displayElement('show', newsCardList._resultsError);
    })
    .finally(() => {
      searchInput.unlockForm();
    });
}

export { submitSearchForm };
