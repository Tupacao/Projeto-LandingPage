let contador = 0;

function Abrir (){
    if(contador == 0){ 
        document.querySelector('#barra2').style.display = 'block'
        contador++;
    }
    else{
        document.querySelector('#barra2').style.display = 'none'
        contador = 0;
    }
}

function Animacao_1 () {
    const esquerda = document.querySelector('[data-animate = left]')
    esquerda.classList.add('animate')
}

function Animacao_2 () {
    const esquerda = document.querySelector('[data-animate = rigth]')
    esquerda.classList.add('animate')
}

function Animacao_3 () {
    const esquerda = document.querySelector('.servicos')
    esquerda.classList.add('animate')
}

function Animacao_4 () {
    const esquerda = document.querySelector('.diferencial')
    esquerda.classList.add('animate')
}