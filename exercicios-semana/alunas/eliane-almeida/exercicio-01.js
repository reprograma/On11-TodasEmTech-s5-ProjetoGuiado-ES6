// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038)

let cachorroQuente = {
    codigo: 1,
    produto: "Cachorro Quente",
    preco: 4.00
}

let salada = {
    codigo: 2,
    produto: "X-Salada",
    preco: 4.50
}

let bacon = {
    codigo: 3,
    produto: "X-Bacon",
    preco: 5.00
}

let torrada = {
    codigo: 4,
    produto: "Torrada Simples",
    preco: 2.00
}

let refri = {
    codigo: 1,
    produto: "Refrigerante",
    preco: 1.50
}
let menu = [cachorroQuente, salada, bacon, torrada, refri];

let pedidos = prompt("Digite o código do produto e a quantidade do mesmo:");

function pedido(pedidos) {
    let produto = pedidos.split(" ");
    let cod = pedidos[0];
    let qnt = pedidos[1];
    let total = 0;

    switch (cod) {
        case ('1'):
            total = qnt * cachorroQuente.preco;
            alert(`O total a pagar do pedido ${cachorroQuente.produto} é R$ ${total.toFixed(2)}`);
            break;
        case ('2'):
            total = qnt * salada.preco;
            alert(`O total a pagar do pedido ${salada.produto} é R$ ${total.toFixed(2)}`);
            break;
        case ('3'):
            total = qnt * bacon.preco;
            alert(`O total a pagar do pedido ${bacon.produto} é R$ ${total.toFixed(2)}`);
            break;
        case ('4'):
            total = qnt * torrada.preco;
            alert(`O total a pagar do pedido ${torrada.produto} é R$ ${total.toFixed(2)}`);
            break;
        case ('5'):
            total = qnt * refri.preco;
            alert(`O total a pagar do pedido ${refri.produto} é R$ ${total.toFixed(2)}`);
            break;
        default:
            alert("Desculpa não possuimos produtos com esse código");
    }
}
pedido(pedidos)