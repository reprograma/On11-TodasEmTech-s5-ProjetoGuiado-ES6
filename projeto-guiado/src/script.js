//Utilizar const e/ou let

document.getElementById("input").addEventListener('keyup', (ev) => {
  const input = ev.target;
  input.value = input.value.toUpperCase();
});

var chaveDeslocamento = document.getElementById("shift-input");
var saida = document.getElementById("output");

function limpar() {
  entrada.value = "";
  chaveDeslocamento.value = "";
  saida.value = "";
  return;
}

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQESTUVWXYZ".split("");
console.log('letrasMaiusculas', letrasMaiusculas);

function cifrar() {
  const palavras = input.value.split(" ");
  console.log('palavras:', palavras);

  // for (let i = 0; i < palavras.length; i++) {
  //   console.log(palavras[i], 'Texto genérico...');
  // }

  for (palavra of palavras) {
    for (letra of palavra) {
      
      const indexInicial = letrasMaiusculas.indexOf(palavra);
      const indexFinal = indexInicial + chaveDeslocamento.value;

      // if (indexInicial != -1) {
      //   console.log(indexInicial);
      // } else {
      //   alert('Ops, caractere inválido!');
      //   limpar();
      // }

      console.log('letra:', letra);
      console.log('indice:', indexInicial);
      console.log('indice:', indexFinal);
    }
  }
}