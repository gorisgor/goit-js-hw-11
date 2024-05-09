import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

export function renderImageCards(data, galleryElement) {
  if (data.total !== 0) {
    const imagesMarkup = data.hits
      .map(image => {
        const {
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        } = image;
        return `<li class="card">
        <a class="gallery-link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}">
        </a>
        <div class="card-body">
          <p class="card-text">Likes: ${likes}</p>
          <p class="card-text">Views: ${views}</p>
          <p class="card-text">Comments: ${comments}</p>
          <p class="card-text">Downloads: ${downloads}</p>
        </div>
      </li>`;
      })
      .join('');

    galleryElement.innerHTML = imagesMarkup;
  } else {
    galleryElement.innerHTML = '';
    iziToast.show({
      message:'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#fff',
      backgroundColor: '#b52222',
      position: 'topRight',
      progressBar: false,
    });
  }
}
