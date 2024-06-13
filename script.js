var meuFormulario = document.getElementById("cadastro_livro");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_livro();
});

function nome_livro() {
  const primeiro_numero_inteiro = Number(document.getElementById("nome_livro").value);
  return primeiro_numero_inteiro;
}

function capturarSegundoNumeroInteiro() {
 const segundo_numero_inteiro = Number(document.getElementById("codigo_livro").value); 
 return segundo_numero_inteiro;
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