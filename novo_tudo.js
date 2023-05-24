let nome = prompt("Entre com o seu nome: ");
let idade = prompt("Entre com sua idade: ");

let cadastro = [];

function registro(){
    cadastro.push(nome, idade);
}

registro();

console.log(cadastro);