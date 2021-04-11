let res = document.querySelector('div#res');
const btnVerificar = document.querySelector('input#btnVerificar');
btnVerificar.addEventListener('click', verificar);
const btnLimpar = document.querySelector('input#btnLimpar');
btnLimpar.addEventListener('click', limpar);

const txtVl01 = document.querySelector('input#txtVl01');
const txtVl02 = document.querySelector('input#txtVl02');
const txtVl03 = document.querySelector('input#txtVl03');
const txtVl04 = document.querySelector('input#txtVl04');
const txtVl05 = document.querySelector('input#txtVl05');


export default function verificar() {
    

    if (txtVl01.value == "" || txtVl02.value == "" || txtVl03.value == "" || txtVl04.value == "" || txtVl05.value == "" ) {
        alert('[ERRO] Por favor preencha os 5 campos com os numeros desejados')
    } else {
        const values = [txtVl01.value,txtVl02.value,txtVl03.value,txtVl04.value,txtVl05.value];
        let even = values.filter(val => val % 2 == 0);
        let odd = values.filter(val => val % 2 != 0);
        let positive = values.filter(val => val > 0);
        let negative = values.filter(val => val < 0);

        res.innerHTML = `
        ${even.length} valor(es) par(es)</br>
        ${odd.length} valor(es) ímpar(es)</br>
        ${positive.length} valor(es) positiv(os)</br>
        ${negative.length} valor(es) negativ(os)</br>   
        `

    }

}

export function limpar() {
    res.innerHTML = "";
    txtVl01.value = "";
    txtVl02.value = "";
    txtVl03.value = "";
    txtVl04.value = "";
    txtVl05.value = "";

}