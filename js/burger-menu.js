const headerburger = document.querySelector('.header__burger')
const navlist = document.querySelector('.nav__list')

headerburger.addEventListener('click', open)

function open() {
    navlist.classList.toggle('open-burger')
    headerburger.classList.toggle('active')
}


