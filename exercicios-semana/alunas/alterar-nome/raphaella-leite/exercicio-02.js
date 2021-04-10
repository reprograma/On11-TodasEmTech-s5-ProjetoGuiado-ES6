let  totalPar  =  0 ;
let  totalImpar  =  0 ;
let   totalPositivo  =  0 ;
let  totalNegativo  =  0 ;

 valores  = Number(prompt ( "numero:" )) ;

          for ( var  i  =  0 ;  i  <  5 ;  i  ++ ) {
            if ( valores  <  0 ) {
                totalNegativo ++ ;
            }  else  if  ( valores  >  0 ) {
                totalPositivo ++ ;
            }

            if ( valores  %  2  ==  0 ) {
                totalPar ++ ;
            }  else  {
            totalImpar ++ ;
            }
        }

        document.write ("\n valores pares:"  , totalPar ,  "||" ) ; 
        document.write ( "\n valores impares:"  , totalImpar ,  "||"  ) 
        document.write ( "\nvalores positivos:"  , totalPositivo ,  "||"  ) ;
        document.write ( "\nvalores negativos:"  , totalNegativo ,  "||"  ) ;
