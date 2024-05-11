window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 1) {
        header.classList.add('black-bg');
    } else {
        header.classList.remove('black-bg');
    }
});
//when user scroll header, the function works and bg-color will change