const btnMenu = document.getElementById('btnMenu');
const navbar = document.getElementById('navbar');
const mainContainer = document.getElementById('mainContainer');

btnMenu.addEventListener('click', () => {
    mainContainer.classList.toggle('hide');
    navbar.classList.toggle('navbar-active');
    if (navbar.className.includes('active')) {
        btnMenu.classList.replace('fa-bars', 'fa-times');
    } else {
        btnMenu.classList.replace('fa-times', 'fa-bars');
    }
})

const aboutItems = document.querySelectorAll('.about-us__menu__item');

for (let i = 0; i < aboutItems.length; i++) {
    const item = aboutItems[i];
    item.addEventListener('click', () => {
        aboutItems.forEach((element) => {
            element.classList.remove('about-us__menu__item--active');
        })
        item.classList.toggle('about-us__menu__item--active');
    })
}

