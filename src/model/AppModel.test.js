import AppModel from './AppModel';

describe('AppModel constructor', () => {
  it('Should create new AppModel', () => {
    const state = {
      searchRequest: '',
      maxResults: 15,
    };
    const object = {
      baselink: 'https://www.googleapis.com/youtube/v3/',
      apiKey: 'AIzaSyCCEFUQHY1pPhc1C4ovldAxFpLZiaRpfWM',
      options: {
        searchRequest: '',
        maxResults: 15,
      },
      data: [],
      nextPage: '',
    };
    const result = new AppModel(state);
    expect(result).toEqual(object);
  });
});

describe('AppModel.extractData', () => {
  it('Should be a Function', () => {
    expect(AppModel.extractData).toBeInstanceOf(Function);
  });

  it('Should return data array of news items', () => {
    const object = {
      kind: 'youtube#searchListResponse',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Kv91fjVkJzAloppMicO2MAXxc7Y"',
      nextPageToken: 'CA8QAA',
      regionCode: 'BY',
      pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 15,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/LfTUAWu5pDOZPRdWbF2pD9upY7o"',
          id: {
            kind: 'youtube#video',
            videoId: 'hzkKe94CkJI',
          },
          snippet: {
            publishedAt: '2019-05-22T03:30:00.000Z',
            channelId: 'UC0VN6My1ueOFXDTgzMZSSNQ',
            title: 'Is India ready for electric vehicles?',
            description: 'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH ***Buy my MERCHANDISE***: https://bit.ly/2DedHWW OFFICIAL WEBSITE: ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/hzkKe94CkJI/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/hzkKe94CkJI/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/hzkKe94CkJI/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'JS Films',
            liveBroadcastContent: 'none',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/WdKWPLGHyCXsUdsvsi3a6G9Ek4g"',
          id: {
            kind: 'youtube#video',
            videoId: 'hsRPx3-00xo',
          },
          snippet: {
            publishedAt: '2019-05-20T03:30:02.000Z',
            channelId: 'UC0VN6My1ueOFXDTgzMZSSNQ',
            title: 'KTM Rc8 R - A rare superbike !',
            description: 'It was a crazy Saturday evening ride after such a long time. I always love riding with friends along with super special superbikes just like ktm rc8r ;) enjoy the ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/hsRPx3-00xo/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/hsRPx3-00xo/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/hsRPx3-00xo/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'JS Films',
            liveBroadcastContent: 'none',
          },
        },
      ],
    };
    const result = AppModel.extractData(object);
    expect(result).toEqual([{
      title: 'Is India ready for electric vehicles?',
      publishedAt: '2019-05-22T03:30:00.000Z',
      videoId: 'hzkKe94CkJI',
      channelTitle: 'JS Films',
      description: 'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH ***Buy my MERCHANDISE***: https://bit.ly/2DedHWW OFFICIAL WEBSITE: ...',
      url: 'https://i.ytimg.com/vi/hzkKe94CkJI/hqdefault.jpg',
    }, {
      title: 'KTM Rc8 R - A rare superbike !',
      publishedAt: '2019-05-20T03:30:02.000Z',
      videoId: 'hsRPx3-00xo',
      channelTitle: 'JS Films',
      description: 'It was a crazy Saturday evening ride after such a long time. I always love riding with friends along with super special superbikes just like ktm rc8r ;) enjoy the ...',
      url: 'https://i.ytimg.com/vi/hsRPx3-00xo/hqdefault.jpg',
    }]);
  });
});

describe('AppModel.prototype.makeUrlSearch', () => {
  it('Should be a Function', () => {
    expect(AppModel.prototype.makeUrlSearch).toBeInstanceOf(Function);
  });

  it('Should return URL', () => {
    const object = {
      baselink: 'https://www.googleapis.com/youtube/v3/',
      apiKey: 'AIzaSyCCEFUQHY1pPhc1C4ovldAxFpLZiaRpfWM',
      options: {
        searchRequest: 'js',
        maxResults: 15,
      },
      nextPage: '',
    };
    const result = AppModel.prototype.makeUrlSearch.call(object);
    expect(result).toBe('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCCEFUQHY1pPhc1C4ovldAxFpLZiaRpfWM&type=video&part=snippet&maxResults=15&q=js&pageToken=');
  });
});

describe('AppModel.prototype.makeUrlStatistic', () => {
  it('Should be a Function', () => {
    expect(AppModel.prototype.makeUrlStatistic).toBeInstanceOf(Function);
  });

  it('Should return URL', () => {
    const object = {
      baselink: 'https://www.googleapis.com/youtube/v3/',
      apiKey: 'AIzaSyCCEFUQHY1pPhc1C4ovldAxFpLZiaRpfWM',
    };
    const id = 'nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg';
    const result = AppModel.prototype.makeUrlStatistic.call(object, id);
    expect(result).toBe('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCCEFUQHY1pPhc1C4ovldAxFpLZiaRpfWM&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics');
  });
});

