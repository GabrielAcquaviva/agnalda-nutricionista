var titulo = document.querySelector(".titulo");
titulo.textContent = "Agnalda Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var validaPeso = true;
var validaAltura = true;

if (peso <= 0 || peso >= 1000) {
  console.log("Peso inválido!");
  validaPeso = false;
  tdImc.textContent = "Peso inválido!"
}

if (altura <= 0 || altura >= 3.00) {
  console.log("Altura inválida!");
  validaAltura = false;
  tdImc.textContent = "Altura inválida!"
}

if (validaAltura && validaPeso) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}
