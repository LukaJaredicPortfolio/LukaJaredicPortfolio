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

function pauseVideo(video) {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
  
  // Create an intersection observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // If the video is not intersecting with the viewport, pause it
      if (entry.isIntersecting) {
        // Video is in the viewport, do nothing
      } else {
        // Video is not in the viewport, pause it
        pauseVideo(entry.target.querySelector('iframe'));
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed
  
  // Get the video wrapper element
  const videoWrapper = document.querySelector('.youtubeVideoWrapper');
  
  // Observe the video wrapper
  if (videoWrapper) {
    observer.observe(videoWrapper);
  }
