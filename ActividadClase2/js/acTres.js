document.getElementById("btnAceptar").addEventListener('click', () => {  //
    let numSecuencia = document.getElementById("secuencia").value
    let x = document.getElementById("x").value
    let div = document.getElementById("imprimir")
    div.innerHTML=secuencia(numSecuencia,x);
})

function secuencia(numSecuencias,valorX){
    let resultado = 0;
    let exponente = 0;
    let factorial = 1;

    for(let i = 1;i<=numSecuencias; i++){ 
        resultado += Math.pow(valorX,exponente)/factorial;
        exponente++;
        factorial*=n;
    }
    
    return resultado
}

