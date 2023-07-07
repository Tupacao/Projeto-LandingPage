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