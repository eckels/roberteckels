function initializeCategories() {
    hideAllCategories();
    showCategory('first-stories');
}

function switchCategory(categoryName, button) {
    let navItems = document.getElementsByClassName('nav-item');
    for (i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }
    button.classList.add('active');

    hideAllCategories();
    showCategory(categoryName);
}

function hideAllCategories() {
    let categoryList = document.getElementsByClassName('gallery-items');
    for (i = 0; i < categoryList.length; i++) {
        categoryList[i].classList.add('hide');
    }
}

function showCategory(category) {
    let categoryName = document.getElementsByClassName(category);
    for (i = 0; i < categoryName.length; i++) {
        categoryName[i].classList.remove('hide');
    }
}