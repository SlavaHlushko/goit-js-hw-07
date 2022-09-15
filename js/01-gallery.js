import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery"); 
function createMarkup(items) {
    return items.map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");
    
}

const addMarkup = createMarkup(galleryItems);

galleryRef.innerHTML = addMarkup;
galleryRef.addEventListener("click", onImgClick);

function onImgClick(event) {
    blockAction(event);

    if (event.target.nodeName !== "IMG") {
        return
    }
    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()

    galleryRef.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close()
        }
    });
}
function blockAction(event) {
    event.preventDefault();
}


