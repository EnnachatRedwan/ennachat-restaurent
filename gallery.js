window.addEventListener('scroll',function(){
    const header=document.querySelector('header')
    header.classList.toggle("stiky",window.scrollY > 0)
});