var meuFormulario = document.getElementById("cadastro_livro");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_livro();
});

function turma() {
  const turma = Number(document.getElementById("Turma").value);
  return turma;
}

function sala() {
 const sala = Number(document.getElementById("Sala").value); 
 return sala;
}


function somar() {
  let primeiro_numero_inteiro = capturarPrimeiroNumeroInteiro();
  let segundo_numero_inteiro = capturarSegundoNumeroInteiro();
  let resultado_soma = primeiro_numero_inteiro + segundo_numero_inteiro;
  imprimirResultadoNaTela(genero_textual);
}


function imprimirResultadoNaTela(resultado_soma) {
  document.getElementById("genero_textual").value = resultado_soma;
}