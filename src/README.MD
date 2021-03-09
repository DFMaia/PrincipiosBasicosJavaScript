
# Estudo JS

### Se estiver aqui para esutdar, recomendo ler os tópicos abaixo :point_down:

> **Document**
> >  - Document se refere ao que está dentro da página. 
> >  - document.getElementById('idDaDiv') "valor" (não sei ao certo ainda) PARA o HTML.
> > - document.write escreve diretamente na tela. Não usar. Eu sei que é má prática.
>
> **Window**
> > - Window se refere a janela. 
>
> **prompt()**
> > - Todo valor passado dentro de um prompt é avaliado como uma String.
>
> **this**
> > - this. refere-se ao elemento em questão. Muito parecido ao this de atributos do Java. 
>
> **onclick**
> > - onclick alguma ação será executada ao clicar no elemento. 
> > - onclick = "document.getElementById('idDaDiv') poderá alterar HTML quando se referencia uma DIV ou outro elemento HTML quando há um id. 
>
> **innerHTML**
> > - O innerHTML é um join. Ele receberá o valor do prompt e colocará no div que tem o id area ou com qualquer outra coisa que seja aceita.  
>
> **Temporizador**
> > - setinterval(função, tempoEmMilisegundos); -> Executa uma função milisegundo em milisegundo determinado pelo parâmetro "tempoEmMilisegundos".
> > - setTimeout(fução, tempoEmMilisegundos) -> Executa uma função depois de um tempo determinado no parâmetro "tempoEmMilisegundos".
> > - clearTimer(var) interrompe o setInterval. Basta colocar o setiterval dentro de um var e colocar essa variável dentro do clearTimer(var).
>
> **Local Storage**
> > - Quando o usuário fecha a janela/sessão, os dados do usuário são salvos. 
> > - localStorage.setItem("nome", "Diego"); Seta um nome para a variável "nome" OU localStorage.nome = "Diego";
> > - localStorage.getItem("nome") retorna o valor da vaiável "nome";
> > - localStorage.removeItem("nome") remove o valor.
>
> **Session Storage**
> > - Possui a mesma lógica do item acima :point_up:, no entando quando o usuário fecha a janela/sessão, os dados não são salvos. 
>
> **var, let e const**
> > - **var**: declaração de variável.
> > - **let**: declaração de variável somente dentro do escopo do qual foi criado. Se for em um escopo global, todo escopo interno poderá acessar essa variável
> > - **const**: variável com valor imutável. 
>
> **String**
> > - Concatenação
> > > - **Forma 1**: "Meu nome " + variavelNome + " e tenho " + variavelIdade + " anos de idade".
> > > - **Forma 2**: \` Meu nome é ${variavelNome} e tenho ${variavelIdade} anos de idade \`
>
> **Objeto**
> > - Criação de Objeto
> > > ~~~ javascript
> > > const pessoa = {
> > > 	nome: "Matheus",
> > > 	sobrenome: "Fraga",
> > > 	idade: 10,
> > > 	cargo: "desenvolvedor"
> > > };
> > > ~~~
> > Para descontruir o objeto (coletar somente um valor do objeto):
> > > ~~~~javascript
> > > let { nome } = pessoa;
> > > ~~~~ 
> > > `O retorno da variável nome será: ` Matheus
> > 
> > É possível pegar mais de um valor:
> > > ~~~ javascript
> > > let { idade, cargo } = pessoa;
> > > ~~~  
> > > `O retorno será: da variável idade e cargo:` 10 e desenvolvedor. 
> >
> > Se você quiser que o nome da variável seja diferente daquela dentro do objeto:
> > > ~~~ javascript
> > > let { cargo: programador } = pessoa;
> > > ~~~ 
> > > `O retorno da variável programador: ` programador.
> > > Ao invés de ter uma variável de nome "cargo" que é o mesmo dentro do objeto, instanciei uma variável com outro nome "programador".
> 
> **Array**
> > - Quando consultar um elemento inexistente no array, o retorno será de -1
> > - array.indexOf["item não existente"]; -> -1
> > - array.join() Dentro dos parênteses é possível colocar o texto para o qual cada elemento sera concatenado. se for vírgula (", ") para cada elemento será -> elemento0, elemento1, etc.
> > - array.pop() remove o último elemento da array. 
> > - array.shift() remove o primeiro item o array. 
> > - Alterar o valor de um array em uma determinada posição -> array[posição] = "valor";
> > - Adicionar um elemento novo em uma nova posição -> list.push("valor");
>  > - Exemplo de comparador de array :point_down: :
>  > > ~~~ javascript
> > > if(array.(indexOf("Fulano") > -1{
> > > 	alert("Esse item está na lista");
> > >} else {
> > > 	alert("Valor não encontrado");
> > > } 
> > > ~~~
>
> **Loops**
> > -Exemplos:
> > > ~~~ javascript
> > > //Sobre o while
> > > var  x  =  0;
> > > while(x  <  10){
> > > document.write("O valor de x é: "  +  x  +  "</br>");
> > > x++;
> > > }
> > > 
> > > //Sobre o for
> > > for(var  a  =  0; a  <  10; a++){
> > > document.write("O valor de a é: "  +  a  +  "</br>");
> > > x++;
> > > } 
> > > ~~~