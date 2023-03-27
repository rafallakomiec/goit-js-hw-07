'use strict';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryHTMLArray = [];

for (const item of galleryItems) {
  const html = `<li><div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div></li>`;
  galleryHTMLArray.push(html);
}

gallery.insertAdjacentHTML('beforeend', galleryHTMLArray.join(''));

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `);

  function closeBox(event) {
    if (event.code === 'Escape') {
      instance.close(() => {
        document.removeEventListener('keyup', closeBox);
      });
    }
  }

  instance.show();
  document.addEventListener('keyup', closeBox);
  instance
    .element()
    .addEventListener('click', () => document.removeEventListener('keyup', closeBox));
});
