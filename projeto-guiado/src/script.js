var entrada = document.querySelector("input#input");
var saida = document.getElementById("output");
var chaveDeslocamento = document.querySelector("input#shift-input");

entrada.addEventListener('change', updateValue)

function updateValue() {
  entrada.value = entrada.value.toUpperCase();
  entrada.innerHTML = entrada.value.toUpperCase();
  }


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

// exemplo de código que faz a mesma coisa
// var texto = prompt("Digite um texto: ");
// var texto = entrada.value;

function cifrar() {

  chaveDeslocamento.value = Number(chaveDeslocamento.value);
  if (entrada.value == "") {
    saida.innerHTML = "[ATENÇÃO] Você precisa digitar algum texto! Após isso, clique em Cifrar"
    
  } else {


    const palavras = entrada.value.split(" ");
    // retorno esperado ["TODAS", "EM", "TECH"]

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
                indexFinal = (indexInicial + Number(chaveDeslocamento.value)) % 26; // Adiciona + 3 no index da letra buscada. OBS: o %26 faz com que caso ultrapasse o "Z", retorna para "A"
                // cifrar = cifrar + letrasMaiusculas[indexFinal]
                cifrado += letrasMaiusculas[indexFinal]; // cifrado recebe o indexFnal já somando os 3
            }          
            else {
                alert("Opa, digite uma letra maiúscula");
                limpar();
            }
        }

        cifrado += " ";
    }
    return saida.value = cifrado;
  }
}

function decifrar() {

  chaveDeslocamento.value = Number(chaveDeslocamento.value);
  if (entrada.value == "") {
    saida.innerHTML = "[ATENÇÃO] Você precisa digitar algum texto! Após isso, clique em Cifrar"
    
  } else {


    const palavras = entrada.value.split(" ");

    let decifrado = "";
    for (itemPalavras of palavras) { // For para buscar palavras 

        for (letra of itemPalavras) { // For para copular os arrays com as letras das palavras
            const indexInicial = letrasMaiusculas.indexOf(letra);

            let indexFinal;

            if (indexInicial !== -1 && indexInicial >= Number(chaveDeslocamento.value )) {// Verifica se a letra digitada existe no array do alfabeto MAIUSCULO e é maior que o valor digitado.
                indexFinal = (indexInicial - Number(chaveDeslocamento.value)) % 26; // Subtrai -(o valor digitado em chaveDeslocamento) no index da letra buscada (letrasMaiuscula) OBS: o %26 faz com que caso ultrapasse o "Z", retorna para "A"
                decifrado += letrasMaiusculas[indexFinal]; // decifrado recebe o indexFnal já subtraindo o valor digitado em (chaveDeslocamento)
            } 
            else if(indexInicial !== -1 && Number(chaveDeslocamento.value) > indexInicial) { // A CONDIÇÃO GARANTE QUE A LETRA EXISTE NO ARRAY  E A CHAVE DE DESLOCAMENTO É MAIOR QUE O INDEXINICIAL
              indexFinal = (indexInicial + letrasMaiusculas.length - Number(chaveDeslocamento.value)); // pega o IndexInicial e soma + 26 para chegar na ultima letra do alfabeto e reduz o valor digitado (chaveDeslocamento)
              decifrado += letrasMaiusculas[indexFinal];
            }         
          
            else {
                alert("Opa, digite uma letra maiúscula");
                limpar();
            }
        }

        decifrado += " ";
    }
    return saida.value = decifrado;
  }
}