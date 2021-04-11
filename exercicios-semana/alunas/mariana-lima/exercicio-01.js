

let codigo = Number(prompt("Digite o código do produto"));
let quantidade = Number(prompt("Digite a quantidade do produto"));

switch (codigo) {
  case 1:
    total =  quantidade * 4
    document.write("Total:R$", total.toFixed(2));
    break;

    case 2:
    total =  quantidade * 4.5
    document.write("Total:R$", total.toFixed(2));
    break;

    case 3:
    total =  quantidade * 5
    document.write("Total:R$", total.toFixed(2));
    break;

    case 4:
    total =  quantidade * 2
    document.write("Total:R$", total.toFixed(2));
    break;

    case 5:
    total =  quantidade * 1.5
    document.write("Total:R$", total.toFixed(2));
    break;
 
  default:
    alert("Digite um código válido");
}


