import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'

const galleryEl = document.querySelector('.gallery');

const gallary = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">  <a class="gallery__link" href="${original}">   
       <img class="gallery__image" src="${preview}"   
          data-source="${original}" alt="${description}">  </a></div>`;
  })
  .join('');

galleryEl.innerHTML = gallary;

galleryEl.addEventListener('click', openModalImg);

function openModalImg(eve) {
  eve.preventDefault();

  function modalClose(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }

  const instance = basicLightbox.create(
    `
<img src="${eve.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: instance => {
        galleryEl.addEventListener('keydown', modalClose);
      },
      onClose: instance => {
        galleryEl.removeEventListener('keydown', modalClose);
      },
    }
  );

  instance.show();
}
