let nome = prompt("insira o nome do vendedor: ")
let salario = Number(prompt("insira o salario do vendedor: "))
let vendas = Number(prompt("insira o valor de vendas:"))

//bonus = vendas.toFixed(2)*0.15

let total = (salario + (vendas*0.15)).toFixed(2)

alert("Total = R$ " + total)