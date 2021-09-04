function reverse (sentence){
    let array=sentence.split(' ')
    let newArray=[]
    for(let i=array.length-1;i>=0;i--){
        newArray.push(array[i])
    }
    return newArray.join(' ')
}

console.log(reverse(/*ingresar la frase a invertir*/)) 