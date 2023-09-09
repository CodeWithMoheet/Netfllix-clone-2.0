const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-container-item');
//select tab contentvitems
function selectItem(e) {
    //remove all show and border classe
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //grab content for DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

//remove borders of tabs
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border')
    });

}
//remove  show from classes and items 
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show')
    });
}
//listen for the tab
tabItems.forEach(item => {
    item.addEventListener('click', selectItem)
});