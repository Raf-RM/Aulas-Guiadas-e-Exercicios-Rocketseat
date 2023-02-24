/*
Prototype

  * prototype-based language
  * prototype chain (cadeia de protótipos)
  * __proto__

  --> JS é uma linguagem baseada em prototipos
  --> Em Js a maioria dos tipos de dados são encapsulados por um objeto ou seja, eles terão um __proto__ e irão herdar toda a cadeia de protótipos

  --> Colocando uma string, um número float ou um boolean seguidos de ".__proto__" criamos um objeto (do tipo string, number ou boolean) que vai já trazer várias funcionalidades previamente definidas. Além de outro __proto__ que seria o do objeto.

  --> ou seja, criamos um número ou uma string ou um booleano que estará embrulhado em um objeto, que vai trazer na cadeia de protótipos um primeiro __proto__ referente a number, string ou boolean que terá suas próprias propriedades, dentro dessa cadeia ele vai trazer também um segundo __proto__ que será referente a objeto
*/