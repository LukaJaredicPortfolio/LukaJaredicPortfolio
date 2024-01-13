document.body.classList.add('loading');
const firstVisitP = localStorage.getItem('visitedP');
const loadingScreen = document.querySelector('.loadingScreen');

if(firstVisitP == null){

    document.addEventListener('DOMContentLoaded', function() {
    setTimeout(()=> {
        loadingScreen.classList.add('loadingScreenHidden');
        document.body.classList.remove('loading');
        localStorage.setItem('visitedP', 1)
    },1000)
    
  });
  
}
else{
    setTimeout(()=> {
        loadingScreen.classList.add('loadingScreenHidden');
        document.body.classList.remove('loading');
    
    },300)
    
  }