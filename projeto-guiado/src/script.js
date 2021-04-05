const entrada = prompt("Digite um texto para cifrar ou decifrar: ");

const chaveDeslocamento = Number(prompt("Digite um número para a chave de deslocamento: "));

// outra opção de gerar o array >> const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const opcao = prompt("Digite um 1 para cifrar e 2 para decifrar");

switch (opcao) {
    case "1":
        cifrar();
        break;
    case "2":
        decifrar();
        break;
    default:
        document.write("Ops, escolheu uma opção inexistente");
        break;
}


function cifrar() {
    const palavras = entrada.split(" ");
    let cifrado = "";

    if (!isNaN(chaveDeslocamento) && palavras.length > 0) {
        for (palavra of palavras) {

            for (letra of palavra) {
                // precisamos pegar o index da letra no array do alfabeto
                const indexInicial = letrasMaiusculas.indexOf(letra);
                if (indexInicial !== -1) {
                    // vamos somar o index inicial com chave de chaveDeslocamento
                    // % retorna o resto da divisão
                    let indexFinal = (indexInicial + chaveDeslocamento) % 26;
                    // cifrar = cifrar +  letrasMaiusculas[indexFinal]
                    cifrado += letrasMaiusculas[indexFinal];
                } else {
                    alert("Poxa, não encontrei o que digitou");
                    return;
                }
            }
            cifrado += " ";
        }
        document.write(cifrado);
        return;
    } else {
        alert("Digite uma chave e um texto para decifrar");
        return;
    }
}

function decifrar() {
    const palavrasDecifrar = entrada.split(" ");
    let decifrado = "";

    if (Number(chaveDeslocamento) && palavrasDecifrar.length > 0) {
        // if (!isNaN(chaveDeslocamento) && palavrasDecifrar.length > 0) {

        for (palavra of palavrasDecifrar) {
            // laço que itera a palavra - letra a letra
            for (letra of palavra) {

                const indexInicial = letrasMaiusculas.indexOf(letra);
                let indexFinal;

                // a condição garante que o index final é positivo
                if (indexInicial !== -1 && indexInicial >= chaveDeslocamento) {
                    indexFinal = (indexInicial - chaveDeslocamento);

                    // decifrado = decifrado + letrasMaiusculas[indexFinal]
                    decifrado += letrasMaiusculas[indexFinal];
                    // a condição garante que a letra existe no array e a chave de deslocamento é maior que o index inicial;
                    // a linha abaixo deixa mais limpo no lugar da linha 76
                    // } else if (indexInicial !== -1) {
                } else if (indexInicial !== -1 && chaveDeslocamento > indexInicial) {
                    indexFinal = letrasMaiusculas.length - (chaveDeslocamento - indexInicial);
                    decifrado += letrasMaiusculas[indexFinal];
                } else {
                    // quando não encontra a letra no alfabeto, entra no else
                    alert("Poxa, não encontrei o que digitou");
                    return;
                }
            }
            decifrado += " ";
        }
        document.write(decifrado);
        return;
    } else {
        alert("Digite uma chave e um texto para decifrar");
        return;
    }
}
