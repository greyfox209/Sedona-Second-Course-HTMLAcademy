let modal = document.querySelector('.modal');
let modalSuccess = document.querySelector('.modal--success');
let submitButton = document.querySelector('.review-form__button');
let modalClose = document.querySelector('.modal__button');

submitButton.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--open');
});

modalClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--open');
});


