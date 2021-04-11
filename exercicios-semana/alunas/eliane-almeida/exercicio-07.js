/* Exercício 07 - Interaja com o array de linguagens e pare ao chegar em Node
const linguagens = ['JavaScript', 'Go', 'Java', 'Angular', 'Node', 'React', 'Ruby']
Depois coloque a última linguagem do array em uma variável sem removê-la do array. */

const linguagens = ['JavaScript', 'Go', 'Java', 'Angular', 'Node', 'React', 'Ruby'];

for (let i = 0; i < linguagens.length; i++) {
    if (linguagens[i] == 'Node') {
        break;
    } else {
        alert(linguagens[i]);
    }
}
let ultimoElemento = linguagens[linguagens.length - 1];
alert(`O ultimo elemento do array é: ${ultimoElemento}`);