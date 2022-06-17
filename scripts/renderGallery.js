import { createCardPhoto } from './createCardPhoto.js';

export const renderGallery = photos => {
  // получаем элемент в верстке
  const gallery = document.querySelector('.grid');
  // создаем новый массив на основе photos куда передаем все созданные карточки
  const cards = photos.map(createCardPhoto);
  // вставляем карточки в верстку
  gallery.append(...cards);
};
