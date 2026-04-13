// nesse caso para pegar os elementos do DOM é melhor utilizar o `const` do que o `let`, pois os elementos não vão ser reatribuídos, apenas vamos alterar as classes e o texto deles. O `const` é mais adequado para variáveis que não serão reatribuídas, enquanto o `let` é mais indicado para variáveis que podem ser reatribuídas.
const body = document.body;
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
const saibaMais = document.querySelector(".saiba-mais");
const titulo = document.querySelector("h1");

// aqui criamos arrays para armazenar os títulos, as classes das imagens e as classes do botão "Saiba Mais". Isso torna o código mais organizado e fácil de manter, pois podemos adicionar ou remover imagens e títulos sem precisar alterar a lógica do código.
const titulos = [
    "Título imagem 1",
    "Título imagem 2",
    "Título imagem 3",
    "Título imagem 4"
];

const classesImagem = [
    "imagem-1",
    "imagem-2",
    "imagem-3",
    "imagem-4"
];

const classesSaibaMais = [
    "saiba-mais-1",
    "saiba-mais-2",
    "saiba-mais-3",
    "saiba-mais-4"
];

let imagemAtual = 0;

// aqui foi refatorado a função para atualizar o carrossel, centralizando toda a lógica de atualização em um único lugar. Isso torna o código mais limpo e fácil de entender, além de evitar repetição de código.
function atualizarCarrossel() {
    body.className = classesImagem[imagemAtual];
    titulo.innerText = titulos[imagemAtual];

    saibaMais.className = "saiba-mais " + classesSaibaMais[imagemAtual];

    if (imagemAtual === 0) {
        setaEsquerda.className = "seta-esquerda seta-esquerda-nao-habilitada";
    } else {
        setaEsquerda.className = "seta-esquerda seta-esquerda-habilitada";
    }

    if (imagemAtual === classesImagem.length - 1) {
        setaDireita.className = "seta-direita seta-direita-nao-habilitada";
    } else {
        setaDireita.className = "seta-direita seta-direita-habilitada";
    }
}

// aqui foi refatorado as funções de clique para a seta direita e esquerda, utilizando a variável `imagemAtual` para controlar qual imagem está sendo exibida. Isso torna o código mais simples e fácil de entender, além de evitar repetição de código.
function verificarCliqueDireito() {
    if (imagemAtual < classesImagem.length - 1) {
        imagemAtual++;
        atualizarCarrossel();
    }
}

function verificarCliqueEsquerdo() {
    if (imagemAtual > 0) {
        imagemAtual--;
        atualizarCarrossel();
    }
}

atualizarCarrossel();


// let imagem = document.getElementsByTagName('body')[0];
// let setaEsquerda = document.querySelector(".seta-esquerda");
// let setaDireita = document.querySelector(".seta-direita");
// let saibaMais = document.querySelector(".saiba-mais");
// let titulo = document.getElementsByTagName('h1')[0];

// // <----- VERIFICAÇÕES SETA DIREITA ----->

// function verificarCliqueDireito() {
//     if (imagem.classList.contains('imagem-1') === true) {

//         imagem.classList.remove('imagem-1');
//         imagem.classList.add('imagem-2');

//         setaEsquerda.classList.remove("seta-esquerda-nao-habilitada");
//         setaEsquerda.classList.add("seta-esquerda-habilitada");

//         titulo.innerText = "Título imagem 2";

//         saibaMais.classList.add('saiba-mais-2');

//     } else if (imagem.classList.contains('imagem-2') === true) {

//         imagem.classList.remove('imagem-2');
//         imagem.classList.add('imagem-3');

//         titulo.innerText = "Título imagem 3";

//         saibaMais.classList.add('saiba-mais-3');

//     } else if (imagem.classList.contains('imagem-3') === true) {

//         imagem.classList.remove('imagem-3');
//         imagem.classList.add('imagem-4');
        
//         setaDireita.classList.remove("seta-direita-habilitada");
//         setaDireita.classList.add("seta-direita-nao-habilitada");

//         titulo.innerText = "Título imagem 4";

//         saibaMais.classList.add('saiba-mais-4');
//     }
// }

// // <----- VERIFICAÇÕES SETA ESQUERDA ----->

// function verificarCliqueEsquerdo() {
//     if (imagem.classList.contains('imagem-2') === true) {

//         imagem.classList.remove('imagem-2');
//         imagem.classList.add('imagem-1');

//         setaEsquerda.classList.remove('seta-esquerda-habilitada');
//         setaEsquerda.classList.add('seta-esquerda-nao-habilitada');

//         titulo.innerText = "Título imagem 1";

//         saibaMais.classList.remove('saiba-mais-2');
//         saibaMais.classList.add('saiba-mais-1');

//     } else if (imagem.classList.contains('imagem-3') === true) {

//         imagem.classList.remove('imagem-3');
//         imagem.classList.add('imagem-2');

//         titulo.innerText = "Título imagem 2";

//         saibaMais.classList.remove('saiba-mais-3');
//         saibaMais.classList.add('saiba-mais-2');

//     } else if (imagem.classList.contains('imagem-4') === true) {

//         imagem.classList.remove('imagem-4');
//         imagem.classList.add('imagem-3');

//         saibaMais.classList.remove('saiba-mais-4');
//         saibaMais.classList.add('saiba-mais-3');

//         titulo.innerText = "Título imagem 3";

//         setaDireita.classList.remove("seta-direita-nao-habilitada");
//         setaDireita.classList.add("seta-direita-habilitada");
//     }
// }