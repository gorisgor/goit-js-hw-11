
import { fetchImages } from './js/pixabay-api.js';
import { renderImageCards } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const userRequest = form.elements.query.value;

  if (userRequest.trim() !== '') {
    loader.classList.remove('is-hidden');
    fetchImages(userRequest)
      .then(data => renderImageCards(data, gallery))
      .catch(onFetchError)
      .finally(() => {
        form.reset();
        loader.classList.add('is-hidden');
        initLightbox();
      });
  }
}

function onFetchError(error) {
  alert(error);
}

function initLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
    overlayOpacity: 0,
  });

  lightbox.refresh();
}
