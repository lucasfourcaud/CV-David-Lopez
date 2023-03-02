
document.getElementById('boton').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("demo").innerHTML = "Soy un ingeniero en robotica con conocimientos en ciencias informaticas e ingenieria electrica. He trabajado en entornos academicos y empresariales."
} 
document.getElementById('boton_color').addEventListener('click', function() {
  document.body.style.backgroundColor = '#FFA07A';
});
document.getElementById('boton_default').addEventListener('click', function() {
  document.body.style.backgroundColor = '#FFFFFF';
});

const form = document.querySelector('#Formulario-de-contacto');

form.addEventListener('submit', function(event) {
  event.preventDefault(); //(esto lo saque de inet, pero no se si esta bien hecho o no)
  
  // Evita el envío por defecto
  // Aquí va el código para procesar y enviar el formulario
  // Puedes mostrar un mensaje de éxito o error
  // en la misma página o redirigir a otra
});

