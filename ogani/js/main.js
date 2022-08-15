// Category drop
var dropCategoryBtn = document.querySelector('.category-top__menu');
var categorySubMenu = document.querySelector('.category-top__menu-drop');
var isDropCategory = false;

dropCategoryBtn.addEventListener('click', e => {
    if (isDropCategory == false) {
        categorySubMenu.style.height = `435px`;
        isDropCategory = !isDropCategory;
    } else {
        categorySubMenu.style.height = `0px`;
        isDropCategory = !isDropCategory;
    }
})

// product-item
var productItem = document.querySelectorAll('.product-item');

[...productItem].forEach(function(item) {
    var itemSub = item.querySelector('.product-item__sub');
    item.addEventListener('mouseover', e => {
        itemSub.style.zIndex = `1`;
        itemSub.style.top = `65%`;
    })
    item.addEventListener('mouseout', e => {
        itemSub.style.zIndex = `-2`;
        itemSub.style.top = `85%`;
    })
})