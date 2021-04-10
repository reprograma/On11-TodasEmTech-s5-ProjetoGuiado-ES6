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

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
//const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//exemplo
//var texto = prompt("Digite um texto: ");
//var texto = entrada.value;
function cifrar() {
  //const palavras = entrada.value.split(" ");
  const somenteMaiusculas = entrada.value.toUpperCase(); //Transforma em letras maiusculas os dados de entrada
  const palavras = somenteMaiusculas.split(" ");
  //console.log("As Palavras", palavras);

  // for(i=0; i<palavras.length; i++){
  //   console.log(palavras[i],"Texto Genérico ------ Palavras")
  // }

  let cifrado = "";

  palavras.forEach(itemPalavras => {  // esse for usa a arrow function
  //for (itemPalavras of palavras) {} pode usar esse tambem 
    
    let chave = Number(chaveDeslocamento.value);
    if (chave !== 0) {

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
    } else {
      alert("Digite uma chave");
  }
      cifrado += " ";
  })

  saida.value = cifrado;
  return;
}


function decifrar() {
  const somenteMaiusculas = entrada.value.toUpperCase();
  const palavrasDecifrar = somenteMaiusculas.split(" ");
  
  let decifrado = "";
  for (palavra of palavrasDecifrar) {

      // laço que itera a palavra - letra a letra
      for (letra of palavra) {
          //console.log("letra : ", letra);
          const indexInicial = letrasMaiusculas.indexOf(letra);
          let indexFinal;
          //console.log(indexInicial, "indexInicial");

          if (indexInicial !== -1 && indexInicial >= Number(chaveDeslocamento.value)) {

            indexFinal = (indexInicial - Number(chaveDeslocamento.value));
            // console.log(indexFinal, "indexFinal");
            decifrado += letrasMaiusculas[indexFinal];

          // A CONDIÇÃO GARANTE QUE A LETRA EXISTE NO ARRAY E A CHAVE DE DESLOCAMENTO É MAIOR QUE QUE O INDEX INICIAL;
          // else if (indexInicial !== -1 && Number(chaveDeslocamento.value) > indexInicial)
          } else if (indexInicial !== -1) {
            indexFinal = letrasMaiusculas.length - (Number(chaveDeslocamento.value) - indexInicial);
            // console.log( "indexInicial", indexInicial);
            // console.log("indexFinal", indexFinal );
            decifrado += letrasMaiusculas[indexFinal];
          
          }else {
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


