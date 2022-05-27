new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 95,
    loop: true,
    speed: 800,
    breakpoints: {
        768: {
            slidesPerView: 1.5,
        }
    }
});

const hambActive = document.querySelector('.hamb');
const popupActive = document.querySelector('.popup');
const bodyNoScroll = document.querySelector('body');
const closePopup = document.querySelectorAll('.popup .navbar__menu .navbar__link');

closePopup.forEach(link => {
    link.addEventListener('click', hambHandler);
})

hambActive.addEventListener('click', hambHandler);

function hambHandler() {
    hambActive.classList.toggle('active');
    popupActive.classList.toggle('active');
    bodyNoScroll.classList.toggle('noscroll');
}

const anchors = document.querySelectorAll('.navbar__link');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        }) 
    });
}