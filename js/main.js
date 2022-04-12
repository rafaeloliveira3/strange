const menu = document.querySelector('.menu-burguer-container')

function menuAction (){
    menu.classList.toggle ('show')
}

menu.addEventListener('click', menuAction)