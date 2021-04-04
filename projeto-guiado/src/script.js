let entrada = document.getElementById("input");
let saida = document.getElementById("output");
let chaveDeslocamento = document.getElementById("shift-input");

function limpar() {
    entrada.value = "";
    chaveDeslocamento.value = "";
    saida.value = "";
    return;
}

//     A  B  C  D  E  F  G  H  I  J  K  L  M
//     0  1  2  3  4  5  6  7  8  9  10 11 12

//     N  O  P  Q  R  S  T  U  V  W  X  Y  Z
//    13 14 15 16 17 18 19 20 21 22 23  24  25


// const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// exemplo de código que pega o valor de um texto digitado pelo usuário
// var texto = prompt("Digite um texto: ");
// var texto = entrada.value;

function cifrar() {
    const palavras = entrada.value.split(" ");
    // se o usuário digita "TODAS EM TECH"
    // retorno esperado ["TODAS", "EM", "TECH"]

    // for (i = 0; i < palavras.length; i++) {
    //     console.log(palavras[i], "texto genérico palavra");
    // }

    let cifrado = "";
    let deslocamento = Number(chaveDeslocamento.value);

    
    //verifica se chaveDeslocamento existe e se alguma palavra foi digitada
     // ver artigo https://blog.rocketseat.com.br/entendendo-falsy-e-truthy-no-javascript/
    if (deslocamento && palavras.length > 0) {
        for (itemPalavras of palavras) {

            for (letra of itemPalavras) {
                // precisamos pegar o index da letra no array do alfabeto
                const indexInicial = letrasMaiusculas.indexOf(letra);
                if (indexInicial !== -1) {
                    // vamos somar o index inicial com chave de deslocamento
                    // % retorna o resto da divisão
                    let indexFinal = (indexInicial + deslocamento) % 26;
                    // cifrar = cifrar +  letrasMaiusculas[indexFinal]
                    cifrado += letrasMaiusculas[indexFinal];
                } else {
                    alert("Opa, digite uma letra maiúscula");
                    limpar();
                    // impede que o código fique em loop e trave o seu navegador
                    return;
                }
            }
            cifrado += " ";
        }
        saida.value = cifrado;
        return;
    } else {
        alert("Digite uma chave e um texto para decifrar");
    }
}


function decifrar() {
    const palavrasDecifrar = entrada.value.split(" ");
    let decifrado = "";
    let deslocamento = Number(chaveDeslocamento.value);

    if (deslocamento && palavrasDecifrar.length > 0) {
        for (palavra of palavrasDecifrar) {
            // laço que itera a palavra - letra a letra
            for (letra of palavra) {

                const indexInicial = letrasMaiusculas.indexOf(letra);
                let indexFinal;

                // a condição garante que o index final é positivo
                if (indexInicial !== -1 && indexInicial >= deslocamento) {
                    indexFinal = (indexInicial - deslocamento);

                    // decifrado = decifrado + letrasMaiusculas[indexFinal]
                    decifrado += letrasMaiusculas[indexFinal];
                    // a condição garante que a letra existe no array e a chave de deslocamento é maior que o index inicial;
                    // a linha abaixo deixa mais limpo no lugar da linha 97 
                    // } else if (indexInicial !== -1) {
                } else if (indexInicial !== -1 && deslocamento > indexInicial) {
                    indexFinal = letrasMaiusculas.length - (deslocamento - indexInicial);
                    decifrado += letrasMaiusculas[indexFinal];
                } else {
                    // quando não encontra a letra no alfabeto, entra no else
                    alert("Poxa, não encontrei o que digitou");
                    limpar();
                    return;
                }
            }
            decifrado += " ";
        }
        saida.value = decifrado;
    } else {
        alert("Digite uma chave e um texto para decifrar");
    }
}
