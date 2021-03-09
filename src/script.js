/**
 * Método includes
 * Verifica se há um elemento dentro da lista. 
 * @param value @returns true or false.
 */
let nomes = ['Matehus', 'Lucas', 'João'];
console.log(nomes.includes('Lucas'));

if(nomes.includes('Matheus')){
    console.log('Matheus está na lista');
}else {
    console.log('Matheus não está na lista');
}


/**
 * Método endsWith
 * Verifica se a palavra termina com determinado char ou determinado String
 * @param value @returns true or false
 */
let nome = "Matheus";
console.log(nome.endsWith("eus"));

/**
 * Método startsWith
 * O mesmo princípio do método acima, mas a verificação começa no inicio da String. 
 */
 console.log(nome.startsWith("M"));