//Utilizar const e/ou let

const saida = document.getElementById("output");
const entrada = document.getElementById("input");
const chaveDeslocamento = document.getElementById("shift-input");

function limpar() {
  entrada.value = "";
  chaveDeslocamento.value = "";
  saida.value = "";
  return;
}

const alfabeto = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase().split("");


function setCifra(textoIn, desl, chars) {
  return textoIn.split(" ").map(palavra => {
    return palavra.split('')
      .map(valor => chars[(chars.indexOf(valor) + desl) % chars.length])
  }).map(palavra => palavra.join("")).join(" ");
}



function getCifra(textoIn, desl, chars) {
  return textoIn.split(" ").map(palavra => {
    return palavra.split('')
      .map(valor => {
        if ((chars.indexOf(valor) - desl) > -1) return chars[(chars.indexOf(valor) - desl)]
        else return chars[chars.indexOf(valor) + (chars.length - desl)]
      })
  }).map(palavra => palavra.join("")).join(" ");
}

function notificarUsuario(msg) {
  alert(msg)
  return;
}


function cifrar() {
  const keyDeslocamento = Number(chaveDeslocamento.value); // se o campo for vazio retorna 0
  const textoIn = entrada.value.toLocaleUpperCase();
  const campoInvalido = textoIn
  .split('') // => array
  .every(valor => alfabeto.indexOf(valor) == -1);
  
  if (isNaN(keyDeslocamento) || Math.sign(keyDeslocamento) == -1 || !Number.isInteger(keyDeslocamento)) return notificarUsuario('Insira um numero absoluto valido');
 
  if (textoIn == "" || campoInvalido) return notificarUsuario('Insira somente texto!');

  saida.value = setCifra(textoIn, keyDeslocamento, alfabeto);
  return;
}


function decifrar() {
  const keyDeslocamento = Number(chaveDeslocamento.value); // se o campo for vazio retorna 0
  const textoIn = entrada.value.toLocaleUpperCase();
  const campoInvalido = textoIn
  .split('') // => array
  .every(valor => alfabeto.indexOf(valor) == -1);
  
  if (isNaN(keyDeslocamento) || Math.sign(keyDeslocamento) == -1 || !Number.isInteger(keyDeslocamento)) return notificarUsuario('Insira um numero absoluto valido');
  
  if (textoIn == "" || campoInvalido) return notificarUsuario('Insira somente texto!');

  saida.value = getCifra(textoIn, keyDeslocamento, alfabeto);
  return;
}




