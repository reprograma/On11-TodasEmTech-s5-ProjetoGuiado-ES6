// Crie um array com todos os anos que Rihanna lançou álbum   

// 2005 2006 2007 2009 2010 2011 2012 2016

// * Interaja com o array utilizando um loop, para mostrar no console a seguinte mensagem: "Rihanna lançou álbum no ano de XXXX"


let anos = "2005 2006 2007 2009 2010 2011 2012 2016"

let array = anos.split(" ")

console.log(Object.values(array))

for(element of array){
    document.write("Rihanna lançou album em " + element + "<br/>")
}
