var nome = "Lucas";
var idade = 35;
var profissao = "Tecnologia";

console.log(nome, idade, profissao);

const pessoa = {};

function cadastrar() {
  pessoa.nome = nome;
  pessoa.idade = idade;
  pessoa.profissao = profissao;
}

cadastrar();

console.log(
  `Olá! Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} e trabalho com ${pessoa.profissao}`
);
