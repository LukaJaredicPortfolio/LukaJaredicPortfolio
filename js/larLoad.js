document.body.classList.add('loading');
const firstVisitLAR = localStorage.getItem('visitedLAR');
const loadingScreen = document.querySelector('.loadingScreen');

if(firstVisitLAR == null){

    document.addEventListener('DOMContentLoaded', function() {
    setTimeout(()=> {
        loadingScreen.classList.add('loadingScreenHidden');
        document.body.classList.remove('loading');
        localStorage.setItem('visitedLAR', 1)
    },2000)
    
  });
  
}
else{
    setTimeout(()=> {
        loadingScreen.classList.add('loadingScreenHidden');
        document.body.classList.remove('loading');
    
    },300)
    
  }