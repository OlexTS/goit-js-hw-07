import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryListRef = document.querySelector(".gallery");
gallaryListRef.addEventListener("click", onOpenModalImg);

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

let instance = "";
function onOpenModalImg(event) {
  event.preventDefault();
  const url = event.target.dataset.source;
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`
	 <img src="${url}"/>
`);
  instance.show();
  document.addEventListener("keydown", onCloseModalWindow);
}

function onCloseModalWindow(event) {
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
}
