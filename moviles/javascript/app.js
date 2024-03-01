
window.onload = login;

function login() {
  const btlogin =  document.getElementById("btnNombre");
  btlogin.addEventListener("click", hacerLogin);
}

function hacerlogin(){
  const name = document.getElementById("name");
  const user = name.Value;
}






const nombre=prompt("Escribe tu nombre de usuario:");
const clave=prompt("Introducen tu clave:");

 if (nombre=="Pepe") {
alert("Hola,"+nombre);
 } else {
 alert("Error, intentalo de nuevo");
 }

 if(clave=="858") {
 alert("Inicio de sesion finalziado")
 } else {
 alert("Incorrecto");
 }