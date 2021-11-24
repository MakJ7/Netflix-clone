const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content Item
function selectItem(e){

    removeBorder();
    removeShow();

    this.classList.add('tab-border');

    // Grab the id of the clicked tab
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    
    // Add show class to tabContentItem
    tabContentItem.classList.add('show');
}

// Remove bottom border from all tab items
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Remove show class from all tab content items
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));