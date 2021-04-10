function  Lanche ( ) {

    let codigoLanche =  Number ( prompt ( "Digite o código do produto: \ 1- cachorro quente R$: 4,00 \  2- X-salada R$: 4,50 \  3- X-bacon R$: 5,00 \  4- Torrada simples R$: 2,00 \  5- Refrigerante R$ 1,50 " ) ) ;

    if  ( codigoLanche  ==  1 )  {
    produto  =  "cachorro quente" ;
    quantidade  =  prompt ( "Digite quantos "  +  produto  +  " você deseja?" , "" ) ;
    total  =  quantidade  *  4,00 ;
    alert ( "Seu pedido totaliza R$:"  +  total .toFixed ( 2 ) ) ;
    }

    else  if  ( codigoLanche  ==  2 ) {
    produto  =  "X - salada" ;
    quantidade  =  prompt ( "Digite quantos "  +  produto  +  " você deseja?" , "" ) ;
    total  =  quantidade  *  4,50 ;
    alert ( "Seu pedido totaliza R$:"  +  total .toFixed ( 2 ) ) ;
    }

    else  if  ( codigoLanche  ==  3 ) {
    produto  =  "X - bacon" ;
    quantidade  =  prompt ( "Digite quantos "  +  produto  +  " você deseja?" , "" ) ;
    total  =  quantidade  *  5,00 ;
    alert ( "Seu pedido totaliza R$:"  +  total .toFixed ( 2 ) ) ;
    }

    else  if  ( codigoLanche  ==  4 ) {
    produto  =  "Torrada simples" ;
    quantidade  =  prompt ( "Digite quantas "  +  produto  +  " você deseja?" , "" ) ;
    total  =  quantidade  *  2,00 ;
    alert ( "Seu pedido totaliza R$:"  +  total .toFixed ( 2 ) ) ;
    }

    else  if  ( codigoLanche  ==  5 ) {
    produto  =  "Refrigerante" ;
    quantidade  =  prompt ( "Digite quantos "  +  produto  +  " você deseja?" , "" ) ;
    total  =  quantidade  *  1,50 ;
    alert ( "Seu pedido totaliza R$:"  +  total .toFixed ( 2 ) ) ;
    }

  }

Lanche ( ) ;
