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

// iniciar img lo guarda en una variable llamada img (que es lo que esta guardado en el id img)
// despues mediante el listener  al  mouse pasar por encima usa la funcion peligro 
function iniciar() {
  var imagen = document.getElementById('img');
  imagen.addEventListener('mouseover', peligro, false);
}

// peligro toma la variable imagen que lo que esta guardado en el id img y cambia el valor por lo que este en 
// src (en este caso la imagen guardada en la carpeta img)
function peligro() {
  var imagen = document.getElementById('img').src = "img/img2.avif";
}

