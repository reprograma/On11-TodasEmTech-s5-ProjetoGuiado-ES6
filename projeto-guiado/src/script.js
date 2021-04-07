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

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function cifrar(){
    const getEntrada = entrada.value.toUpperCase().split(" ");
    let cifrado = "";
    for(itemPalavras of getEntrada){
       for(getLetra of itemPalavras){
           const indexInicial = letrasMaiusculas.indexOf(getLetra);
           let indexFinal;

           if(indexInicial !== -1){
            indexFinal = (indexInicial + Number(chaveDeslocamento.value)) % 26;
            cifrado += letrasMaiusculas[indexFinal];
            }else{
               alert("ERROR! Caracter inválido!");
               limpar();
               return;
            }
        }
        cifrado += " ";
    }
    return saida.value = cifrado;
}

function decifrar(){
    let getDecifrar = entrada.value.toUpperCase().split(" ");
    let decifrado = "";
    for(itemDecifrar of getDecifrar){
        for(getDecifraLetra of itemDecifrar){
            const indexDecifradoInicial = letrasMaiusculas.indexOf(getDecifraLetra);
            let indexDecifradoFinal;
            if(indexDecifradoInicial !== -1 && indexDecifradoInicial >= Number(chaveDeslocamento.value)){
                indexDecifradoFinal = (indexDecifradoInicial - Number(chaveDeslocamento.value));
                decifrado += letrasMaiusculas[indexDecifradoFinal];
            }else if(indexDecifradoInicial !== -1 && Number(chaveDeslocamento.value) > indexDecifradoInicial){
                indexDecifradoFinal = letrasMaiusculas.length - (Number(chaveDeslocamento.value) - indexDecifradoInicial);
                decifrado += letrasMaiusculas[indexDecifradoFinal];
            }else{
               alert("ERROR! Caracter inválido!");
               limpar();
               return;
            }
        }
        decifrado += " ";
    }
    return saida.value = decifrado;
}