describe('AppModel.extractStatistic', () => {
  it('Should be a Function', () => {
    expect(AppModel.extractStatistic).toBeInstanceOf(Function);
  });

  it('Should return array of statistics', () => {
    const object = {
      kind: 'youtube#videoListResponse',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/-YfxXwe4TImkrModkx9wevBZHh8"',
      pageInfo: {
        totalResults: 3,
        resultsPerPage: 3,
      },
      items: [
        {
          kind: 'youtube#video',
          etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/9DYmEchhGTSKmxo3iywg6B0h-TA"',
          id: 'nq4aU9gmZQk',
          snippet: {
            publishedAt: '2006-05-12T09:38:06.000Z',
            channelId: 'UC2fOqusTik8eOoPq2XAA9mg',
            title: 'JS- Ice Cream',
            description: 'JS- Ice Cream',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/nq4aU9gmZQk/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/nq4aU9gmZQk/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/nq4aU9gmZQk/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'teineAU',
            tags: [
              'JS',
              'Ice',
              'Cream',
              'RnB',
            ],
            categoryId: '10',
            liveBroadcastContent: 'none',
            localized: {
              title: 'JS- Ice Cream',
              description: 'JS- Ice Cream',
            },
          },
          statistics: {
            viewCount: '2152166',
            likeCount: '11466',
            dislikeCount: '258',
            favoriteCount: '0',
            commentCount: '973',
          },
        },
        {
          kind: 'youtube#video',
          etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/jbRpZGNf6YkLuUnF0NpL8m_q9aQ"',
          id: 'REu2BcnlD34',
          snippet: {
            publishedAt: '2012-10-18T11:51:08.000Z',
            channelId: 'UCVPYpUheDq6ijnzaVDsieBw',
            title: 'J.S. Bach Cello Suites No.1-6 BWV 1007-1012, Ralph Kirshbaum',
            description: 'J.S. Bach Cello Suites No.1-6 BWV 1007-1012, Ralph Kirshbaum\n\n1. Cello Suite No.1 in G major BWV 1007 0:00-18:07\n    Prelude Allemande Courante Sarabande Minuet Gigue\n2. Cello Suite No.2 in D minor BWV 1008 18:07-38:02\n    Prelude Allemande Courante Sarabande Minuet Gigue\n3. Cello Suite No.3 in C major BWV 1009 38:02-1:00:39\n    Prelude Allemande Courante Sarabande Bourree Gigue\n4. Cello Suite No.4 in E flat major BWV 1010 1:00:39-1:24:47\n    Prelude Allemande Courante Sarabande Bourree Gigue\n5. Cello Suite No.5 in C minor BWV 1011 1:24:47-1:51:02\n    Prelude Allemande Courante Sarabande Gavotte Gigue\n6. Cello Suite No.6 in D major BWV 1012 1:51:02\n    Prelude Allemande Courante Sarabande Gavotte Gigue\n\nPainting: Jean Raoux, Orpheus and Eurydice, Oil on Canvas, 1709',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/REu2BcnlD34/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/REu2BcnlD34/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/REu2BcnlD34/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/REu2BcnlD34/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/REu2BcnlD34/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'HarpsichordA6',
            tags: [
              'Johann',
              'Sebastian',
              'Bach',
              'Violoncello',
              'Suite',
              'Ralph',
              'Kirshbaum',
            ],
            categoryId: '10',
            liveBroadcastContent: 'none',
            localized: {
              title: 'J.S. Bach Cello Suites No.1-6 BWV 1007-1012, Ralph Kirshbaum',
              description: 'J.S. Bach Cello Suites No.1-6 BWV 1007-1012, Ralph Kirshbaum\n\n1. Cello Suite No.1 in G major BWV 1007 0:00-18:07\n    Prelude Allemande Courante Sarabande Minuet Gigue\n2. Cello Suite No.2 in D minor BWV 1008 18:07-38:02\n    Prelude Allemande Courante Sarabande Minuet Gigue\n3. Cello Suite No.3 in C major BWV 1009 38:02-1:00:39\n    Prelude Allemande Courante Sarabande Bourree Gigue\n4. Cello Suite No.4 in E flat major BWV 1010 1:00:39-1:24:47\n    Prelude Allemande Courante Sarabande Bourree Gigue\n5. Cello Suite No.5 in C minor BWV 1011 1:24:47-1:51:02\n    Prelude Allemande Courante Sarabande Gavotte Gigue\n6. Cello Suite No.6 in D major BWV 1012 1:51:02\n    Prelude Allemande Courante Sarabande Gavotte Gigue\n\nPainting: Jean Raoux, Orpheus and Eurydice, Oil on Canvas, 1709',
            },
          },
          statistics: {
            viewCount: '5749628',
            likeCount: '41650',
            dislikeCount: '1270',
            favoriteCount: '0',
            commentCount: '1515',
          },
        },
      ],
    };
    const result = AppModel.extractStatistic(object);
    expect(result).toEqual(['2152166', '5749628']);
  });
});
