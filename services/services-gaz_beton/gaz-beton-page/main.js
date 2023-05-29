function changeTab(tabIndex) {
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }

    var tabBtns = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    var selectedTab = document.getElementById("item" + tabIndex);
    if (selectedTab) {
        selectedTab.style.display = "block";
        var selectedTabBtn = document.getElementById("gaz-btn-" + tabIndex);
        if (selectedTabBtn) {
            selectedTabBtn.classList.add("active");
        }
    }
}   



const openPopup = () => {
    const popup = document.getElementById('popupContainer');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
    setTimeout(() => {
      popup.classList.add('show');
      overlay.classList.add('show');
      document.addEventListener('click', closePopupOutside);
      popup.addEventListener('click', stopPropagation);
      overlay.addEventListener('click', closePopup);
    }, 10);
  };
  
  const closePopup = () => {
    const popup = document.getElementById('popupContainer');
    const overlay = document.getElementById('overlay');
    popup.classList.remove('show');
    overlay.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
      document.removeEventListener('click', closePopupOutside);
      popup.removeEventListener('click', stopPropagation);
      overlay.removeEventListener('click', closePopup);
    }, 300);
  };
  
  const closePopupOutside = (event) => {
    const popup = document.getElementById('popupContainer');
    const target = event.target;
  
    if (!popup.contains(target) && !target.classList.contains('overlay')) {
      closePopup();
    }
  };
  
  const stopPropagation = (event) => {
    event.stopPropagation();
  };


  
  


  var boxIcon = document.querySelector('.boxIcon');
  var noneBox = document.querySelector('.noneBox');
  
  boxIcon.addEventListener('mouseover', function() {
    noneBox.style.opacity = '1';
  });
  
  boxIcon.addEventListener('mouseout', function() {
    noneBox.style.opacity = '0';
  });
  
  var boxIconTwo = document.querySelector('.boxIconTwo');
  var noneBoxTwo = document.querySelector('.noneBoxTwo');
  
  boxIconTwo.addEventListener('mouseover', function() {
    noneBoxTwo.style.opacity = '1';
  });
  
  boxIconTwo.addEventListener('mouseout', function() {
    noneBoxTwo.style.opacity = '0';
  });
  




//   // Получаем необходимые элементы
// const sliderContainer = document.querySelector('.section-2-slider');
// const sliderImages = sliderContainer.querySelectorAll('img');
// const prevButton = document.querySelector('.bittonSlider');
// const nextButton = document.querySelector('.bittonSliderNext');

// // Устанавливаем индекс текущего слайда
// let currentIndex = 0;

// // Функция для отображения текущего слайда
// function showSlide(index) {
//   // Скрываем все изображения
//   sliderImages.forEach((image) => {
//     image.style.display = 'none';
//   });

//   // Отображаем текущий слайд
//   sliderImages[index].style.display = 'block';
// }

// // Функция для переключения на предыдущий слайд
// function goToPrevSlide() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = sliderImages.length - 1;
//   }
//   showSlide(currentIndex);
// }

// // Функция для переключения на следующий слайд
// function goToNextSlide() {
//   currentIndex++;
//   if (currentIndex >= sliderImages.length) {
//     currentIndex = 0;
//   }
//   showSlide(currentIndex);
// }

// // Назначаем обработчики событий для кнопок
// prevButton.addEventListener('click', goToPrevSlide);
// nextButton.addEventListener('click', goToNextSlide);

// // Показываем первый слайд при загрузке страницы
// showSlide(currentIndex);


document.addEventListener('DOMContentLoaded', function() {
  const sliderImages = document.querySelector('.slider-images');
  const prevButton = document.querySelector('.buttonSliderPrev');
  const nextButton = document.querySelector('.buttonSliderNext');

  const images = Array.from(document.querySelectorAll('.slider-images img'));
  const imageWidth = images[0].getBoundingClientRect().width;

  // Устанавливаем начальный индекс активного слайда
  let activeIndex = 0;

  // Функция для перемещения слайдера
  function moveToSlide(index) {
    sliderImages.style.transform = `translateX(-${index * imageWidth}px)`;
    images.forEach((image) => image.classList.remove('active'));
    images[index].classList.add('active');
  }

  // Переключение на предыдущий слайд
  function slidePrev() {
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    moveToSlide(activeIndex);
  }

  // Переключение на следующий слайд
  function slideNext() {
    activeIndex = (activeIndex + 1) % images.length;
    moveToSlide(activeIndex);
  }

  // Назначаем обработчики событий на кнопки
  prevButton.addEventListener('click', slidePrev);
  nextButton.addEventListener('click', slideNext);

  // Применяем начальное состояние слайдера
  images[activeIndex].classList.add('active');
});
