

// Lanchonete



// itens regristrados no sistema
// os produtos sao inseridos automaticamentes a partir dessa lista
const itens = [
     {
          item: "Hot Dog Linguiça",
          valor: 10.00,
          codico: 1,
          desconto: 0
     },
     {
          item: "X-Salada",
          valor: 7.50,
          codico: 2,
          desconto: 0,
     },
     {
          item: "X-Bacon",
          valor: 9.00,
          codico: 3,
          desconto: 0,
     },
     {
          item: "Torrada Simples",
          valor: 5.00,
          codico: 4,
          desconto: 0,
     },
     {
          item: "Coca Cola 2l",
          valor: 13.50,
          codico: 5,
          desconto: 0,
     },
     {
          item: "Coca Cola 350ml",
          valor: 6.50,
          codico: 6,
          desconto: 0,
     },
     {
          item: "Pepsi",
          valor: 6.50,
          codico: 7,
          desconto: 0,
     },


];


// Classe do Produto

class Produto {

     constructor(produto) {
          // incrementando um extends improvisado do dicionario
          for (var propriedade in produto) {
               this[propriedade] = produto[propriedade];
          }

          this.qtd = 0;
          this.total = 0;
     }
     add(values) {
          this.qtd += values;
          this.total = (this.valor * this.qtd) * (1 - this.desconto);
          return this.qtd;
     }
     remove(values) {
          this.qtd -= values;
          this.total = (this.valor * this.qtd) * (1 - this.desconto);
          return this.qtd;
     }

}

// Sistema de Carrinho

const carrinho = [];



// funções auxiliares
const addItem = (codico, qtd = 1) => {
     let itemCarrinho = carrinho.find(produto => produto.codico == codico);

     if (itemCarrinho) {  // verifica se o produto existe
          document.querySelector(`#produto_${codico}`).textContent = itemCarrinho.add(qtd);
          total.textContent = `R$ : ${valorTotal().toFixed(2)}`;
          return;
     }
     else {
          let encontrarProduto = itens.find(produto => produto.codico == codico);
          carrinho.push(new Produto(encontrarProduto))
          return addItem(codico, qtd);
     }
}


const removerItem = (codico, qtd = 1) => {
     carrinho.forEach((produto, indice) => {
          if (produto.codico == codico) {
               let restante = produto.remove(qtd);
               document.querySelector(`#produto_${codico}`).textContent = restante;
               total.textContent = `R$ : ${valorTotal().toFixed(2)}`;
               if (restante <= 0) return carrinho.splice(indice, indice + 1)
          }
     })
     return carrinho;
}

const valorTotal = () => {
     if (carrinho.length == 0) return 0;
     else if (carrinho.length == 1) return carrinho[0].total;
     else {
          let totalOut = 0;
          carrinho.forEach(produto => totalOut += produto.total);
          return totalOut;
     }
}


// front end 

const produtoContainer = document.getElementById("produto");
const totalOut = document.getElementById("total");


function templateProduto(id, item, valor) {
     return `
     <li class='produto'>
     <div class='produto-main'>
     <h3>Produto</h3>
     <h3 class='produto-titulo'>${item}</h3>
     <spam><strong> R$ ${valor.toFixed(2)} </strong></spam>
     </div>
     <div class='bt'>
         <button onclick='removerItem(${id})'>-</button>
         <span id='produto_${id}'>0</span>
         <button onclick='addItem(${id})'>+</button>
     </div>
 </li>`;
}

// gerando no html os produtos cadastrados a partir do array itens
window.onload = function () {
     let loja = "";
     itens.forEach(produto => {
          loja += templateProduto(produto['codico'], produto['item'], produto['valor']);
     })
     produtoContainer.innerHTML = loja;
     return;
}