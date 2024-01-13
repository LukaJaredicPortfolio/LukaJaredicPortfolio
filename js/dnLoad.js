document.body.classList.add('loading');
const firstVisitDN = localStorage.getItem('visitedDN');
const loadingScreen = document.querySelector('.loadingScreen');

if(firstVisitDN == null){

    document.addEventListener('DOMContentLoaded', function() {
    setTimeout(()=> {
        loadingScreen.classList.add('loadingScreenHidden');
        document.body.classList.remove('loading');
        localStorage.setItem('visitedDN', 1)
    },1200)
    
  });
  
}
else{
    setTimeout(()=> {
        loadingScreen.classList.add('loadingScreenHidden');
        document.body.classList.remove('loading');
    
    },300)
    
  }