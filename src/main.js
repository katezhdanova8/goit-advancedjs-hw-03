import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import { fetchPhotos } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions';

const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchValue = event.currentTarget.elements.user_query.value.trim();

  if (searchValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter something to search.',
      position: 'topRight',
    });
    searchForm.reset();
    return;
  }

  gallery.innerHTML = '';

  loader.classList.remove('is-hidden');

  fetchPhotos(searchValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      gallery.innerHTML = galleryMarkup(hits);

      lightbox.refresh();
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to load images.',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
  searchForm.reset();
}