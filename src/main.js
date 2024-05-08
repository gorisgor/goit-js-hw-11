// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const URL = 'https://pixabay.com/api/';
// let userRequest = '';
// const searchParams = new URLSearchParams({
//   key: '43757696-1a32682a4096c08080d446579',
//   q: userRequest,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// });

// function fetchImages(searchParams) {
//   return fetch(`${URL}?${searchParams}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       throw error;
//     });
// }

// function onSearch(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   userRequest = form.elements.query.value;
//   if (userRequest !== '') {
//     searchParams.set('q', userRequest);
//     loader.classList.remove('is-hidden');
//     fetchImages(searchParams)
//       .then(renderImageCards)
//       .catch(onFetchError)
//       .finally(() => {
//         form.reset();
//         loader.classList.add('is-hidden');
//         initLightbox();
//       });
//   }
// }

// const gallery = document.querySelector('.gallery');
// const searchForm = document.querySelector('.form');
// const loader = document.querySelector('.loader');

// searchForm.addEventListener('submit', onSearch);

// function renderImageCards(data) {
//   if (data.total !== 0) {
//     const imagesMarkup = data.hits
//       .map(image => {
//         const {
//           webformatURL,
//           largeImageURL,
//           tags,
//           likes,
//           views,
//           comments,
//           downloads,
//         } = image;
//         return `<li class="card">
//         <a class="gallery-link" href="${largeImageURL}">
//           <img src="${webformatURL}" alt="${tags}">
//         </a>
//       <div class="card-body">
//         <p class="card-text">Likes: ${likes}</p>
//         <p class="card-text">Views: ${views}</p>
//         <p class="card-text">Comments: ${comments}</p>
//         <p class="card-text">Downloads: ${downloads}</p>
//       </div>
//     </li>`;
//       })
//       .join('');

//     gallery.innerHTML = imagesMarkup;
//   } else {
//     iziToast.show({
//       message:
//         'Sorry, there are no images matching your search query. Please try again!',
//       messageColor: '#fff',
//       backgroundColor: '#b52222',
//       position: 'topRight',
//     });
//   }
// }

// function onFetchError(error) {
//   alert(error);
// }
// function initLightbox() {
//   const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionsDelay: 250,
//     overlayOpacity: 0,
//   });

//   lightbox.refresh();
// }
// main.js
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
