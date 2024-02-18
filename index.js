// funciones para editar el boton

// se  declara la constante que corresponde al ID .btn
const btn = document.querySelector('.btn');

// se usa la funcion de escuchar para cuando se de clic cambie el estilo del boton
btn.addEventListener('click', ()=>{
    btn.style.backgroundColor ='#ffac09';
    btn.style.boxshadow ='0 0 10px #ffac09'; 
});

//funcion para cambiar la imagen cuando pase el ursor por encima
// se inicia un evento de escuchar con los parametros load iniciar el false para que cuando pase
// el cursor este listo usarla funcion iniciar 
window.addEventListener('load', iniciar, false);