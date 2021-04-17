const cardapio = [{
        codigo: 1,
        produto: "Cachorro Quente",
        preco: 4.00
    },

    {
        codigo: 2,
        produto: "X-Salada",
        preco: 4.50
    },

    {
        codigo: 3,
        produto: "X-Bacom",
        preco: 5.00
    },

    {
        codigo: 4,
        produto: "Torrada simples",
        preco: 2.00
    },

    {
        codigo: 5,
        produto: "Refrigerante",
        preco: 1.50
    },
]

function somaPedido() {
    let pedido = document.getElementById("pedidocod").value
    let quantidade = document.getElementById("quantpedido").value
    let precoUnidade= cardapio.find((produto)=>produto.codigo==pedido).preco
    
    let final=(precoUnidade*quantidade).toFixed(2)
    document.write("O total do pedido é R$"+final)
}

var botao= document.getElementById("botao")
botao.setAttribute("onclick","somaPedido()")
