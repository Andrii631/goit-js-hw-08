// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const ulEl = document.querySelector('.gallery')
function addGallery (galleryItems) {
    let arr = []
    
    galleryItems.forEach(galleryItem => {
        arr.push(`<li class="galleryItem"> <a class="gallery__link" href='${galleryItem.original}'> <img class="gallery__image" src='${galleryItem.preview}' alt='${galleryItem.description}' /> </a> </li>`)
    });


ulEl.innerHTML =  [...arr].join('')
}
addGallery (galleryItems)
let lightbox = new SimpleLightbox('.gallery a',{
    captionDelay:250,
    captionsData: 'alt',
    enableKeyboard:	true,
    close: true
 });
 console.log(lightbox)
