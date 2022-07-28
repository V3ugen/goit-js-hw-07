import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryList = galleryItems.map(item => {
    return `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}" 
        alt="${item.description}" />
    </a>
    `
}).join("");
    
galleryEl.insertAdjacentHTML('beforeend', galleryList);

const lightbox = new SimpleLightbox('.gallery a',
    { captionsData: 'alt', captionDelay: 250 });  