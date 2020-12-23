function colocar(lugar) {
    if(document.getElementById(lugar).innerHTML == "" && !gameOver){
        cambiarLetra();
        document.getElementById(lugar).innerHTML = letra;
        cambiarTituloSegun(letra)
    }
}

var letra = 'O';
function cambiarLetra() {
    if(letra == 'O'){
        letra = 'X';
    }else{
        letra = 'O';
    }  
}

function gano(candidato){
    return (document.getElementById('esqSupIzq').innerHTML == candidato
    && document.getElementById('medioSup').innerHTML == candidato
    && document.getElementById('esqSupDer').innerHTML == candidato)

    || (document.getElementById('esqSupIzq').innerHTML == candidato
    && document.getElementById('medio').innerHTML == candidato
    && document.getElementById('esqInfDer').innerHTML == candidato)

    ||(document.getElementById('esqSupIzq').innerHTML == candidato
    && document.getElementById('medioIzq').innerHTML == candidato
    && document.getElementById('esqInfIzq').innerHTML == candidato)

    ||(document.getElementById('medioSup').innerHTML == candidato
    && document.getElementById('medio').innerHTML == candidato
    && document.getElementById('medioInf').innerHTML == candidato)

    ||(document.getElementById('esqSupDer').innerHTML == candidato
    && document.getElementById('medio').innerHTML == candidato
    && document.getElementById('esqInfIzq').innerHTML == candidato)

    ||(document.getElementById('esqSupDer').innerHTML == candidato
    && document.getElementById('medioDer').innerHTML == candidato
    && document.getElementById('esqInfDer').innerHTML == candidato)

    ||(document.getElementById('medioDer').innerHTML == candidato
    && document.getElementById('medio').innerHTML == candidato
    && document.getElementById('medioIzq').innerHTML == candidato)

    ||(document.getElementById('esqInfDer').innerHTML == candidato
    && document.getElementById('medioInf').innerHTML == candidato
    && document.getElementById('esqInfIzq').innerHTML == candidato)
}

function quienSigue(){
    if(letra == 'O'){
        document.getElementById('subtitulo').innerHTML = 'Turno de x';
    }else{
        document.getElementById('subtitulo').innerHTML = 'Turno de O';
    }
}

var gameOver = false
function cambiarTituloSegun(propi){
    if(gano(propi)){
        document.getElementById('titulo').innerHTML = '<h1>Gano ' + propi + '</h1>';
        gameOver = true
    }else{
        quienSigue()
    }
}