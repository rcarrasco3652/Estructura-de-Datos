document.getElementById("btnAceptar").addEventListener('click', () => {
    let numSecuencia = document.querySelector("#secuencia").value
    let div = document.getElementById("imprimir")
    div.innerHTML=secuencia(numSecuencia);
})

function secuencia(numSecuencia) {   
    let dSuma = 1;
    let dResta = 3;
    let resultado = 0;
    for(let i = 1; i<= numSecuencia; i++){
        if(i%2==0){
            resultado -= 4/dResta;
            dResta + 4
        }else{
            resultado += 4/dSuma;
            dSuma +4
        }
    }
    return resultado;
}