/* - Exercício 06 - * Crie um array com todos os anos que Rihanna lançou álbum
2005 2006 2007 2009 2010 2011 2012 2016
Interaja com o array utilizando um loop, para mostrar no console a seguinte 
mensagem: "Rihanna lançou álbum no ano de XXXX". */

let albuns = [2005, 2006, 2007, 2009, 2010, 2011, 2012, 2016]

for (let i = 0; i < albuns.length; i++) {
    alert(`Rihanna lançou álbum no ano de ${albuns[i]}`)
}