document.body.classList.add('loading');
const firstVisitPZO = localStorage.getItem('visitedPZO');
const loadingScreen = document.querySelector('.loadingScreen');

if(firstVisitPZO == null){

    document.addEventListener('DOMContentLoaded', function() {
    setTimeout(()=> {
        loadingScreen.classList.add('loadingScreenHidden');
        document.body.classList.remove('loading');
        localStorage.setItem('visitedPZO', 1)
    },2000)
    
  });
  
}
else{
    setTimeout(()=> {
        loadingScreen.classList.add('loadingScreenHidden');
        document.body.classList.remove('loading');
    
    },300)
    
  }