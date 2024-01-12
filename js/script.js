const scrollUpArrowWrapper = document.querySelector('.scrollUpArrowWrapper');


window.addEventListener('scroll', function() {
    if (window.innerWidth >= 1440) {
        if (window.scrollY > 100) {
            scrollUpArrowWrapper.style.display = 'block';
            scrollUpArrowWrapper.style.marginTop = '0px'
        } else {
            scrollUpArrowWrapper.style.display = 'none';
            scrollUpArrowWrapper.style.marginTop = '200px'
        }
    }
    else[
        scrollUpArrowWrapper.style.display = 'none'
    ]
    
});