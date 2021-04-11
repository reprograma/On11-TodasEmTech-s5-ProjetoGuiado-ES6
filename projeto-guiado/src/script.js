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

const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function cifrar() {
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
              indexFinal = (indexInicial + Number(chaveDeslocamento.value)) % 26;
              // cifrar = cifrar + letrasMaiusculas[indexFinal]
              cifrado += letrasMaiusculas[indexFinal];
          } else {
              alert("Opa, digite uma letra maiúscula");
              limpar();
              return;
          }
      }

      cifrado += " ";
  }
  console.log("cifrar", cifrado);
  saida.value = cifrado;
  return;
}

//criar função decifrar
//criar variavel que receba o texto, e a transforme em Array;
//em um laço cada item desse array de palavras;

function decifrar (){
const palavrasDecifrar = entrada.value.split(" ");
let decifrado = "";
for (palavra of palavrasDecifrar) {
  
  for (letra of palavra) {
    console.log("letra", letra);
    const indexInicial = letrasMaiusculas.indexOf(letra);
    let indexFinal;
     console.log(indexInicial, "indexInicial");

     if (indexInicial !== -1 && indexInicial >= Number(chaveDeslocamento.value)) {
      indexFinal = (indexInicial - Number(chaveDeslocamento.value)) % 26;
      console.log(indexFinal);
      decifrado += letrasMaiusculas[indexFinal];
     } else if (indexInicial !== -1 && indexInicial < Number(chaveDeslocamento.value)) {

      indexFinal = letrasMaiusculas.length - (Number(chaveDeslocamento.value) - indexInicial);

       console.log("indexIncial", indexInicial);
       console.log("indexFinal", indexFinal);
       decifrado += letrasMaiusculas[indexFinal];


    } else {
      console.log (indexInicial, "indexInicial")
      alert("Poxa, não encontrei o que digitou");
      limpar();
      return;
  }

}
    decifrado += " ";
}
  saida.value = decifrado;
  return;
}
