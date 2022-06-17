import { getData } from './getData.js';
import { renderGallery } from './renderGallery.js';

const init = async () => {
  // получаем массив данных из data.json
  const photos = await getData();
  // передаем массив на отрисовку
  renderGallery(photos);
};

init();
