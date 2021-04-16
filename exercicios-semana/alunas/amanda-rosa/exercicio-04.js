senha = 2002


function senhaInserida(){
    senhaUsuario = Number(prompt("insira senha:"))
    alert("Voce insiu um valor")

}

senhaInserida()

if(senha == senhaUsuario){alert("acesso permitido")}

while(senha != senhaUsuario){
    alert("senha invalida")
    senhaInserida()   
}












