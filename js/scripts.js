document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.fa-bars');
    const menu = document.querySelector('.header__menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
