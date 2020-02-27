import { dateTranslate } from "../../js/utils/date-func.js";
import { swiperWrapper } from "../../js/constants/main-consts.js";
import { mySwiper } from "../../js/vendor/swiper.js";

//Класс секции коммитов
export class Commits {
  constructor(commitCard, githubApi) {
    this._commitCard = commitCard;
    this._githubApi = githubApi;
  }
//Отрисовка коммитов
  render() {
    this._githubApi.getCommits()
      .then(commitsArray => {
        commitsArray.forEach(elem => {
          const commitCard = this._commitCard.createCard({
            url: elem.html_url,
            date: dateTranslate(elem.commit.committer.date),
            imageUrl: elem.author.avatar_url,
            committerName: elem.commit.committer.name,
            email: elem.commit.committer.email,
            text: elem.commit.message
          });
          swiperWrapper.insertAdjacentHTML('afterbegin', commitCard);
        })
        mySwiper.update();
      })
      .catch(err => {
        console.log(`GithubAPI res error: ${err}`);
      });
  }
}
