var saida = document.getElementById("output");
var entrada = document.getElementById("input");
var chaveDeslocamento = document.getElementById("shift-input");

function limpar() {
  entrada.value = "";
  chaveDeslocamento.value = "";
  saida.value = "";
  return;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

      function cifrar() {
      const palavras = entrada.value.split(' ');

      let cifrado = '';

      for(item of palavras) {

      for(letra of item) {
      const indexInicial = letrasMaiusculas.indexOf(letra)
      let indexFinal;

      if(indexInicial !== -1) {
         indexFinal = (indexInicial + Number(chaveDeslocamento.value))% 26;
         cifrado += letrasMaiusculas[indexFinal];
      } else {
         console.log("Opa! Digite uma letra maiúscula")
         limpar();
      }
      }
      cifrado += ' ';
      }
      console.log(cifrado)
      return saida.value = cifrado
      }



// - criar função decifrar
//     - criar variavel que receba o texto, e a transforme em Array;
// -em um laço cada dê um console.log item desse array de palavras;

function decifrar() {
      const palavrasDecifrar = entrada.value.split(" ");
      let decifrado = "";

      for (palavra of palavrasDecifrar) {

         for (letra of palavra) {
            console.log("letra : ", letra);
            const indexInicial = letrasMaiusculas.indexOf(letra);
            let indexFinal;
            console.log(indexInicial, "indexInicial");
            if (indexInicial !== -1 && indexInicial >= Number(chaveDeslocamento.value)) {
                  indexFinal = (indexInicial - Number(chaveDeslocamento.value));
                  console.log(indexFinal, "indexFinal");

                  decifrado += letrasMaiusculas[indexFinal];

            } else if (indexInicial !== -1 && Number(chaveDeslocamento.value) > indexInicial) {
                  indexFinal = letrasMaiusculas.length - (Number(chaveDeslocamento.value) - indexInicial);
                  console.log("indexInicial ", indexInicial);
                  console.log("indexFinal ", indexFinal);
                  decifrado += letrasMaiusculas[indexFinal];
            } else {
                  console.log(indexInicial, "indexInicial");
                  alert("Opa! Não encontrei o que digitou");
                  limpar();
                  return;
            }
         }
         decifrado += " ";
      }
      return saida.value = decifrado;
   }