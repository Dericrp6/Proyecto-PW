const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');


/*console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)*/

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        /*alert("prueba")*/
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

/*para que se cierre el lightbox */
contenedorLight.addEventListener('click', (e)=>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

/*para que aparezca la imagen en el lightbox */
const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show') /*toggle que se agregue y se quite */
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}
