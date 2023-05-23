var burgerButtons = document.getElementsByClassName('menu-btn');
for (var i = 0; i < burgerButtons.length; i++) {
  burgerButtons[i].addEventListener('click', toggleBurgerMenu);
}
function toggleBurgerMenu() {
  var burgerMenu = document.getElementsByClassName('navigation')[0];
  burgerMenu.classList.toggle('active');
}

(function() {
    const callbackButton = document.querySelector('.callbackButton');
    const callbackPopup = document.querySelector('.callbackPopup');
    const closePopupButton = document.querySelector('.clousePopup');
  
    callbackButton.addEventListener('click', (event) => {event.preventDefault();
      callbackPopup.style.display = 'block';
    });
    closePopupButton.addEventListener('click', () => {callbackPopup.style.display = 'none';
    });
    callbackPopup.addEventListener('click', (event) => {if (event.target === callbackPopup) callbackPopup.style.display = 'none';
    });
  })();
  
  const pluningButton = document.querySelector('.pluningButton');
  const popUpPlanning = document.querySelector('.popUpPlanning');
  const popupClousePluning = document.querySelector('.popupClousePluning');
  
  pluningButton.addEventListener('click', () => {
    popUpPlanning.classList.add('active');
  });
  
  popupClousePluning.addEventListener('click', () => {
    popUpPlanning.classList.remove('active');
  });
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      popUpPlanning.classList.remove('active');
    }
  });
  