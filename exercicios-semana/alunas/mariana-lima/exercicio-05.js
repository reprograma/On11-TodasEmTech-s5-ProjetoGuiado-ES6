let nome = prompt ("Digite o nome do vendedor")
let salario = Number (prompt("Digite o sálario fixo do vendedor"))
let vendas = Number(prompt("Digite o montante total das vendas efetuadas por este vendedor"))

let porcentagem = vendas * 0.15
let total = salario + porcentagem

document.write("O sálario de " + nome + " será no valor total de " + total.toFixed(2))