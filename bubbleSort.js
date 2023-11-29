var numeros = [6,3,8,0,2,7,1,9,5,4]
var cont = 0
var i1=0
var i2=1
var verifica = numeros.slice(0)

function compare (arr1,arr2){
  return arr1.length === arr2.length &&
    arr1.every((item,index) => item === arr2[index])
}

console.log(numeros)

compara(i1,i2,cont)

function compara(i1,i2,cont){

  var c1 = numeros[i1]
  var c2 = numeros[i2]

  if (numeros[i1] > numeros[i2]){
    numeros[i1] = c2
    numeros[i2] = c1
  }

  i1++
  i2++
  cont++

  console.log(cont)
  console.log(numeros)
  console.log(verifica)
 

  if(cont < (numeros.length-1)){
    console.log("caiu no if")
    
    compara(i1,i2,cont)
  } else {
    console.log("caiu no else")
    i1 = 0
    i2 = 1
    cont = 0
    console.log(verifica !== numeros)
    
    if (compare(verifica,numeros)) {
      compara(i1,i2,cont)
    } else {
      console.log("terminou")
    }
  }
}