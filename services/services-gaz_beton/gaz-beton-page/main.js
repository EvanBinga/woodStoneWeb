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