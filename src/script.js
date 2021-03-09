/**
 * Método Some
 * Verifica se há pelo menos um elemento igual 
 */
let nomes = ["Matheus", "Lucas", "Henrique"];

console.log(nomes.some(nomes => nomes === "Matheus"));

/**
 * Método Every
 * Verifica se todos estão dentro de uma determinada condição
 */
let nomes2 = [
    {nome: "Matheus", idade: 18},
    {nome: "Maria", idade: 25},
    {nome: "Henrique", idade: 15}
];
console.log(nomes2.every(nome => nome.idade >= 18));

if(nomes.every(nome => nome.idade >=18 )){
    console.log("Todos são maiores de 18");
}else{
    console.log("Ops alguém é menor");
}