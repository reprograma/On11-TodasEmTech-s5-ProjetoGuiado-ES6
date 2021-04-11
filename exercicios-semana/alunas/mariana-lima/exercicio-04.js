function confirmarChave(){
    
    var numero = Number(prompt("Insira a senha correta: "));
    if(numero == 2002){
        alert("Acesso permitido")
    }else{
        alert("Senha inválida")
        return confirmarChave()
    }
    }
    confirmarChave()