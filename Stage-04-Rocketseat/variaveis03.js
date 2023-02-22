/*
   scope
   --> determina a visibilidade de uma variável em JS

   block statement (declaração de bloco)
   
   Para iniciar um bloco utilizamos: {
      {
         aqui dentro temos um bloco onde podemos colocar qualquer código
      }
   Para fechar utilizamos: }

   --> O bloco criará um novo escopo
      block-scoped
*/

{
   let x = 0
   console.log(x)
}

/*
   uma variável criado com var é uma variável global
   e local podendo ser utilizada tanto dentro quando fora de algum escopo (bloco)

   hoisting --> o JS executa de maneira vertical linha por linha de cima para baixo
                quando há variáveis criadas com var ele antecipam sua leitura, 
                colocando as declarações dessas variáveis no topo do script (elevando/hoisting),
                identificando essas variáveis inicialmente para depois então atribuir valores 
                à elas. 
   */

console.log("variavelVar antes do bloco:", variavelVar)
{
   var variavelVar = 0
}
console.log("variavelVar depois do bloco:",variavelVar)

/*
   let e const
   são locais só funcinando dentro do escopo onde foram criadas
*/

//console.log("variavelLet antes do bloco:", variavelLet)
let variavelLet = "número 1"
console.log("variavelLet antes do bloco:",variavelLet)
{
   //console.log("variavelLet antes da declaração dentro do bloco:", variavelLet)
   let variavelLet = 1
   console.log("variavelLet depois da declaração dentro do bloco:", variavelLet)
}
console.log("variavelLet depois do bloco:",variavelLet)

/*
   IMPORTANTE
   --> quando nós, ao invés de criar uma variável dentro de um escopo 
       nós modificamos o valor de uma variável global, este valor permanece
       modificado, porém, se criarmos uma variavel dentro de um escopo  utilizando
       o mesmo nome de uma variável global, ela será como uma nova variável
       e só será utilizada dentro daquele escopo, não alterando a variável global
*/

console.log("variavelLet global:", variavelLet)

{
   variavelLet = 8
   console.log("variavelLet modificada dentro do bloco:", variavelLet)
}
console.log("variavelLet final fora do bloco:",variavelLet)

console.log("variavelLet inicial:",variavelLet)
console.log("criando uma variavelLet dentro de um outro escopo")
{
   let variavelLet = "oito"
   console.log("variavelLet criada dentro do bloco:",variavelLet)
}
console.log("variavelLet final fora do bloco:",variavelLet)

/*
   no caso de uma const, seu valor não pode ser alterado, ou seja, não é
   possível atribuirmos outro valor para uma const, tanto dentro quanto fora
   de um escopo, porém é possível criar uma const de mesmo nome dentro de outro escopo
   e ela só poderar ser utilizada ali dentro, não afetando a const de mesmo nome criada 
   fora daquele escopo
*/

const variavelConst = "Valor Constante"
console.log("VariavelConst inicial:",variavelConst)
{
   const variavelConst = "Novo Valor Constante"
   console.log("variavelConst criada dentro do bloco:",variavelConst)
}
console.log("varoavelConst valor final, fora do bloco:",variavelConst)

/*
   IMPORTANTE
   --> devido ao fato de var criar uma variável que pode ser modificada em qualquer escopo
       ele não é muito utilizado no JS moderno para podermos evitar erros.
*/