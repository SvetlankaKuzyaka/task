export default class ItemView {
  constructor(itemData) {
    this.itemData = itemData;
  }

  renderItem() {
    const subContainer = document.querySelector('.container');
    const containerTwo = document.createElement('div');
    containerTwo.classList.add('item_container');
    const markup = `
      <div class = "item">
        <div class="title">
          <a href="https://www.youtube.com/watch?v=${this.itemData.videoId}" target="_blank">${this.itemData.title}</a>
        </div>
        <img src="${this.itemData.url}">
        <div class="info">
          <ul>
            <li class="author"><span>channel:</span> ${this.itemData.channelTitle}</li>
            <li class="data_item"><span>data:</span> ${this.itemData.publishedAt.substr(0, 10)}</li>
            <li class="quantity_view"><span>view:</span> ${this.itemData.statistics}</li>
          </ul>
        </div>
        <div class="description">
          <span class="description">${this.itemData.description}</span>
        </div>
      </div>
    `;
    containerTwo.innerHTML = markup;
    subContainer.appendChild(containerTwo);
  }
}
