/**
 * Quando uma função recebe uma lista de elementos, é necessário que tenha "..." anted do parâmetro.
 */
function minhaLista(...nomes) {
    console.log(nomes);
}

minhaLista("Matheus", "Lucas", "João");