/* eslint-disable no-inner-declarations */
import AppModel from '../model/AppModel';
import AppView from '../view/AppView';

export default class AppController {
  constructor() {
    this.state = {
      searchRequest: '',
      maxResults: 15,
    };
  }

  static eventListeners(model) {
    let container = document.querySelector('.container');
    const mainContainer = document.querySelector('.main_container');
    let N = container.children.length;
    container.style.setProperty('--n', N);
    let x0 = null;
    let locked = false;
    let i = AppView.count;
    let w;
    function size() {
      w = window.innerWidth;
      const buf = AppView.M;
      if (w <= 1400 && w > 800) {
        AppView.M = 2;
        container.style.setProperty('--m', AppView.M);
        if (buf === 1) {
          i = Math.floor(N / AppView.M) - 2;
          container.style.setProperty('--i', i);
          AppView.count = i;
          x0 = null;
          document.querySelector('.page').textContent = AppView.count;
          document.querySelector('.next').setAttribute('title', AppView.count + 1);
          document.querySelector('.prev').setAttribute('title', AppView.count > 0 ? AppView.count - 1 : 'нет');
        }
        mainContainer.style.setProperty('height', '70vh');
        mainContainer.style.setProperty('--w', '80vw');
      } else if (w <= 800) {
        AppView.M = 1;
        container.style.setProperty('--m', AppView.M);
        mainContainer.style.setProperty('height', '90vh');
        mainContainer.style.setProperty('--w', '90vw');
      } else {
        AppView.M = 4;
        container.style.setProperty('--m', AppView.M);
        if (buf === 1 || buf === 2) {
          i = Math.floor(N / AppView.M) - 2;
          container.style.setProperty('--i', i);
          AppView.count = i;
          x0 = null;
          document.querySelector('.page').textContent = AppView.count;
          document.querySelector('.next').setAttribute('title', AppView.count + 1);
          document.querySelector('.prev').setAttribute('title', AppView.count > 0 ? AppView.count - 1 : 'нет');
        }
        mainContainer.style.setProperty('height', '50vh');
        mainContainer.style.setProperty('--w', '70vw');
      }
    }
    size();
    function unify(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    }
    function lock(e) {
      x0 = unify(e).clientX;
      locked = true;
      container.classList.toggle('smooth', !(locked = true));
    }
    function drag(e) {
      e.preventDefault();
      if (locked) {
        container.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`);
      }
    }
    async function move(e) {
      if (locked) {
        const dx = unify(e).clientX - x0;
        const s = Math.sign(dx);
        let f = +(s * dx / w).toFixed(2);
        if ((i > 0 || s < 0) && (i < N / AppView.M - 1 || s > 0) && f > 0.05) {
          container.style.setProperty('--i', i -= s);
          f = 1 - f;
        }
        container.style.setProperty('--f', f);
        container.style.setProperty('--tx', '0px');
        container.classList.toggle('smooth', !(locked = false));
        x0 = null;
        AppView.count = i;
        document.querySelector('.page').textContent = AppView.count;
        document.querySelector('.next').setAttribute('title', AppView.count + 1);
        document.querySelector('.prev').setAttribute('title', AppView.count > 0 ? AppView.count - 1 : 'нет');
        if (AppView.count === Math.floor(N / AppView.M) - 1) {
          const dataMore = await model.getData();
          AppView.renderData(dataMore);
          container = document.querySelector('.container');
          N = container.children.length;
          container.style.setProperty('--n', N);
          x0 = null;
          locked = false;
          i = AppView.count;
          container.addEventListener('mousemove', drag, false);
          container.addEventListener('touchmove', drag, false);
          container.addEventListener('mousedown', lock, false);
          container.addEventListener('touchstart', lock, false);
          container.addEventListener('mouseup', move, false);
          container.addEventListener('touchend', move, false);
        }
      }
    }
    container.addEventListener('mousemove', drag, false);
    container.addEventListener('touchmove', drag, false);
    container.addEventListener('mousedown', lock, false);
    container.addEventListener('touchstart', lock, false);
    container.addEventListener('mouseup', move, false);
    container.addEventListener('touchend', move, false);
    window.addEventListener('resize', size, false);
    document.querySelector('.prev').addEventListener('click', async () => {
      const s = 1;
      let f = 0.2;
      if ((i > 0 || s < 0) && (i < N / AppView.M - 1 || s > 0) && f > 0.05) {
        container.style.setProperty('--i', i -= s);
        f = 1 - f;
      }
      container.style.setProperty('--f', f);
      container.style.setProperty('--tx', '0px');
      container.classList.toggle('smooth', !(locked = false));
      AppView.count = i;
      document.querySelector('.page').textContent = AppView.count;
      document.querySelector('.next').setAttribute('title', AppView.count + 1);
      document.querySelector('.prev').setAttribute('title', AppView.count > 0 ? AppView.count - 1 : 'нет');
      if (AppView.count === Math.floor(N / AppView.M) - 1) {
        const dataMore = await model.getData();
        AppView.renderData(dataMore);
        container = document.querySelector('.container');
        N = container.children.length;
        container.style.setProperty('--n', N);
        x0 = null;
        locked = false;
        i = AppView.count;
        container.addEventListener('mousemove', drag, false);
        container.addEventListener('touchmove', drag, false);
        container.addEventListener('mousedown', lock, false);
        container.addEventListener('touchstart', lock, false);
        container.addEventListener('mouseup', move, false);
        container.addEventListener('touchend', move, false);
      }
    });
    document.querySelector('.next').addEventListener('click', async () => {
      const s = -1;
      let f = 0.2;
      if ((i > 0 || s < 0) && (i < N / AppView.M - 1 || s > 0) && f > 0.05) {
        container.style.setProperty('--i', i -= s);
        f = 1 - f;
      }
      container.style.setProperty('--f', f);
      container.style.setProperty('--tx', '0px');
      container.classList.toggle('smooth', !(locked = false));
      AppView.count = i;
      document.querySelector('.page').textContent = AppView.count;
      document.querySelector('.next').setAttribute('title', AppView.count + 1);
      document.querySelector('.prev').setAttribute('title', AppView.count > 0 ? AppView.count - 1 : 'нет');
      if (AppView.count === Math.floor(N / AppView.M) - 1) {
        const dataMore = await model.getData();
        AppView.renderData(dataMore);
        container = document.querySelector('.container');
        N = container.children.length;
        container.style.setProperty('--n', N);
        x0 = null;
        locked = false;
        i = AppView.count;
        container.addEventListener('mousemove', drag, false);
        container.addEventListener('touchmove', drag, false);
        container.addEventListener('mousedown', lock, false);
        container.addEventListener('touchstart', lock, false);
        container.addEventListener('mouseup', move, false);
        container.addEventListener('touchend', move, false);
      }
    });
  }

  start() {
    AppView.renderInitialPage();
    document.querySelector('button[name="send"]').addEventListener('click', async () => {
      const { value } = document.querySelector('input[name="search"]');
      if (value.trim()) {
        document.querySelector('input[name="search"]').value = '';
        AppView.clear();
        this.state.searchRequest = value;
        const model = new AppModel(this.state);
        const data = await model.getData();
        AppView.renderData(data);
        AppController.eventListeners(model);
      }
    });
    document.querySelector('input[name="search"]').addEventListener('keydown', async (e) => {
      if (e.keyCode === 13) {
        const { value } = document.querySelector('input[name="search"]');
        if (value.trim()) {
          document.querySelector('input[name="search"]').value = '';
          AppView.clear();
          this.state.searchRequest = value;
          const model = new AppModel(this.state);
          const data = await model.getData();
          AppView.renderData(data);
          AppController.eventListeners(model);
        }
      }
    });
  }
}
