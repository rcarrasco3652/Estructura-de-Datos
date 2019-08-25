document.getElementById("btn").addEventListener('click', () => {
    let numero = document.getElementById("numero").value

    console.log(numeroPerfecto(numero))
   
})

function numeroPerfecto(numero){
    if(comparador == sumaDivisores(numero)){
        return true
    }else{
        return false
    }
}

function sumaDivisores(num){
    let sumador = 0
    for(let i =1; i<num; i++){
        if(num%i==0){
            sumador+=i
        }
    }
    return sumador
}

//beatufy