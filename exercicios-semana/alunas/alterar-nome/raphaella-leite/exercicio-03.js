
        var  valor  =  alcool  =  gasolina  =  diesel  =  0 ;

    
            let  getCodigo  =  Number ( prompt ( "Digite \n 1 ALCOOL \n 2 GASOLINA \n 3 DIESEL \n 4 FIM" ) ) ;
            if ( getCodigo  <1  ||  getCodigo  >4 ) {
                alert ( "ERROR! Digite o código válido!" ) ;
            }
            if ( getCodigo  ==1 ) {
                alcool ++ ; 
            }  else  if ( getCodigo  ==2 ) {
                gasolina ++ ;
            } else  if ( getCodigo  ==3 ) {
                diesel  ++ ;
            } else  if ( getCodigo  ==4 ) {
                pausa ;
            }
        
        console.log ( "MUITO OBRIGADO \n Álcool: ${alcool} \n Gasolina: ${gasolina} \n Diesel: ${diesel}" ) ;
        