let numeroSecreto = 0;
let intentos = 0;
let numeroIntentos = 'intento';
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log (numeroSecreto);
    if(numeroSecreto === numeroDeUsuario){
        asignarTexto('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTexto('p','El número secreto es menor');
        }
        else {
            asignarTexto('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
} 

function limpiarCaja() {
    document.querySelector ('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);;
    console.log(listaNumerosSorteados);
    //si ya sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexto('p','Ya se sortearon todos los números posibles');
    }
    else {
    // si el número generado esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

}

function condicionesInicales(){
    asignarTexto('h1','Juego del número secreto');
    asignarTexto('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinicarJuego(){
    //limpar caja
    limpiarCaja();
    //indicar mensaje de intervalos de números
    //generar el número aleatorio
    condicionesInicales();
    //inicializar el número de intentos
    //desabilitar el botón de nevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInicales();