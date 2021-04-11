// [Exercício 05](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let vendedor = prompt("Digite o nome do vendedor");
let salarioFixo = Number(prompt("Digite o salario fixo do vendedor"));
let vendas = Number(prompt("Digite o valor total de suas vendas"));

let comissao = vendas * 0.15;

let salarioReceber = salarioFixo + comissao;

alert(`O salario a receber de ${vendedor} é: ${salarioReceber.toFixed(2)}`);