document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal({duration: 500}).reveal('.showcase, .nav-main')
ScrollReveal({duration: 700}).reveal('.news-cards, .headline'); 
ScrollReveal({duration: 2000}).reveal('.cards-banner-one, .cards-banner-two, .social, .footer-links, .punchline');