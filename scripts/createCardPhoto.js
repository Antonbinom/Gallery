import { createElem } from './createElem.js';

export const createCardPhoto = data => {
  // создаем карточку
  const card = createElem('li', {
    className: 'card',
  });

  // создаем содержимое карточки

  // Ссылка
  const cardItem = createElem('a', {
    id: data.id,
    className: 'grid-item',
    href: `page.html?photo=${data.id}`,
  });

  // Изображение
  const photo = new Image();
  photo.width = '200';
  photo.src = data.urls.small;
  photo.alt = data.alt_description;

  // Автор
  const author = document.createElement('a');
  author.className = 'card__author';
  author.href = data.user.links.html;
  // Аватар
  const avatarAuthor = new Image();
  avatarAuthor.className = 'author__photo';
  avatarAuthor.src = data.user.profile_image.medium;
  avatarAuthor.width = '32';
  avatarAuthor.height = '32';
  avatarAuthor.alt = data.user.bio;
  avatarAuthor.title = data.user.username;

  // внутрь автора вставляю аватар
  author.append(avatarAuthor);

  // Лайки
  const likeBtn = createElem('button', {
    className: 'card__photo-like',
    textContent: data.likes,
  });

  // Ссылка на скачивание
  const downloadLink = createElem('a', {
    className: 'card__download',
    href: data.links.download,
    download: true,
    target: '_blank',
  });

  // внутрь ссылки карточки вставляю фото, автора, лайки, ссылку
  cardItem.append(photo, author, likeBtn, downloadLink);

  // помещаю карточку элемент li '
  card.append(cardItem);

  // возвращаем карточку на отрисовку
  return card;
};
