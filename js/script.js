const scrollUpArrowWrapper = document.querySelector('.scrollUpArrowWrapper');
const navMediaIcons = document.querySelector('.navMediaIcons');

window.addEventListener('scroll', function() {
    if (window.innerWidth >= 1440) {
        if (window.scrollY > 100) {
            scrollUpArrowWrapper.classList.remove('scrollUpArrowWrapperHidden')
        } else {
            scrollUpArrowWrapper.classList.add('scrollUpArrowWrapperHidden')
        }
    }
    else[
        scrollUpArrowWrapper.classList.add('scrollUpArrowWrapperHidden')
    ]

    const bottomOfViewport = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (window.innerWidth >= 980){
        if (bottomOfViewport > documentHeight - window.innerHeight / 2) {
            navMediaIcons.classList.add('navMediaHidden');
          } else {
            navMediaIcons.classList.remove('navMediaHidden');
          }

    }
});


