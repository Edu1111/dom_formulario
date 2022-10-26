function enviarSaludo() {
  let $saludo = document.getElementById("saludo");
  let $nombre = document.getElementById("nombre").value;
  let $apellido = document.getElementById("apellido").value;
  
  if ($nombre === "" || $apellido === "") {
    $saludo.classList.remove("confirm");
    $saludo.classList.add("alert");
    $saludo.innerHTML = "Tienes que ingresar ambos datos";
  } else {
    $saludo.classList.remove("alert");
    $saludo.classList.add("confirm");
    $saludo.innerHTML = `Hola ${$nombre} ${$apellido}, gracias por rellenar el formulario de LarnU.`;
  }
}