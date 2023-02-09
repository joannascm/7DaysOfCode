//Fluxo de decisão/
function perguntaNomeEArea() { 
    let nome = document.getElementById("nome").value;
    let area = document.getElementById("area").value.toLowerCase();
    let perguntaLinguagem = document.getElementById("perguntaLinguagem");
    let linguagem = document.getElementById("linguagem");
    const botao2 = document.getElementById("botao2");

    if (area == "front-end"){
        perguntaLinguagem.innerHTML =`${nome}, você quer aprender React ou Vue?`;
        linguagem.style.visibility="visible";
        botao2.style.visibility="visible";
    } else if (area == "back-end"){
        perguntaLinguagem.innerHTML =`${nome}, você quer aprender C# ou JAVA?`;
        linguagem.style.visibility="visible";
        botao2.style.visibility="visible";
    } else {
        perguntaLinguagem.innerHTML =`Você digitou uma opção invalida, tente novamente!`;
    }
    }
    
function perguntaSobreEspecializacao() {
    
    const perguntaEspecializacao = document.getElementById("perguntaEspecializacao");
    let especializacao = document.getElementById("especializacao");
    const perguntaLinguagens = document.getElementById("perguntaLinguagens");
    const botao3 = document.getElementById("botao3");
    
    perguntaEspecializacao.innerHTML = `Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack`;
    especializacao.style.visibility="visible";
    botao3.style.visibility="visible";
    
}

function perguntaAprenderNova(){
     
    const perguntasLinguagens = document.getElementById("perguntasLinguagens");
    let outrasLinguagens = document.getElementById("outrasLinguagens");
    const botao4 = document.getElementById("botao4");

    if (especializacao.value == "1"){
        perguntasLinguagens.innerHTML = `Continue se especializando em ${linguagem.value} para dominar a área de ${area.value}! Tem mais alguma tecnologia que você gostaria de aprender?`;
        outrasLinguagens.style.visibility="visible";
        botao4.style.visibility="visible";          
    } else if (especializacao.value == "2"){
        perguntasLinguagens.innerHTML = `Chegou a hora de começar a aprender outras linguagens além de ${linguagem.value} se você quer se tornar Fullstack! Tem mais alguma tecnologia que você gostaria de aprender?`;
        outrasLinguagens.style.visibility="visible";
        botao4.style.visibility="visible";
    } else {
        perguntasLinguagens.innerHTML =`Você digitou uma opção invalida, tente novamente!`;
    }
}

function aprenderNovasLinguagens() {

    const perguntaNovaTecnologia = document.getElementById("perguntaNovaTecnologia");
    let novaTecnologia = document.getElementById("novaTecnologia");
    const botao5 = document.getElementById("botao5");
    
    if (outrasLinguagens.value.toLowerCase() == "sim"){
        perguntaNovaTecnologia.innerHTML="Qual seria?";
        novaTecnologia.style.visibility="visible";
        botao5.style.visibility="visible";
    } else if (outrasLinguagens.value.toLowerCase() == "não"){
        perguntaNovaTecnologia.innerHTML ="Agradeço a sua participação!";
    } else {
        perguntaNovaTecnologia.innerHTML ="Digite uma opção válida";
    }
}

function final(){
    const final = document.getElementById("final");

    final.innerHTML="Que bacana, em breve você atingirá seus objetivos. Agradeço a sua participação!";
}