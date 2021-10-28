/*abre e fecha menu quando clicar no icone: menu e x*/

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');



for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}

/*quando clicar em um item do menu, esconde o menu */
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
    element.addEventListener('click', function() {
        nav.classList.remove('show');
    })
}


//CARD SHOW

const cards = document.querySelectorAll('.card')

function switchIcon(icon) {

    if (icon.classList.contains('icon-chevron-down')) {
        icon.classList.remove('icon-chevron-down');
        icon.classList.add('icon-chevron-left');
        console.log('eu')
    } else if (icon.classList.contains('icon-chevron-left')) {
        console.log('pinto')
        icon.classList.remove('icon-chevron-left');
        icon.classList.add('icon-chevron-down');
    }
}

for (const element of cards) {
    const elementP = element.querySelector('p')
    const icon = element.querySelector('i')



    element.addEventListener('click', function() {
        element.classList.toggle('active')
        console.log(element)
        elementP.classList.toggle('hidden')
        switchIcon(icon)
    })
}

// SWIPER
const swiper = new Swiper('.swiper', {
    init: true,
    slidesPerView: 1,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    mousewheel: true,
    keyboard: true,

    breakpoints: {
        767: {
            slidesPerView: 3,
            setWrapperSize: true
        }
    }
});