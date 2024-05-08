const URL = 'https://pixabay.com/ai/';

let userRequest = '';
const searchParams = new URLSearchParams({
  key: '43757696-1a32682a4096c08080d446579',
  q: userRequest,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

function fetchImages(searchParams) {
  return fetch(`${URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Не вдалося виконати запит до API Pixabay');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Помилка при отриманні зображень:', error);
      throw error;
    });
}

function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  userRequest = form.elements.query.value;
  if (userRequest !== '') {
    searchParams.set('q', userRequest);
    loader.classList.remove('is-hidden');
    fetchImages(searchParams)
      .then(renderImageCards)
      .catch(onFetchError)
      .finally(() => {
        form.reset();
        loader.classList.add('is-hidden');
      });
  } else {
    alert('Plese type your request');
  }
}

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearch);

function renderImageCards(data) {
  gallery.innerHTML = '';
  data.hits.forEach(image => {
    const { webformatURL, tags, likes, views, comments, downloads } = image;
    const markup = `<div class="card">
            <div class="card-img-top">
                <img src="${webformatURL}" alt="${tags}">
            </div>
            <div class="card-body">
                <p class="card-text">Likes: ${likes}</p>
                <p class="card-text">Views: ${views}</p>
                <p class="card-text">Comments: ${comments}</p>
                <p class="card-text">Downloads: ${downloads}</p>
            </div>
        </div>`;
    gallery.insertAdjacentHTML('beforeend', markup);
  });
}

function onFetchError(error) {
  alert(error);
}
