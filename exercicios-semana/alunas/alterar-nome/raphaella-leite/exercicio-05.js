let  nome  =  prompt ( "Digite o nome do funcionario:" ) .toUpperCase ( ) ;
        let  salario  =  Number ( prompt ( "Salário R$:" ) ) ;
        let  totalVendas  =  Number ( prompt ( "Vendas R$:" ) ) ;

        let  totalReceber  =  ( ( totalVendas *  0.15 )  +  salario ) .toFixed ( 2 ) ;
        document.write ("TOTAL = R$:" ,  totalReceber ) ;