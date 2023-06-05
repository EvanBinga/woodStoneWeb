const openPopupClick = document.getElementById('openPopupClick');
const closePopupButton = document.getElementById('closePopupButton');
const popupClick = document.getElementById('popupClick');

openPopupClick.addEventListener('click', () => {
  popupClick.classList.add('open');
});

closePopupButton.addEventListener('click', () => {
  popupClick.classList.remove('open');
});

