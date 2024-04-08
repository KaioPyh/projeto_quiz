const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para criar estilos em páginas web.",
            "Uma linguagem de programação usada para criar conteúdo dinâmico em páginas web.",
            "Um software para criar animações em páginas web."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o símbolo usado para comentários de uma linha em JavaScript?",
        respostas: [
            "//",
            "/* */",
            "#"
        ],
        correta: 0
    },
    {
        pergunta: "Qual dessas opções é um método de iteração sobre um array em JavaScript?",
        respostas: [
            "for i = 0; i < array.length; i++",
            "foreach(item => { })",
            "map(callback)"
        ],
        correta: 2
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara dois valores para igualdade de valor e tipo.",
            "Compara dois valores para igualdade de valor.",
            "Atribui um valor a uma variável."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
        respostas: [
            "Selecionar múltiplos elementos do DOM.",
            "Selecionar um elemento do DOM baseado em seu ID.",
            "Selecionar um elemento do DOM baseado em sua classe."
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função usada para chamar outras funções dentro de um loop.",
            "Uma função que é passada como argumento para outra função e executada depois de algum evento.",
            "Uma função usada para criar callbacks em JavaScript."
        ],
        correta: 1
    },
    {
        pergunta: "Qual desses métodos é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a finalidade do método 'addEventListener()' em JavaScript?",
        respostas: [
            "Adicionar um ouvinte de evento a um elemento do DOM.",
            "Adicionar um estilo CSS a um elemento do DOM.",
            "Adicionar um atributo a um elemento do DOM."
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Uma linguagem de marcação para definir a estrutura de uma página web.",
            "Uma interface que permite ao JavaScript interagir com o conteúdo HTML de uma página.",
            "Um modelo de objeto que representa uma página web como uma árvore de nós."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para converter um objeto JavaScript em uma string JSON?",
        respostas: [
            "JSON.stringify()",
            "JSON.parse()",
            "toString()"
        ],
        correta: 0
    }
];
// Pegamos o ID "quiz" da nossa div no html
const quiz = document.querySelector('#quiz')
// Pegamos o template do nosso HTML, ou seja, tudo que está nele vai ser puxado para cá 
const template = document.querySelector('template')
// Habilitamos a classe quizItem do nosso HTML
const quizItem = template.content.cloneNode(true)
quiz.appendChild(quizItem)

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou repetição 
for(const item of perguntas) {
    // adicionando as perguntas no HTML
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    // adicionando as opções de resposta no HTML
    for(let resposta of item.respostas) {
        //habilitando as opções de resposta para ficar clicaveis
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        // Arrumando as opções clicaveis das perguntas
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
           const estaCorreta = event.target.value == item.correta

           corretas.delete(item)
           if(estaCorreta) {
            corretas.add(item)
           }

           mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }



        quizItem.querySelector('dl').appendChild(dt)
    }
    // tirar a quarta opção
    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}