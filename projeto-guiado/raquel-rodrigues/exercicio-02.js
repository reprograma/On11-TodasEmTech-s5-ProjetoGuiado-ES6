/* Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados
foram positivos e quantos valores digitados foram negativos.

Entrada: O arquivo de entrada contém 5 valores inteiros quaisquer.
Saída: Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma. */

let numeroPar = 0;
let numeroImpar = 0;
let numeroPositivo = 0;
let numeroNegativo = 0;


for (let contador = 1; contador <= 5; contador++) {
  valorInteiro = parseInt(lines.shift());
  if (valorInteiro % 2 === 0) {
    numeroPar += 1;
  } else {
    numeroImpar += 1;
  }

  if (valorInteiro > 0) {
    numeroPositivo += 1;
  } else if (valorInteiro < 0) {
    numeroNegativo += 1;
  }
}
console.log(`${numeroPar} valor(es) par(es)`);
console.log(`${numeroImpar} valor(es) impar(es)`);
console.log(`${numeroPositivo} valor(es) positivo(s)`);
console.log(`${numeroNegativo} valor(es) negativo(s)`);