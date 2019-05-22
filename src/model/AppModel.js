export default class AppModel {
  constructor(state) {
    this.baselink = 'https://www.googleapis.com/youtube/v3/';
    this.apiKey = 'AIzaSyCCEFUQHY1pPhc1C4ovldAxFpLZiaRpfWM';
    this.options = state;
    this.data = [];
    this.nextPage = '';
  }

  makeUrlSearch() {
    const { searchRequest, maxResults } = this.options;
    return `${this.baselink}search?key=${this.apiKey}&type=video&part=snippet&maxResults=${maxResults}&q=${searchRequest}&pageToken=${this.nextPage}`;
  }

  makeUrlStatistic(id) {
    return `${this.baselink}videos?key=${this.apiKey}&id=${id}&part=snippet,statistics`;
  }

  static extractData(data) {
    return data.items.map((element) => {
      const {
        id: { videoId }, snippet: {
          publishedAt, title, description, thumbnails: { high: { url } }, channelTitle,
        },
      } = element;
      return {
        title, publishedAt, videoId, channelTitle, description, url,
      };
    });
  }

  static extractStatistic(statistics) {
    return statistics.items.map((element) => {
      const { statistics: { viewCount } } = element;
      return viewCount;
    });
  }

  async getData() {
    try {
      const response = await fetch(this.makeUrlSearch());
      const news = await response.json();
      const stringApi = [];
      this.nextPage = news.nextPageToken;
      this.data = AppModel.extractData(news);
      this.data.forEach((element) => { stringApi.push(element.videoId); });
      const responseStatistics = await fetch(this.makeUrlStatistic(stringApi.join(',')));
      const statistics = await responseStatistics.json();
      const arrayOfStatistics = AppModel.extractStatistic(statistics);
      this.data.forEach((item, i) => {
        /* eslint no-param-reassign: ["error", { "props": false }] */
        item.statistics = arrayOfStatistics[i];
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error', error);
    }
    return this.data;
  }
}
