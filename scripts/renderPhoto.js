import { createElem } from './createElem.js';

export const renderPhoto = (photoWrapper, photo) => {
  const img = createElem('img', {
    className: 'photo__picture',
    src: photo.urls.regular,
    alt: photo.description || photo.alt_description,
    style: 'max-height: 80vh',
  });
  const author = createElem('a', {
    className: 'photo__author',
    href: photo.user.html,
  });
  const avatarAuthor = createElem('img', {
    src: photo.user.profile_image.medium,
    alt: photo.user.bio,
    title: photo.user.username,
  });
  const userName = createElem('span', {
    textContent: photo.user.name,
  });
  const photoControl = createElem('div', {
    className: 'photo__control',
  });
  const photoLike = createElem('button', {
    id: photo.id,
    className: 'photo__like',
    textContent: photo.likes,
  });

  if (!photoLike.likedByUser) photoLike.classList.add('photo__like_o');

  const photoDownload = createElem('a', {
    className: 'photo__download',
    href: photo.urls.raw,
    download: true,
    target: '_blank',
  });

  author.append(avatarAuthor, userName);
  photoControl.append(photoLike, photoDownload);
  photoWrapper.append(img, author, photoControl);
};
