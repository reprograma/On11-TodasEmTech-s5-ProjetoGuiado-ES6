/* Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a
pagar.
CODIGO	ESPECIFICAÇÃO	PREÇO
1		Cachorro Quente	R$ 4,00
2		X-Salada		R$ 4,50
3		X-Bacon			R$ 5,00
4		Torrada simples	R$ 2,00
5		Refrigerante	R$ 1,50

Entrada: O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.
Saída: O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal. */

//função de escolhe no menu, fixando o valor em 2 casas decimais.


const codProduto = parseInt(prompt(`Digite qual o código do lanche:  \n 1. Cachorro quente R$ 4,00 \n  2. X-Salada R$ 4,50  \n 3. X-Bacon R$ 5,00 \n  4. Torrada simples R$ 2,00  \n 5. Refrigerante R$ 1,50`))

const quantidade = parseInt(prompt('Informe a quantidade do produto'))
switch (codProduto) {
    case 1:
        preco = 4.00;
        produto = 'Cachorro Quente'
        break
    case 2:
        preco = 4.50;
        produto = 'X-Salada'
        break
    case 3:
        preco = 5.00;
        produto = 'X-Bacon'
        break
    case 4:
        preco = 2.00;
        produto = 'Torrada Simples'
        break
    case 5:
        preco = 1.50;
        produto = 'Refrigerante'
        break
    default:
        alert('Produto Inválido')

}
parseFloat(alert(`Valor total: ${preco * quantidade}`))