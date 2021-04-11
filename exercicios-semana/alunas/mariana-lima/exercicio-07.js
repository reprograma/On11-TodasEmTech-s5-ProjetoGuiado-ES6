/*- Exercício 07 - Interaja com o array de linguagens e pare ao chegar em Node

```
const linguagens = ['JavaScript', 'Go', 'Java', 'Angular', 'Node', 'React', 'Ruby']
```

Depois coloque a última linguagem do array em uma variável sem removê-la do array.*/

const linguagens = ['JavaScript', 'Go', 'Java', 'Angular', 'Node', 'React', 'Ruby']

for (var i=0; i < 5; i++)
{
    console.log( linguagens[i]);
}



const arr = (linguagens[linguagens.length - 1]);
console.log("Essa é a última linguagem do array: ", arr)