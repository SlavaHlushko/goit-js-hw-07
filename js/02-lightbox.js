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
    blockAction(event);

    if (event.target.nodeName !== "IMG") {
        return
    }

    let lightbox = new SimpleLightbox('.gallery a', {
        captioDelay: 250,
        captionsData: 'alt',
    });
      
    lightbox.on('show.simplelightbox', function (event) {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
        instance.open();
    
    }
    )
    

    galleryRef.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close()
        }
    });
}
function blockAction(event) {
    event.preventDefault();
}