/* Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.

Entrada
A entrada contém apenas valores inteiros e positivos.

Saída
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.*/


function entrada (){
  var gasolina = 0
var alcool = 0
var  diesel = 0
do{
var produto = Number(prompt("Digite o código do produto"));
switch (produto) {
case 1:
 alcool++
  break;
  case 2:
  gasolina++
  break;
  case 3:
  diesel++
  break;
  case 4:
    document.write("Muito obrigada");
    break;
default:
  alert("Digite um código válido");
  break;
}

} while(produto != 4)

document.write('<br/>', "alcool: " , alcool , '<br/>' , " gasolina: " , gasolina , '<br/>' , " diesel: " , diesel);

}
entrada();