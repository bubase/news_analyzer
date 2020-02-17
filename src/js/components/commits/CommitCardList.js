import { CommitCard } from "./CommitCard";
import { dateTranslate } from "../../utils/date-func";
import { swiperWrapper } from "../../constants/main-consts";
import { mySwiper } from "../../../styles/vendor/swiper";

//Класс контейнера коммитов
class CommitCardList {
  constructor(githubApi) {
    this.githubApi = githubApi;
  }
//Отрисовка коммитов
  render() {
    this.githubApi.getCommits()
      .then((dataObj) => {
        for (let i=0; i<dataObj.length; i++) {
          let commitCard = new CommitCard(dataObj[i].html_url, dateTranslate(dataObj[i].commit.committer.date), dataObj[i].author.avatar_url, dataObj[i].commit.committer.name, dataObj[i].commit.committer.email, dataObj[i].commit.message);
          swiperWrapper.insertAdjacentHTML('afterbegin', commitCard.cardLayout);
        }
        mySwiper.update();
      })

  }
}

export { CommitCardList }
