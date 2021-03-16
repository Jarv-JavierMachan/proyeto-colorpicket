"use strict";

var color = document.querySelector('#color');
var salida = document.querySelector('#salida'); //elemento color escucha un evento

color.addEventListener("input", function () {
  var value = color.value; 
  // console.log(value)
  // inner destruye lo que tenia salida y lo modifica por value

  salida.innerHTML = value;
  salida.style.background = value;
  salida.style.color = "#fff";
}); //console.log(color)