// [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1066)

alert("Vamos analisar uma sequência de 5 numeros. Precione enter para continuar");
let cont = 0;
let numero = 0
let numeros = [];
while (cont < 5) {
    numero = [prompt("Entre com numero para analisar")];
    cont++;
    numeros.push(numero)
}

function analisarNumeros(numeros) {
    let par = 0;
    let impar = 0;
    let positivo = 0;
    let negativo = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivo++;
            if (numeros[i] % 2 == 0) {
                par++;
            } else {
                impar++;
            }
        } else {
            negativo++;
            if (numeros[i] % 2 == 0) {
                par++;
            } else {
                impar++;
            }
        }
    }
    alert(`A sequencia de numeros possui: 
      ${positivo} numeros positivos, ${negativo} numeros negativos
      ${par} numeros pares, e ${impar} numeros impares`);
}
analisarNumeros(numeros);