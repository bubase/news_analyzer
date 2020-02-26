import { dateTranslate } from "../../js/utils/date-func.js";
import { swiperWrapper } from "../../js/constants/main-consts.js";
import { mySwiper } from "../../js/vendor/swiper.js";

//Класс секции коммитов
export class CommitCardList {
  constructor(commitCard, githubApi) {
    this._commitCard = commitCard;
    this._githubApi = githubApi;
  }
//Отрисовка коммитов
  render() {
    this._githubApi.getCommits()
      .then(commitsArray => {
        commitsArray.forEach(elem => {
          const card = this._commitCard.createCard(elem.html_url, dateTranslate(elem.commit.committer.date), elem.author.avatar_url, elem.commit.committer.name, elem.commit.committer.email, elem.commit.message);
          swiperWrapper.insertAdjacentHTML('afterbegin', card);
        })
        mySwiper.update();
      })
      .catch(err => {
        console.log(`GithubAPI res error: ${err}`)
      });
  }
}
