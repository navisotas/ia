const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "supra mk4 ou 350z?",
        alternativas: [
            {
                texto: "supra",
                afirmacao: "ficol no passado"
               
            },
            {
                texto: "350",
                afirmacao: "atualmente é a melhor opção"
            },
        ]
    },
    {
        enunciado: "2jz ou rotativo",
        alternativas: [
            {
                texto: "2jz",
                afirmacao: ",é melhor para velocidade"
            },
            {
                texto: "rotativo",
                afirmacao: ",é o mais eficiente"
            },
        ]
    },
    {
        enunciado: "oque é rachi-roku",
        alternativas: [
            {
                texto: "um anime",
                afirmacao: ",rachi roku é o apelido do carro AE86"
            },
            {
                texto: "um carro",
                afirmacao: ",o famoso AE86"
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
     atual++;
     mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();