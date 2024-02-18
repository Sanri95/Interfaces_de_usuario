// funciones para editar el boton

// se  declara la constante que corresponde al ID .btn
const btn = document.querySelector('.btn');

// se usa la funcion de escuchar para cuando se de clic cambie el estilo del boton
btn.addEventListener('click', ()=>{
    btn.style.backgroundColor ='#ffac09';
    btn.style.boxshadow ='0 0 10px #ffac09'; 
});