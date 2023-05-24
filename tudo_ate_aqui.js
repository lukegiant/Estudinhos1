let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 600, 400);

function bola(){
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();
}

tela.onclick = bola;

//-------------------------------------------------------------------------------------
//Jogo do adivinha segredo

function sorteia() {
    return Math.round(Math.random() * 10);
}

function aleatorios(quant) {

    var segredos = [];
    var contador = 1;


    while (contador <= quant) {
        var numero = sorteia();
        var repetido = false;

        if (numero !== 0) {
            for (var num = 0; num < segredos.length; num++) {
                if (segredos[num] == numero) {
                    repetido = true;
                    break;
                }
            }
            if (repetido == false) {
                segredos.push(numero);
                contador++;
            }
        }

    }
    return segredos;
}

var segredos = aleatorios(3);

console.log(segredos);

let entrada = document.getElementById('palpite');
entrada.value = "";
entrada.focus();


function verifica() {

    let check = false;

    for (let controle = 0; controle < segredos.length; controle++) {
        if (entrada.value == segredos[controle]) {
            alert("Você acertou!");
            check = true;
            break;
        }
    }
    if (check == false) {
        alert("Você errou!");
    }

    console.log(entrada.value);
    entrada.value = "";
    entrada.focus();
}

let but = document.getElementById('enviar');
but.addEventListener('click', verifica);

//-------------------------------------------------------------------------------------

let nomes = [];
let idades = [];
let emails = [];
let cadastros = [nomes, idades, emails];

let botaoCadastro = document.getElementById('cadastrar');
botaoCadastro.addEventListener('click', registro);

var nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let email = document.getElementById('email');

function registro() {
    nomes.push(nome.value);
}