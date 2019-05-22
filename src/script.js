import AppController from './controllers/AppController';

require('./view/style.css');
require('./view/itemStyle.css');

const app = new AppController();
app.start();
