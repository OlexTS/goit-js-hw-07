import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallaryListRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

gallaryListRef.insertAdjacentHTML("afterbegin", markup);

gallaryListRef.addEventListener("click", onClickImage);
// let instance = "";
function onClickImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"
   alt='${event.target.alt}'/>`,
    {
      onShow: (instance) => {
        gallaryListRef.addEventListener("keydown", onGalleryKeydown);
      },
      onClose: (instance) => {
        gallaryListRef.removeEventListener("keydown", onGalleryKeydown);
      },
    }
  );
  instance.show();

  function onGalleryKeydown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
