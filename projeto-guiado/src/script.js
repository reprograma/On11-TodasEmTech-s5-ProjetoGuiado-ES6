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
  const palavras = entrada.value.toUpperCase().split(" ")
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
        indexFinal =  (indexInicial + Number(chaveDeslocamento.value)) % 26
        cifrado += letrasMaiusculas[indexFinal]
      }
    }
    cifrado += " "
  } 
  return saida.value = cifrado
}

function decifrar(){
  const palavrasDecifrar = entrada.value.toUpperCase().split(" ")
  let decifrado = ""
  
  for(palavra of palavrasDecifrar){
    console.log('palavra: ', palavra)

    for(letra of palavra){
      const indexInicial = letrasMaiusculas.indexOf(letra)
      let indexFinal

      console.log('index Inicial: ', indexInicial)
      console.log('letra: ', letra)
      
      if (indexInicial !== -1 && indexInicial >= Number(chaveDeslocamento.value)) {
        indexFinal =  (indexInicial - Number(chaveDeslocamento.value))
        console.log('Index Final: ', indexFinal)
        decifrado += letrasMaiusculas[indexFinal]

      }else if (indexInicial !== -1){
        indexFinal =  letrasMaiusculas.length - (Number(chaveDeslocamento.value) - indexInicial)
        decifrado += letrasMaiusculas[indexFinal]

        console.log('index final é: ', indexFinal);
       
      } else {
        console.log('ERRO: Letra não encontrada')
        limpar()
        return
      }
    }

    decifrado += ' '
  }

  return saida.value = decifrado
}