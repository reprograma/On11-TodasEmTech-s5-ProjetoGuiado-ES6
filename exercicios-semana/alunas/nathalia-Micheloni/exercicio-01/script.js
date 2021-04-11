
const btnCalcular = document.querySelector('input#btnCalcular');
btnCalcular.addEventListener('click', calcular);
const btnLimpar = document.querySelector('input#btnLimpar');
btnLimpar.addEventListener('click', limpar);

const codigo = [1, 2, 3, 4, 5];
const valor = [4, 4.5, 5, 2, 1.5];
const especificacao = ["Cachorro Quente", "X-Salada", "X-Bacon", "Torrada Simples", "Refrigerante"];

window.addEventListener("load", function () {


    var array = 1;

    html = "<table><th>CODIGO</th><th>ESPECIFICAÇÃO</th><th>PREÇO</th><tr>";

    for (let i = 0; i < especificacao.length; i++) {

        html += `<td>${codigo[i]}</td>`;
        html += `<td>${especificacao[i]}</td>`;
        html += `<td>${valor[i].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>`

        let next = i + 1;
        if (next % array == 0 && next != especificacao.length) {
            html += "</tr><tr>";
        }
    }
    html += "</tr></table>";

    document.getElementById("container").innerHTML = html;

});

var selProdutos = document.querySelector('select#selProdutos');

for (let c = 0; c < especificacao.length; c++) {
    let item = document.createElement('option');
    item.text = `${especificacao[c]}`;
    item.value = `${codigo[c]}`
    item.preco = `${valor[c]}`
    selProdutos.appendChild(item);

}


function calcular() {
    let res = document.querySelector('div#res');

    let txtQtd = document.querySelector('input#txtQtd');

    const selected = document.querySelectorAll('select#selProdutos option:checked');
    const codigoArray = Array.from(selected).map(val => val.value);
    const descArray = Array.from(selected).map(val => val.text);
    const precoArray = Array.from(selected).map(val => Number(val.preco))



    if (txtQtd.value == "" || txtQtd.value == 0) {

        alert("[ERRO]Selecione uma quandidade maior que ZERO");
        res.innerHTML = "";

    } else if (selected.value == -1) {
        alert("[ERRO] Item não encontrado. Selecione um item que estja cadastrado na Lista!");
        res.innerHTML = "";


    } else {
        res.innerHTML = `<strong>Itens Selecionados:</strong>`;

        for (let c = 0; c < codigoArray.length; c++) {
            res.innerHTML += `</br>
            ${descArray[c]} - Total: ${(precoArray[c] * txtQtd.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</br>
            
            `;
        }
        res.innerHTML += `</br> <strong>Valor à Pagar: 
        ${(precoArray.reduce((acc, cur) => (acc + cur)) * txtQtd.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>`

    }

}

function limpar() {
    res.innerHTML = "";
}