//Função entrar
function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite o seu nome: ');

    if(texto == '' || texto == null){
        alert('Digite o seu nome novamente!')
        area.innerHTML = 'Bem vindo...';
    }else{
        area.innerHTML =  'Bem vindo ' + texto;
    }
}

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('Digite o seu sobrenome: ');
    area.innerHTML = nome + " " + texto;
}

/*
//Sobre o while
var x = 0;
while(x < 10){
    document.write("O valor de x é: " + x + "</br>");
    x++;
}

//Sobre o for
for(var a = 0; a < 10; a++){
    document.write("O valor de a é: " + a + "</br>");
    x++;
}*/

/*document.write("Escolha o seu pedido: </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Coca-Cola / 3 - Água gelada </br></br>");

function pedir(){
    var x = prompt("O que deseja pedir?");
    switch(x){

        case "0":
            alert("Você pediu  um sorvete;");
            break;

        case "1":
            alert("Você pediu suco");
            break;

        case "2": 
            alert("Você pediu  uma Coca-Cola");
            break;

        case "3": 
        alert("Você pediu uma água gelada");
        break;

        default:
            alert("Essa opção não existe.");    
    }
}*/

//Executa de tempo em tempo
/*function acao(){
    document.write("Executando...</br>");
}*/

//setInterval(acao, 1000);

//setTimeout(acao, 3000);