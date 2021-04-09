const numero = Number(prompt("Digite um numero"));
const numeroDois = Number(prompt("Digite outro numero"));

const opcao = prompt("Digite um 1 para somar um número com outro e digite 2 para multiplicar os números");

//reparem que no exercício do URI os números recebidos *não* são somados nem multiplicados, você precisa saber o código para identificar o valor de cada item

switch (opcao) {
    case "1":
        const soma = numero + numeroDois;
        console.log(soma);
        break;
    case "2":
        const multiplicar = numero * numeroDois;
        console.log(multiplicar, "multiplicar");
        break;
    default:
        console.log("Ops, escolheu uma opção inexistente");
        break;
}

// Exemplo while

let salario = 1000;

while (salario < 5000) {
    console.log("estamos testando while - nessa volta o valor do salario é: ", salario);
    // salario = salario + 1000 mesma coisa que a linha abaixo
    salario += 1000;
}

let pagamento = 1000;

// a diferença para o while é que o do while executa antes de testar a condição
do {
    console.log("estamos testando o do while - nessa volta o valor do pagamento é: ", pagamento);
    pagamento += 1000;
} while (pagamento < 5000);




// function cifrar() {
//     const palavras = entrada.split(" ");
//     let cifrado = "";

//     if (!isNaN(chaveDeslocamento) && palavras.length > 0) {
//         for (palavra of palavras) {

//             for (letra of palavra) {
//                 // precisamos pegar o index da letra no array do alfabeto
//                 const indexInicial = letrasMaiusculas.indexOf(letra);
//                 if (indexInicial !== -1) {
//                     // vamos somar o index inicial com chave de chaveDeslocamento
//                     // % retorna o resto da divisão
//                     let indexFinal = (indexInicial + chaveDeslocamento) % 26;
//                     // cifrar = cifrar +  letrasMaiusculas[indexFinal]
//                     cifrado += letrasMaiusculas[indexFinal];
//                 } else {
//                     alert("Poxa, não encontrei o que digitou");
//                     return;
//                 }
//             }
//             cifrado += " ";
//         }
//         document.write(cifrado);
//         return;
//     } else {
//         alert("Digite uma chave e um texto para decifrar");
//         return;
//     }
// }

// function decifrar() {
//     const palavrasDecifrar = entrada.split(" ");
//     let decifrado = "";

//     if (Number(chaveDeslocamento) && palavrasDecifrar.length > 0) {
//         // if (!isNaN(chaveDeslocamento) && palavrasDecifrar.length > 0) {

//         for (palavra of palavrasDecifrar) {
//             // laço que itera a palavra - letra a letra
//             for (letra of palavra) {

//                 const indexInicial = letrasMaiusculas.indexOf(letra);
//                 let indexFinal;

//                 // a condição garante que o index final é positivo
//                 if (indexInicial !== -1 && indexInicial >= chaveDeslocamento) {
//                     indexFinal = (indexInicial - chaveDeslocamento);

//                     // decifrado = decifrado + letrasMaiusculas[indexFinal]
//                     decifrado += letrasMaiusculas[indexFinal];
//                     // a condição garante que a letra existe no array e a chave de deslocamento é maior que o index inicial;
//                     // a linha abaixo deixa mais limpo no lugar da linha 76
//                     // } else if (indexInicial !== -1) {
//                 } else if (indexInicial !== -1 && chaveDeslocamento > indexInicial) {
//                     indexFinal = letrasMaiusculas.length - (chaveDeslocamento - indexInicial);
//                     decifrado += letrasMaiusculas[indexFinal];
//                 } else {
//                     // quando não encontra a letra no alfabeto, entra no else
//                     alert("Poxa, não encontrei o que digitou");
//                     return;
//                 }
//             }
//             decifrado += " ";
//         }
//         document.write(decifrado);
//         return;
//     } else {
//         alert("Digite uma chave e um texto para decifrar");
//         return;
//     }
// }
