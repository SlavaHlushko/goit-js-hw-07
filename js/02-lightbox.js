import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");
function createMarkup(items) {
    return items.map((item) => `<li>
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`).join(" ");
}
const addMarkup = createMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend',addMarkup);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: `250`,
    captionPosition: 'bottom',
});