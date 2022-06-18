import { createElem } from './createElem.js';

const loadImg = (url, description) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.width = 200;
    img.src = url;
    img.alt = description;
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', err => reject(newError(err)));
  });
};

export const createCardPhoto = async data => {
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
  const photo = await loadImg(data.urls.small, data.description);

  // Автор
  const author = createElem('a', {
    className: 'card__author',
    href: data.user.links.html,
  });

  // Аватар
  const avatarAuthor = createElem('img', {
    className: 'author__photo',
    src: data.user.profile_image.medium,
    width: '32',
    height: '32',
    alt: data.user.bio,
    title: data.user.username,
  });

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
