//Utilizar const e/ou let

var saida = document.getElementById("output")
var entrada = document.getElementById("input")
var chaveDeslocamento = document.getElementById("shift-input")

function limpar() {
  entrada.value = ""
  chaveDeslocamento.value = ""
  saida.value = ""
  return
}

const letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function cifrar() {
  const palavras = entrada.value.split(" ")
  console.log('palavras', palavras)

  let cifrado = ""
  for(itemPalavras of palavras){

    for(letra of itemPalavras){
      const indexInicial = letrasMaiusculas.indexOf(letra)

      let indexFinal

      if(indexInicial == -1){
        console.log('Ops, essa letra não foi encontrada, digite maiúscula!')
        limpar()
        return
      
      }else{
        console.log('index inicial', indexInicial)
        indexFinal =  (indexInicial + Number(chaveDeslocamento.value)) % 26
        cifrado += letrasMaiusculas[indexFinal]
      }
    }
    cifrado += " "
  }
  console.log("cifrar", cifrado);
  return saida.value = cifrado;
}
