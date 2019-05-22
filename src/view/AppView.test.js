import AppView from './AppView';
import ItemView from './ItemView';

describe('ItemView constructor', () => {
  it('Should create new ItemView', () => {
    const itemData = {
      channelTitle: 'JS Films',
      description: 'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH ***Buy my MERCHANDISE***: https://bit.ly/2DedHWW OFFICIAL WEBSITE: ...',
      publishedAt: '2019-05-22T03:30:00.000Z',
      statistics: 123456,
      title: 'Is India ready for electric vehicles?',
      url: 'https://i.ytimg.com/vi/hzkKe94CkJI/hqdefault.jpg',
      videoId: 'hsRPx3-00xo',
    };
    const object = {
      itemData: {
        videoId: 'hsRPx3-00xo',
        title: 'Is India ready for electric vehicles?',
        publishedAt: '2019-05-22T03:30:00.000Z',
        channelTitle: 'JS Films',
        description: 'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH ***Buy my MERCHANDISE***: https://bit.ly/2DedHWW OFFICIAL WEBSITE: ...',
        url: 'https://i.ytimg.com/vi/hzkKe94CkJI/hqdefault.jpg',
        statistics: 123456,
      },
    };
    const result = new ItemView(itemData);
    expect(result).toEqual(object);
  });
});

describe('AppView.renderInitialPage', () => {
  it('Should be a Function', () => {
    expect(AppView.renderInitialPage).toBeInstanceOf(Function);
  });

  it('Should set init right parametres', () => {
    AppView.renderInitialPage();
    expect(AppView.count).toEqual(0);
    expect(AppView.M).toEqual(4);
  });
});

describe('AppView.clear', () => {
  it('Should be a Function', () => {
    expect(AppView.clear).toBeInstanceOf(Function);
  });

  it('Should set init right parametres', () => {
    AppView.clear();
    expect(AppView.count).toEqual(0);
  });

  it('Should clear data correctly', () => {
    AppView.clear();
    expect(document.querySelector('.container')).toMatchSnapshot();
  });
});

describe('AppView.renderData', () => {
  it('Should be a Function', () => {
    expect(AppView.renderData).toBeInstanceOf(Function);
  });
});

describe('ItemView.prototype.renderItem', () => {
  it('Should be a Function', () => {
    expect(ItemView.prototype.renderItem).toBeInstanceOf(Function);
  });

  it('Should render data correctly', () => {
    const object = {
      itemData: {
        videoId: 'hsRPx3-00xo',
        title: 'Is India ready for electric vehicles?',
        publishedAt: '2019-05-22T03:30:00.000Z',
        channelTitle: 'JS Films',
        description: 'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH ***Buy my MERCHANDISE***: https://bit.ly/2DedHWW OFFICIAL WEBSITE: ...',
        url: 'https://i.ytimg.com/vi/hzkKe94CkJI/hqdefault.jpg',
        statistics: 123456,
      },
    };
    ItemView.prototype.renderItem.call(object);
    expect(document.querySelector('.item_container')).toMatchSnapshot();
  });
});
