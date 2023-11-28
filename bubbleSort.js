let numeros = [6,3,8,0,2,7,1,9,5,4]
let cont = 0
let cont2 = numeros.length
let i1=0
let i2=1

console.log(numeros)

compara(i1,i2,cont,cont2)

  function compara(i1,i2,cont,cont2){

      let c1 = numeros[i1]
      let c2 = numeros[i2]

  if (numeros[i1] > numeros[i2]){
    numeros[i1] = c2
    numeros[i2] = c1
  }

    i1++
    i2++
    cont++

    console.log(cont)
    console.log(cont2)
    console.log(numeros)

    if(cont<numeros.length-1){
    compara(i1,i2,cont,cont2)
    }
    else{
        cont2--
        i1 = 0
        i2 = 1
        cont = 0
        if (cont2 > 0) {
            compara(i1,i2,cont,cont2)
        }
    }
}