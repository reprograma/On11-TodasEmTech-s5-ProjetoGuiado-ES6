// [Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let alcool = 0;
let gasolina = 0;
let disel = 0;

function pesquisaCombustivel() {
    let codigo = 0;
    let codigos = []
    while (codigo != 4) {
        codigo = [prompt("Entre com o código de abastecimento")];
        if (codigo > 4) {
            alert("Código invallido.")
        }
        codigos.push(codigo);
    }
    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] == 1) {
            alcool++;
        } else if (codigos[i] == 2) {
            gasolina++;
        } else if (codigos[i] == 3) {
            disel++;
        }
    }
    alert(`MUITO OBRIGADO!!
        ÁLCOOL: ${alcool}
        GASOLINA: ${gasolina}
        DISEL: ${disel}`)
}
pesquisaCombustivel();