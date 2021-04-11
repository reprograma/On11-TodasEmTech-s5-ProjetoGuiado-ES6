const btnConsultAllYears = document.querySelector('input#btnConsultAllYears');
btnConsultAllYears.addEventListener('click',consultAll);
let res = document.querySelector('div#res');
const txtYearRihanna = document.querySelector('input#txtYearRihanna');
const btnConsultYear = document.querySelector('input#btnConsultYear');
btnConsultYear.addEventListener('click',consultYear)

const rihannaAlbuns = [2005,2006,2007,2009,2010,2011,2012,2016];


export default function consultAll() {
    res.innerHTML = "";

    res.innerHTML = `<p>Todos os Anos que Rihanna lançou um album:</p>`
    for (let c = 0; c <= rihannaAlbuns.length; c++) {
 
        

        if(c == (rihannaAlbuns.length - 1)) {
            res.innerHTML += ` e ${rihannaAlbuns[c]}`
            c++;
            break;
        }
        res.innerHTML += `${rihannaAlbuns[c]}`

        if(c < (rihannaAlbuns.length - 2)) {
            res.innerHTML += ", "
            
        }
        
    }


}

export function consultYear() {
    res.innerHTML = "";
    let filter = rihannaAlbuns.filter(val => val == txtYearRihanna.value)

    if (filter == 0) {
        res.innerHTML = `Este Ano a Rihanna não lançou Album`
    } else {
        res.innerHTML += `Rihanna Lançou Album este ano! ${filter}`
    }
    
}