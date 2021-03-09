/**
 * FUNÇÃO ANÔNIMA
 * A função reduce que se encontra dentro da função adicionar, é uma função anônima.
 */
function adicionar(...numeros){
    let total = numeros.reduce(function(total, proximo){
        return total + proximo
    });

    console.log(total);
}

adicionar(1,2,3,4,5);

/**
 * Esse exemplo aqui é o mesmo que o de disse. 
 * A diferença é que ele é uma versão mais simplificada. 
 * Substitui a palavra function por =>
 */
 function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => {
        return total + proximo
    });

    console.log(total);
}

adicionar(1,2,3,4,5);

/**
 * E essa versão aqui é mais reduzida ainda. 
 */
 function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => total + proximo);

    console.log(total);
}

adicionar(1,2,3,4,5);