function cadastroPessoa(info) {
   let novosDados = {
       ...info,
       cargo: 'Programador',
       status: 1,
       codigo: '65236523652'
   }
    return novosDados; 
}

console.log(cadastroPessoa({nome: 'Matheus', sobrenome: 'Fraga', anoInicio: 2045}));