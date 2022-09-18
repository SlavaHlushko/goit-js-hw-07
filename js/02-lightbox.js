import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery"); 
function createMarkup(items) {
    return items.map((item) => `<li>
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" 
  data-source="${item.original}" />
</a>
</li>`).join("");
    
}

const addMarkup = createMarkup(galleryItems);

galleryRef.innerHTML = addMarkup;
galleryRef.addEventListener("click", onImgClick);

function onImgClick(event) {

    if (event.target.nodeName !== "IMG") {
        return
    }

};


let lightbox = new SimpleLightbox('.gallery a', {
    captioDelay: 250,
    captionsData: 'alt',
});      

lightbox.on('show.simplelightbox', function (event) {
    basiclightbox.create(`
   <img src="${event.target.dataset.source}" width="800" height="600">
`)
});
