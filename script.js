const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const startPauseBt = document.querySelector('#start-pause')
const musica = new Audio('./sons/luna-rise-part-one.mp3')
const beep = new Audio('./sons/beep.mp3')
const play = new Audio('./sons/play.wav')
const pause = new Audio('./sons/pause.mp3')

let tempoDecorridoEmSegundos = 5
let intervaloId = null

musica.loop = true
//beep.loop = true
//play.loop = true
//pause.loop = true

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

const botaoIniciar = document.querySelector('.app__card-primary-button')

focoBt.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'foco')
    //banner.setAttribute('src', '/imagens/foco.png')
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'descanso-curto')
    //banner.setAttribute('src', '/imagens/descanso-curto.png')
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    //html.setAttribute('data-contexto', 'descanso-longo')
    //banner.setAttribute('src', '/imagens/descanso-longo.png')
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br> <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar a supuerfície,<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}

const contagemReressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        zerar()
        alert('Tempo finalizado!')
        beep.play()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if (intervaloId) {
        zerar()
        pause.play()
        return
    }
    intervaloId = setInterval(contagemReressiva, 1000)
    play.play()
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}

// const displayTime = document.querySelector('#timer')


// const duracaoFoco = 1500;
// const duracaoDescansoCurto = 300;
// const duracaoDescansoLonto = 900;

// Adicionado sons de start e pause ao clicar em "Começar", além de alerta ao finalizar a contagem regressiva.