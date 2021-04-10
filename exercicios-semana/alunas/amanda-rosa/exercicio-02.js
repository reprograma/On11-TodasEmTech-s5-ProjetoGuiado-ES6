
let array1 = []
let array2 = []
let array3 = []
let array4 = []
let array5 = []



function entrada(){
    num = Number(prompt("digite numero: "))
    array5.push(num)

    if(num%2==0){
        array1.push(num)
    }
    if(num%2 != 0){
        array2.push(num)
    }
    if(num > 0){
        array3.push(num)
    } 
    if(num < 0){
        array4.push(num)
    }

    

}
entrada()


for(i=1; i<5;i++){
    entrada()
    // console.log(array1)
    // console.log(array2)
    //console.log(array3)
    //console.log(array4)
    // alert(Object.values(array1))
    // alert(Object.values(array2))
    // console.log(array1.length)
    // console.log(array2.length)
    // console.log(array3.length)
    // console.log(array4.length)
    //document.write(array1.length + "valor(res) par(es)")
}

document.write(Object.values(array5) + "<br/>")


document.write(array1.length + " valor(res) par(es) <br/>")
document.write(array2.length + " valor(res) impar(es)<br/>")
document.write(array3.length + " valor(res) positivo(s) <br/>")
document.write(array4.length + " valor(res) negativo(s) <br/>")





