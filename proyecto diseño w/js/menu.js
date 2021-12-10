const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

/*console.log(menu)
console.log(hamburguer)*/

/*eventos*/ 

hamburguer.addEventListener('click', ()=>{
    /*alert("click")*/
    menu.classList.toggle("spread") /*para abrir menu*/
})

window.addEventListener('click', e=>{ /*dar click en cualquier parte de la pantalla*/
    /*console.log(e.target)*/
    if(menu.classList.contains('spread')&& e.target != menu && e.target != hamburguer ){

        menu.classList.toggle("spread")
    }
})
