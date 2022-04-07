const showSideButton = document.querySelector('#menu-btn');
const CloseSideBar = document.querySelector('#close-btn');
const themeButton = document.querySelector('.theme-togller');
const sideBar = document.querySelector('aside');
const moon = document.querySelector('.bxs-moon');
const sun = document.querySelector('.bxs-sun');
showSideButton.addEventListener('click',()=>{

// sideBar.style.display = 'block';
sideBar.style.transform = 'translateX(0)';


});
CloseSideBar.addEventListener('click',()=>{
  
    // sideBar.style.display = 'none';
    sideBar.style.transform = 'translateX(-100%)';
    
    
    });
    themeButton.addEventListener('click',()=>{
        document.querySelector('body').classList.toggle('dark__mode-variables');
        sun.classList.toggle('active');
        moon.classList.toggle('active');
    });
    window.addEventListener('resize',()=>{
        if(window.innerWidth > 768){
            sideBar.style.transform = 'translateX(0)';
        }if(window.innerWidth < 769){
            sideBar.style.transform = 'translateX(-100%)';
        }
    });
    document.addEventListener('DOMContentLoaded',()=>{
        if(window.innerWidth < 769){
            sideBar.style.transform = 'translateX(-100%)';
        }
    })