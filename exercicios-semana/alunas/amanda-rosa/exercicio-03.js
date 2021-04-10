let prefere1 = []
let prefere2 = []
let prefere3 = []

function operacao(){
    i = Number(prompt("Qual o combustível de sua preferência?\n Digite 1 se você preferir alcool \n Digite 2 se você preferir gasolina \n Digite 3 se você preferir diesel \n Digite 4 para sair"))
}


operacao()


for(;;){
    for(;i<4;){
        if(i==1){ 
        prefere1.push(i)
        }else if(i==2){
        prefere2.push(i)
        }else if(i==3)
        {
            prefere3.push(i)
        }
        operacao() 
    }
    if(i==4){
        console.log(prefere1)
        console.log(prefere2)
        console.log(prefere3)
        document.write("Muito obrigada <br/>")
        document.write("alcool: " + prefere1.length + "<br/>")
        document.write("gasolina: " + prefere2.length + "<br/>")
        document.write("diesel: " + prefere3.length + "<br/>")
        break
    }else{
        operacao()
    }
}




















