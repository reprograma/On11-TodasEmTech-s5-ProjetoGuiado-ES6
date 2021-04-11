


let par = 0
let impar = 0 
let positivo = 0
let negativo = 0
function entrada()  {
    var num = Number (prompt("Digite um número"));
     
          if(num == "" ){

         alert("Digite um número")
          return entrada()

         } else if (num % 2 == 0){
              par ++

            


         } else if(num % 2 != 0){
             impar ++

            


         }   if (num > 0){
            positivo ++

       
        
              
            
            } if (num < 0){
              negativo ++
            
            }
        }
            for(var i = 1; i <= 5; i++){
                entrada()

            } 


            function saida (){

                document.write(par, " valor(es) par(es)", '<br/>', impar, "valor(es) impar(es)", '<br/>', positivo, "valor(es) positivo(s)", '<br/>', negativo, "valor(es) negativo(s)" )
            }

            saida()
