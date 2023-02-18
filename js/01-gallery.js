import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'

const galeryEl = document.querySelector('.gallery');

const allGalary = [];

const galary = galleryItems.map(e => {
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.alt = e.description;
  img.src = e.preview;
  img.setAttribute('data-source', e.original);

  const link = document.createElement('a');
  link.href = e.original;
  link.classList.add('gallery__link');

  link.append(img);

  const item = document.createElement('div');
  item.classList.add('gallery__item');
  item.append(link);

  return allGalary.push(item);
});

galeryEl.append(...allGalary);

galeryEl.addEventListener('click', openModalImg);

function openModalImg(eve) {
  eve.preventDefault();

  const instance = basicLightbox.create(`
<img src="${eve.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galeryEl.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
