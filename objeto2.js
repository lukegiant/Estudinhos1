var Cliente = {
    nome: "Lucas",
    idade: 35,
    email: "juv.lucas@gmail.com",
    telefones: [61981470372, 6134832261] //array de telefones salvo em uma chave do objeto
}

// Aqui fazemos um filtro por tipo de conteúdo armazenado nas chaves do Objeto e exibimos apenas
//os que não são do tipo "Object" e "Function"
for(let chave in Cliente){
    let tipo = typeof(Cliente[chave]);
   if(tipo !== 'object' && tipo !== 'function'){
        console.log(Cliente[chave]);
        console.log(tipo);
    }

}
//Aqui faremos um teste de alteração para commit e push no github