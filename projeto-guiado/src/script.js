//Utilizar const e/ou let

var saida = document.getElementById("output");
var entrada = document.getElementById("input");
var chaveDeslocamento = document.getElementById("shift-input");

function limpar() {
    entrada.value = "";
    chaveDeslocamento.value = "";
    saida.value = "";
    return;
}

//const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//exemplo que faz a mesma coisa
//var texto = prompt("Digite um texto: "); 
//var texto = entrada.value; 

function cifrar() {
    const palavras = entrada.value.split(" ");
    //for (i = 0; i < palavras.length; i++) {
    //  console.log(palavras[i], "texto genérico palavra");
    //}
    let cifrado = "";
    for (itemPalavras of palavras) {
        for (letra of itemPalavras) {
            //PRECISAMOS PEGAR O INDEX DA LETRA NO ARRAY COM O ALFABETO
            const indexInicial = letrasMaiusculas.indexOf(letra);

            let indexFinal;

            if (indexInicial !== -1) {

                indexFinal = (indexInicial + Number(chaveDeslocamento.value)) % 26;
                cifrado += letrasMaiusculas[indexFinal];
            } else {
                alert("Ops! Digite uma letra maiuscula")
                limpar();
                return;
            }
        }
        cifrado += " ";
    }
    console.log("cifrar", cifrado);
    return saida.value = cifrado;
}

function decifrar() {
    const palavrasDecifrar = entrada.value.split(" ");

    let decifrado = "";
    for (palavra of palavrasDecifrar) {

        for (letras of palavra) {
            console.log("letras", letras);

            const indexInicial = letrasMaiusculas.indexOf(letras);

            let indexFinal;
            console.log(indexInicial, "indexInicial");
            if (indexInicial != -1 && indexInicial >= Number(chaveDeslocamento.value)) {
                indexFinal = (indexInicial - Number(chaveDeslocamento.value));
                decifrado += letrasMaiusculas[indexFinal];
                console.log(indexFinal, "indexFinal");
            } else if (indexInicial != -1) {
                indexFinal = letrasMaiusculas.length - (Number(chaveDeslocamento.value) - indexInicial);
                console.log("indexInicial", indexInicial);
                console.log("indexFinal", indexFinal);
                decifrado += letrasMaiusculas[indexFinal];
            } else {
                alert("Algo deu errado, não idenifiquei o que você digitou");
                limpar();
                return;
            }
        }
        decifrado += " ";
    }
    console.log("decifrado", decifrado);
    return saida.value = decifrado;
}