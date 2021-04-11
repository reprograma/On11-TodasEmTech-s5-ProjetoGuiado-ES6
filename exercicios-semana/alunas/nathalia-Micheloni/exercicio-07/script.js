// - Exercício 07 - Interaja com o array de linguagens e pare ao chegar em Node

// ```
// const linguagens = ['JavaScript', 'Go', 'Java', 'Angular', 'Node', 'React', 'Ruby']
// ```

// Depois coloque a última linguagem do array em uma variável sem removê-la do array.

let linguagens = ['JavaScript', 'Go', 'Java', 'Angular', 'Node', 'React', 'Ruby'];

linguagens.push(linguagens.shift());

console.log(linguagens);