import ItemView from './ItemView';

export default class AppView {
  static renderInitialPage() {
    const upContainer = document.createElement('div');
    upContainer.classList.add('upcontainer');
    const searchField = document.createElement('input');
    const buttonSearch = document.createElement('button');
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main_container');
    searchField.setAttribute('name', 'search');
    buttonSearch.setAttribute('name', 'send');
    buttonSearch.textContent = 'SEND';
    upContainer.appendChild(searchField);
    upContainer.appendChild(buttonSearch);
    document.body.appendChild(upContainer);
    document.body.appendChild(mainContainer);
    const container = document.createElement('div');
    container.classList.add('container');
    mainContainer.appendChild(container);
    AppView.M = 4;
    AppView.count = 0;
    const subContainer = document.createElement('div');
    subContainer.classList.add('subcontainer');
    subContainer.innerHTML = `
      <button class="prev"><</button>
      <span class="page"></span>
      <button class="next">></button>`;
    document.body.appendChild(subContainer);
    document.querySelector('.page').textContent = AppView.count;
  }

  static clear() {
    const container = document.querySelector('.container');
    AppView.count = 0;
    container.style.setProperty('--i', AppView.count);
    document.querySelector('.page').textContent = AppView.count;
    document.querySelector('.next').setAttribute('title', AppView.count + 1);
    document.querySelector('.prev').setAttribute('title', AppView.count > 0 ? AppView.count - 1 : 'нет');
    if (AppView.count !== 0) {
      const arr = Array.prototype.slice.apply(container.children);
      arr.forEach(element => container.removeChild(element));
    }
    container.innerHTML = '';
  }

  static renderData(data) {
    data.forEach((element) => {
      new ItemView(element).renderItem();
    });
  }
}
