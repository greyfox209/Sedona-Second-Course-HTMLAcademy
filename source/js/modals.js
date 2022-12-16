let modal = document.querySelector('.modal');
let modalOpen = document.querySelector('.modal--open');
let modalSuccess = document.querySelector('.modal--success');
let modalFailure = document.querySelector('.modal--failure');
let submitButton = document.querySelector('.review-form__button');
let modalCloseSuccess = document.querySelector('.modal__button--success');
let modalCloseFailure = document.querySelector('.modal__button--failure');

submitButton.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalSuccess.classList.add('modal--open');
  modalFailure.classList.add('modal--open');
});

modalCloseSuccess.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalSuccess.classList.remove('modal--open');
});

modalCloseFailure.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalFailure.classList.remove('modal--open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (modalSuccess.classList.contains('modal--open')) {
      evt.preventDefault();
      modalSuccess.classList.remove('modal--open');
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (modalFailure.classList.contains('modal--open')) {
      evt.preventDefault();
      modalFailure.classList.remove('modal--open');
    }
  }
});
