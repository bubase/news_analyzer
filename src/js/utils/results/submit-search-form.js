// Колбэк-функция, исполняемая при сабмите формы
function submitSearchForm(keyPhrase, dateFrom, dateTo, apiKey, newsApi, dataStorage, newsCardList) {
  newsApi.getNews(keyPhrase, dateFrom, dateTo, apiKey)
    .then(res => {
      dataStorage.setNewsItems(res);
      dataStorage.setReqPhrase(keyPhrase);
      if (res.totalResults === 0) {
        newsCardList.displayElement('hide', newsCardList.loadingCont);
        newsCardList.displayElement('show', newsCardList.notFoundCont);
      }
      else {
        newsCardList.displayElement('hide', newsCardList.loadingCont);
        newsCardList.displayElement('show', newsCardList.resultsContent);
        newsCardList.render();
      }
    })
    .catch((err) => {
      console.log(`Catched error: ${err}`);
      newsCardList.displayElement('hide', newsCardList.loadingCont);
      newsCardList.displayElement('show', newsCardList.resultsError);
    })
}

export { submitSearchForm };
