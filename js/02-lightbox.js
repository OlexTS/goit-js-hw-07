import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryListRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

gallaryListRef.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
