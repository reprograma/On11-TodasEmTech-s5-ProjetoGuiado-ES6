//Utilizar const e/ou let

let saida = document.getElementById("output");
let entrada = document.getElementById("input");
let chaveDeslocamento = document.getElementById("shift-input");

function limpar() {
  entrada.value = "";
  chaveDeslocamento.value = "";
  saida.value = "";
  return;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
// console.log(letrasMaiusculas)
function cifrar() {

  const upperCase = entrada.value.toUpperCase()
  const palavras = upperCase.split(' ');
  // console.log(palavras)

  let cifrado = '';
  palavras.forEach(function(i) {
    // console.log(item)
    for(letra of i) {
      const indexInicial = letrasMaiusculas.indexOf(letra)
      let indexFinal;

      if(indexInicial !== -1) {
        // console.log(indexInicial)
        indexFinal = (indexInicial + Number(chaveDeslocamento.value))% 26;
        cifrado += letrasMaiusculas[indexFinal];
        // console.log(indexFinal)
      } else {
        console.log('Digite uma letra maiúscula')
        limpar();
      }
      // console.log(letra, indexInicial)
    }
    cifrado += ' ';
  })
  console.log(cifrado)
  return saida.value = cifrado
}

function decifrar() {
  const upperCase = entrada.value.toUpperCase()
  const palavras = upperCase.split(' ');
  let decifrado = '';
  palavras.forEach(i => {
    // console.log(i)
    for(letra of i) {
      // console.log(letra)
      const indexInicial = letrasMaiusculas.indexOf(letra)
      let indexFinal;
      if(indexInicial !== -1 && indexInicial >= Number(chaveDeslocamento.value)) {
        indexFinal = (indexInicial - Number(chaveDeslocamento.value));
        decifrado += letrasMaiusculas[indexFinal];
      } else if(indexInicial !== -1) {
        let diferenca = Number(chaveDeslocamento.value) - indexInicial
        indexFinal = letrasMaiusculas.length - diferenca
        decifrado += letrasMaiusculas[indexFinal];
        console.log(decifrado) 
      } else {
        console.log('gata, não conheço essa letra não!')
        limpar();
        return;
      }
    }
    decifrado += ' ';
  })
  console.log(decifrado)
  return saida.value = decifrado
}