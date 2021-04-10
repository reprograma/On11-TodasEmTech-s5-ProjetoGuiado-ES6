function posto(){
    let alcool = 0
    let gasolina = 0
    let diesel = 0
    let tipo = 0
    while (tipo != 4) {
        tipo = leitor.random();
        while (tipo < 1 || tipo > 4) {
            tipo = leitor.random();
        }
        switch (tipo) {
            case 1: alcool++;
                break;
            case 2: gasolina++;
                break;
            case 3: diesel++;
                break;
        }
    }
    document.wirte("MUITO OBRIGADO");
    document.write("Alcool: " + alcool);
    document.wirte("Gasolina: " + gasolina);
    document.wirte("Diesel: " + diesel);
}