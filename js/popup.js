var button = document.querySelector('.contact-tel + .button');
var popup = document.querySelector('.feedback-modal');
var close = popup.querySelector('.close-button');
var form = popup.querySelector('form');
var login = popup.querySelector('[name=login]');
var mail = popup.querySelector('[name=email]');
var feedback = popup.querySelector('[name=letter]');

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    login.focus();
});

close.addEventListener('click', function (evt){
    evt.preventDefault();
    popup.classList.add('modal-close');
    popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt){
    if(!login.value || !mail.value || !feedback.value){
        evt.preventDefault();
        popup.classList.remove('modal-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains('modal-show')) {
        popup.classList.add('modal-close');
        popup.classList.remove('modal-error');
      }
    }
  });
