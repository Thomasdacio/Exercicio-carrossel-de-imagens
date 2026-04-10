let imagem = document.getElementsByTagName('body')[0];
let setaEsquerda = document.querySelector(".seta-esquerda");
let setaDireita = document.querySelector(".seta-direita");
let saibaMais = document.querySelector(".saiba-mais");
let titulo = document.getElementsByTagName('h1')[0];

// <----- VERIFICAÇÕES SETA DIREITA ----->

function verificarCliqueDireito() {
    if (imagem.classList.contains('imagem-1') === true) {

        imagem.classList.remove('imagem-1');
        imagem.classList.add('imagem-2');

        setaEsquerda.classList.remove("seta-esquerda-nao-habilitada");
        setaEsquerda.classList.add("seta-esquerda-habilitada");

        titulo.innerText = "Título imagem 2";

        saibaMais.classList.add('saiba-mais-2');

    } else if (imagem.classList.contains('imagem-2') === true) {

        imagem.classList.remove('imagem-2');
        imagem.classList.add('imagem-3');

        titulo.innerText = "Título imagem 3";

        saibaMais.classList.add('saiba-mais-3');

    } else if (imagem.classList.contains('imagem-3') === true) {

        imagem.classList.remove('imagem-3');
        imagem.classList.add('imagem-4');
        
        setaDireita.classList.remove("seta-direita-habilitada");
        setaDireita.classList.add("seta-direita-nao-habilitada");

        titulo.innerText = "Título imagem 4";

        saibaMais.classList.add('saiba-mais-4');
    }
}

// <----- VERIFICAÇÕES SETA ESQUERDA ----->

function verificarCliqueEsquerdo() {
    if (imagem.classList.contains('imagem-2') === true) {

        imagem.classList.remove('imagem-2');
        imagem.classList.add('imagem-1');

        setaEsquerda.classList.remove('seta-esquerda-habilitada');
        setaEsquerda.classList.add('seta-esquerda-nao-habilitada');

        titulo.innerText = "Título imagem 1";

        saibaMais.classList.remove('saiba-mais-2');
        saibaMais.classList.add('saiba-mais-1');

    } else if (imagem.classList.contains('imagem-3') === true) {

        imagem.classList.remove('imagem-3');
        imagem.classList.add('imagem-2');

        titulo.innerText = "Título imagem 2";

        saibaMais.classList.remove('saiba-mais-3');
        saibaMais.classList.add('saiba-mais-2');

    } else if (imagem.classList.contains('imagem-4') === true) {

        imagem.classList.remove('imagem-4');
        imagem.classList.add('imagem-3');

        saibaMais.classList.remove('saiba-mais-4');
        saibaMais.classList.add('saiba-mais-3');

        titulo.innerText = "Título imagem 3";

        setaDireita.classList.remove("seta-direita-nao-habilitada");
        setaDireita.classList.add("seta-direita-habilitada");
    }
}