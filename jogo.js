//Definindo valores 0 para largura e altura
let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

let criaMosquitoTempo = 1500


//Tempos de jogo em cada dificuldade 
let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil ') {
    criaMosquitoTempo = 1000
} else if (nivel === 'god') {
    criaMosquitoTempo = 750
}


//Achando a largura e altura da pagina e criando a função para ajustar o tamanho da tela
function ajustaTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
} ajustaTamanhoJogo()

//Criando o cronometro de tempo para clicar no mosquito 
let cronometro = setInterval(function () {
    tempo -= 1

    //Limpando a crianção de mosquito após vitoria e criando o fluxo de vitoria
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //Removendo o mosquito anterior caso exista | Remoção Automatica de elementos
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }


    //Gerando posiçoes aleatorias para  o mosquito 
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    //operador ternario para o mosquito não aparecer em posição negativa
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)

    //Criando elemento html 
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

//Criando tamanho aleatorio do mosquito 
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

//Criando lado aleatorio 
function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'LadoA'

        case 1:
            return 'LadoB'
    }
}
