import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const allGallery = [];

const gallery = galleryItems.map(e => {
  const img = document.createElement('img');
  img.src = e.preview;
  img.alt = e.description;
  img.classList.add('gallery__image');

  const link = document.createElement('a');
  link.href = e.original;
  link.classList.add('gallery__link');
  link.append(img);

  const item = document.createElement('li');
  item.classList.add('gallery__item');
  item.append(link);

  return allGallery.push(item);
});

galleryEl.append(...allGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
