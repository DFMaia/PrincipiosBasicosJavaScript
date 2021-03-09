//Para mapear cada um dos index e somar com o valor do index
const lista = [1,2,3,4,5,6,];

const novaLista = lista.map(function(item, index) {
   return index + item; 
});

console.log(novaLista);

//Reduce vai somar com o index atual mais o próximo.
const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});

console.log(soma);

//Encontrando um número na lista. 
const find = lista.find(function(item){
    return item === 6;
});

console.log(find);