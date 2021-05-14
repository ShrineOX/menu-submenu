const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    // Hide the submenu when clicking on the submenu items
    if (event.target.closest('.submenu')) {
      event.target.closest('.submenu').classList.remove('submenu--show');
      return;
    }

    if (!event.target.matches('.menu__heading')) return;
    const submenu = event.target.nextElementSibling;
    const isShown = submenu.matches('.submenu--show');
    hideAllSubmenu();

    !isShown && submenu.classList.add('submenu--show');
  });
});

// Hide all the submenu when clicking outside of the  menu
document.addEventListener('click', event => {
  !event.target.closest('.menu') && hideAllSubmenu();
});

function hideAllSubmenu() {
  document
    .querySelectorAll('.submenu')
    .forEach(menu => menu.classList.remove('submenu--show'));
}
