function inserir(param) {

  var valorAtual = document.getElementById("visor").innerHTML;
  
  // se for zero, ele coloca só o parâmetro
  // se não, ele coloca o valor atual + paramatro
  if(valorAtual == 0) {
    document.getElementById("visor").innerHTML = param
  } else {
    document.getElementById("visor").innerHTML = document.getElementById("visor").innerHTML + param;
  }
}

function limpar() {
  document.getElementById("visor").innerHTML = "0";
}

function deletar() {
  var valorAtual = document.getElementById("visor").innerHTML;
  valorAtual = valorAtual.slice(0, -1);
  document.getElementById("visor").innerHTML = valorAtual;
}

// eval() é uma função perigosa
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval
function calcular() {
  document.getElementById("visor").innerHTML = eval(document.getElementById("visor").innerHTML);
}