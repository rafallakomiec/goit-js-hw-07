'use strict';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryHTMLArray = [];

for (const item of galleryItems) {
  const html = `<li><a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a></li>`;

  galleryHTMLArray.push(html);
}

gallery.insertAdjacentHTML('beforeend', galleryHTMLArray.join(''));

const simpleLightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
  });