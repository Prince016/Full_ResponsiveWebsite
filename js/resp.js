burger= document.querySelector('.burger');
navbar= document.querySelector('.navbar');
navList= document.querySelector('.nav-list');
rightNav= document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('vis-class-resp');
    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('vis-class-resp');
})