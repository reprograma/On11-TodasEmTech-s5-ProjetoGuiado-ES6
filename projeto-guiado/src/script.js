
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

//     A  B  C  D  E  F  G  H  I  J  K  L  M
//     0  1  2  3  4  5  6  7  8  9  10 11 12

//     N  O  P  Q  R  S  T  U  V  W  X  Y  Z
//    13 14 15 16 17 18 19 20 21 22 23  24  25

// const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");



const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// exemplo de código que faz a mesma coisa
// var texto = prompt("Digite um texto: ");
// var texto = entrada.value;

function cifrar () {
  const palavras = entrada.value.split (" ");
  // retorno esperado ["TODAS", "EM", "TECH"]

   //for (i = 0; i <palavras.length; i ++) {
   //console.log (palavras [i], "texto genérico palavra");
  //}

  let cifrado = "";
  for (itemPalavras of palavras) {

      for (letra of itemPalavras) {
          // PRECISAMOS PEGAR O ÍNDICE DA LETRA NO ARRAY COM O ALFABETO
          const indexInicial = letrasMaiusculas.indexOf(letra);

          let indexFinal;
          // criar um if else , onde se não for found no array de letras maiusculas
          // retorne um alert avisando, do contrario dê um console.log
          if (indexInicial !== -1) {
              // vamos somar o índice inicial com chave de deslocamento
              //% retorna o resto da divisão
              indexFinal = (indexInicial + Number(chaveDeslocamento.value))% 26;
              // cifrar = cifrar + letrasMaiusculas [indexFinal]
              cifrado += letrasMaiusculas[indexFinal];
          } else {
              alert ("Opa, digite uma letra maiúscula");
              limpar();
              return;
          }
      }

      cifrado += "";
    }
  saida.value(cifrado);
  return;
}

// >> criar uma função cifrar e pegar o valor de entrada
// >> log do console nã o nesse valor de entrada

//- criar função decifrar
//    - criar variavel que receba o texto, e a transforme em Array;
//-em um laço cada dê um console.log item desse array de palavras;

  function decifrar() {
      const palavrasDecifrar = entrada.value.split (" ");
      let decifrado = "";

      for(palavra of palavrasDecifrar) {

          for (letra of palavra) {
              console.log("letra : ", letra);
              const indexInicial = letrasMaiusculas.indexOf(letra);
              let indexFinal; 
              console.log(indexinicial, "indexInicial");

              //A CONDIÇÃO GARANTE QUE O INDEX FINAL É POSITIVO;
              //criar uma variavel que busque array do alfabeto o index da letra
              //dÊ um console.log e vá ao navegador verificar se funcionou, digite algo e clique em decifrar
              //criar uma variavel para o index final
              if (indexInicial !== -1 && indexInicial >= Number(chaveDeslocamento.value)) {
                  //lógica para cifrar index final no decifra >>> index inicial + chave deslocamento
                  //faça a lógica inversa para o indexFinal e dê um console.log no valor//testem z
                  indexFinal = (indexInicial - Number(chaveDeslocamento.value));
                  cifrado  += letrasMaiusculas[indexFinal];
                
                }else if (indexInicial, "indexInicial"{

                }

                }else {
                alert("Poxa, não encontrei o que digitou");
                limpar();
                return;
              }
          }
      }

}











// var texto = prompt("Digite um texto: ");

//var texto = entrada.value;

//criar a função

/* function cifrar() {
  const palavras = entrada.value.split(" ");
  console.log("este é um genérico para identificar", palavras); */

  //  ["TODAS", "EM", "TECH"]

  /* for (i = 0; i < palavras.length; i++) {
      console.log(palavras[i], "texto genérico palavra");
      
  }
  
  for (item of palavras) {
    console.log(item, "texto genérico --- item");
    []
  }

  for (itemPalavras of palavras) {

    //precisamos pegar o index da letra no array com o alfabeto 

      for (letra of itemPalavras)
    const indexInicial = letrasMaiusculas.indexOf(letra);

    console.log('letra, letra');
    console.log('indexInicial', indexInicial)
 */
  

    // criar if else, onde se nã for encontrado no array de letras
    //retorne um alert avisando, do contrario de um console.log
