//Utilizar const e/ou let

var entrada = document.getElementById("input");
var saida = document.getElementById("output");
var chaveDeslocamento = document.getElementById("shift-input");

function limpar() {
    entrada.value = "";
    chaveDeslocamento.value = "";
    saida.value = "";
    return;
}

// CHAVE DE DESLOCAMENTO - INDEX INICIAL;

// 
//     A  B  C  D  E  F  G  H  I  J  K  L  M
//     0  1  2  3  4  5  6  7  8  9  10 11 12

//     N  O  P  Q  R  S  T  U  V  W  X  Y  Z
//    13 14 15 16 17 18 19 20 21 22 23  24  25

// const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// exemplo de código que faz a mesma coisa
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
    for (itemPalavras of palavras) {

        for (letra of itemPalavras) {
            // PRECISAMOS PEGAR O INDEX DA LETRA NO ARRAY COM O ALFABETO
            const indexInicial = letrasMaiusculas.indexOf(letra);



            let indexFinal;
            // criar um if else , onde se não for encontrado no array de letras maiusculas
            // retorne um alert avisando, do contrario dê um console.log
            if (indexInicial !== -1) {
                // vamos somar o index inicial com chave de deslocamento
                // % retorna o resto da divisão
                indexFinal = (indexInicial + Number(chaveDeslocamento.value)) % 26;
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
}


// - criar função decifrar
//     - criar variavel que receba o texto, e a transforme em Array;
// -em um laço cada dê um console.log item desse array de palavras;

function decifrar() {
    const palavrasDecifrar = entrada.value.split(" ");
    let decifrado = "";

    for (palavra of palavrasDecifrar) {


        // laço que itera a palavra - letra a letra
        for (letra of palavra) {
            console.log("letra : ", letra);
            const indexInicial = letrasMaiusculas.indexOf(letra);
            let indexFinal;
            console.log(indexInicial, "indexInicial");

            // A CONDIÇÃO GARANTE QUE O INDEX FINAL É POSITIVO;
            if (indexInicial !== -1 && indexInicial >= Number(chaveDeslocamento.value)) {
                indexFinal = (indexInicial - Number(chaveDeslocamento.value));
                console.log(indexFinal, "indexFinal");
                // DECIFRADO = DECIFRADO + letrasMaiusculas[indexFinal]
                decifrado += letrasMaiusculas[indexFinal];
                // A CONDIÇÃO GARANTE QUE A LETRA EXISTE NO ARRAY E A CHAVE DE DESLOCAMENTO É MAIOR QUE QUE O INDEX INICIAL;
                // } else if (indexInicial !== -1) {
            } else if (indexInicial !== -1 && Number(chaveDeslocamento.value) > indexInicial) {
                indexFinal = letrasMaiusculas.length - (Number(chaveDeslocamento.value) - indexInicial);
                console.log("indexInicial ", indexInicial);
                console.log("indexFinal ", indexFinal);
                decifrado += letrasMaiusculas[indexFinal];
            } else {
                // TUDO O QUE NAO ENCONTRAMOS NO ARRAY DO ALFABETO
                console.log(indexInicial, "indexInicial");
                alert("Poxa, não encontrei o que digitou");
                limpar();
                return;
            }
        }
        decifrado += " ";
    }
    return saida.value = decifrado;
}