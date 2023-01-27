//Variáveis//
function resultado() {

const nome = document.getElementById("nome").value;
const idade = document.getElementById("idade").value;
const linguagem = document.getElementById("linguagem").value;
const gostando = document.getElementById ("gostando").value;
const resposta = document.getElementById("resposta");

if (gostando == 1){
  resposta.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}, que bom que está gostando dessa linguagem! Continue estudando e você terá muito sucesso.`
} else if (gostando == 2) {
  resposta.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}, que pena que não esta gostando, já tentou aprender outras linguagens?`
} else {
  resposta.innerHTML = `ERRO, preencha os campos corretamente`
}
}