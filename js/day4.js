//Mais loops e randomização
let numeroSorteado = 0;
var valorCorreto = document.getElementById("valorCorreto")

function sorteio(){
    numeroSorteado = parseInt(Math.random()*10);

    console.log(numeroSorteado);
}
sorteio()

let clicks = 0;

function tentativas() {
  clicks += 1;

  if (clicks > 3) {
    alert(`Você atingiu o limite de três tentativas. O número sorteado era "${numeroSorteado}", tente novamente!`);
    location.reload();
  }
  else {
    verifica()
  }
}

function verifica(){
    var num = document.getElementById("num").value;

    if( num>10 || num<0 ){
        alert('⚠️ VALOR INVÁLIDO ⚠️')
    }

    if(num<numeroSorteado){
        alert('❌ O número para ser encontrado é MAIOR ❌');
    } else if (num>numeroSorteado){
        alert('❌ O número para ser encontrado é MENOR ❌');
    } else {
        alert('✅Parabéns, você acertou o número✅');
        location.reload();
    }
}

