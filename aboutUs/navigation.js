var burgerButtons = document.getElementsByClassName('menu-btn');

// Добавляем обработчик события к каждой кнопке бургер-меню
for (var i = 0; i < burgerButtons.length; i++) {
  burgerButtons[i].addEventListener('click', toggleBurgerMenu);
}

function toggleBurgerMenu() {
  // Получаем ссылку на элемент бургер-меню
  var burgerMenu = document.getElementsByClassName('navigation')[0];

  // Добавляем/удаляем класс "active" у элемента меню
  burgerMenu.classList.toggle('active');
}

const burgerButtons = document.getElementsByClassName('menu-btn');

Array.from(burgerButtons).forEach((button) => {button.addEventListener('click', toggleBurgerMenu);
});

const toggleBurgerMenu = () => {const burgerMenu = document.getElementsByClassName('navigation')[0];
burgerMenu.classList.toggle('active');
};