let cachorro = { cod: 1, espec: "cachorro quente", preco: 4}

let salada = { cod: 2, espec: "x-salada", preco: 4 }

let bacon = { cod: 3, espec: "x-bacon", preco: 5}

let torrada = {cod: 4, espec: "torrada simples",preco: 2}

let refrigerante = {cod: 5, espec: "refrigerante",preco: 1.5}


items = Number(prompt("Quantos produtos diferentes você levará? "))



function operacao(){
    pedido = Number(prompt("digite o código do produto: "))
    quantidade = Number(prompt("digite quantas unidades do produto você vai querer: "))


    switch(pedido){
        case 1:
            p = cachorro.preco;
            total = quantidade*p;
            
            console.log(total);
            console.log(p);
    
            break;
        case 2:
            p = salada.preco;
            total = quantidade*p;

            break;
        case 3:
            p = bacon.preco;
            total = quantidade*p;
            
            break;
        case 4:
            p = torrada.preco;
            total = quantidade*p;

            break;
        case 5:
            p = refrigerante.preco;
            total = quantidade*p;

            break;
        default:
            alert("parece que alguém não escolheu o que levar");
            
            break;      
    }

    alert('o total desse produto é R$' + total.toFixed(2))
    
}

operacao();


for(i=1; i<=items-1; i++){
     operacao()
}





 






  


 