var btnEnd = document.querySelector('input#btnEnd');
btnEnd.addEventListener('click', endSurvey)
var txtValue = document.querySelector('input#txtValue');
txtValue.addEventListener('change', register);
var btnClear = document.querySelector('input#btnClear');
btnClear.addEventListener('click',clear);
btnClear.hidden = true;


let res = document.querySelector('div#res');

var pickNumber = [];

function register() {

    if (txtValue.value <= 3 && txtValue.value != 0) {
        res.innerHTML = "";

        pickNumber = [...pickNumber,txtValue.value];
        txtValue.value = "";
        txtValue.focus();

    } else if(txtValue.value == 4) {
        endSurvey();
    }


}

function endSurvey() {
    btnClear.hidden = false;

    let alcool = 0;
    let gas = 0;
    let diesel = 0;

    let array = pickNumber.filter(val => {
        switch (val) {
            case "1":
                alcool++;
                break;
            case "2":
                gas++;
                break;
            case "3":
                diesel++;
                break;
        }
    });
    res.innerHTML = `
    MUITO OBRIGADA<br>
    Alcool: ${alcool}<br>
    Gas: ${gas}<br>
    Diesel: ${diesel}<br>
    `

}

function clear() {
    btnClear.hidden = true;
    res.innerHTML = "";
    txtValue.value = "";
    txtValue.focus();
    pickNumber = [];



}