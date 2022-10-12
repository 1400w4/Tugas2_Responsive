const MenuNavbar = document.querySelector('#menuNavbar');
const ActiveNavbar = document.querySelector('#activeNavbar');
const RemoveNavbar = document.querySelector('#exit_extend_navbar');
const AnimationExtend = document.querySelector('#animate_extend_navbar');

MenuNavbar.addEventListener('click', function(){
    ActiveNavbar.classList.toggle('navbar-active');
})

RemoveNavbar.addEventListener('click', function(){
    ActiveNavbar.classList.remove('navbar-active');
})

