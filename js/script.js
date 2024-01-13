const scrollUpArrowWrapper = document.querySelector('.scrollUpArrowWrapper');
const navMediaIcons = document.querySelector('.navMediaIcons');
document.body.classList.add('loading');
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

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loadingScreen');
    loadingScreen.classList.add('loadingScreenHidden');
    document.body.classList.remove('loading');

  });