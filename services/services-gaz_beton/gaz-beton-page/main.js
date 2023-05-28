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
