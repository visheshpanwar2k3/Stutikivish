var swiper = new Swiper(".mySwiper", {

    loop: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false, 
    },
    pagination:{
        el: ".swiper pagination",
    },
});


function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

