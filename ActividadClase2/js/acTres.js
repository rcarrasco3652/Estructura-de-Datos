document.getElementById("btnAceptar").addEventListener('click', () => {  //
    let numSecuencia = document.getElementById("secuencia").value
    let x = document.getElementById("x").value
    let div = document.getElementById("imprimir")
    div.innerHTML=secuencia(numSecuencia,x);
})

function secuencia(numSecuencia,x){
    let resultado = 0;
    let n = 0;
    let f = 1;
    for(let i = 1;i<=numSecuencia; i++){ 
        resultado += Math.pow(x,n)/f;
        n++;
        f*=n;
    }
    return resultado
}

