const summa = Number(prompt("summani kiriting"))

const calcSumma = function(arr){
    const s= []

    if(summa>50 && summa<300 ){
        const sum= summa + summa /100 * 15
        s.push(`${sum} sum`)
    }else{
        const  a= summa +summa/100 *20
        s.push(`${a} sum`)
    }

    return s
}

console.log(calcSumma(summa));