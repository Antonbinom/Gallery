import { createCardPhoto } from './createCardPhoto.js';
import { createElem } from './createElem.js';
import { scrollLoad } from './scrollLoad.js';

export const renderGallery = (wrapper, photos) => {
  // создаем элемент в верстке
  const gallery = createElem('ul', {
    className: 'grid',
  });

  const endElem = createElem('div');

  // создаем новый массив на основе photos куда передаем все созданные карточки
  const cards = photos.map(createCardPhoto);
  wrapper.append(gallery);

  // добавляем настройки для элементов галлереи Masonry
  const grid = new Masonry(gallery, {
    gutter: 10,
    itemSelector: '.card',
    columnWidth: 200,
    isFitWidth: true,
  });
  // Выполняем вывод карточек
  Promise.all(cards).then(cards => {
    gallery.append(...cards);
    grid.appended(cards);
    wrapper.append(endElem);
    scrollLoad(gallery, grid, endElem);
  });
};
