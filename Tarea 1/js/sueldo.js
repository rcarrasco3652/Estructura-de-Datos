document.getElementById("btnAceptar").addEventListener('click', () => {
    let sueldo = document.querySelector("#saldo").value
    let divResultado = document.getElementById("imprimir")
    nuevoSaldo(sueldo,divResultado);
})

function nuevoSaldo(sueldo,lienzo) {
    let aumento = 0
    let nSueldo = 0;
    if (saldo <= 1000 ) {
        nSueldo = sueldo * 1.15;
        aumento = sueldo * 0.15;
    }else if (sueldo>1000 && sueldo<=1200) {
        nSueldo = sueldo * 1.12;
        aumento = sueldo * 0.12;
    }else if(sueldo>1200 && sueldo<=1400){
        nSueldo = sueldo * 1.10;
        aumento = sueldo * 0.10;
    }else if(sueldo>1400 && sueldo<=1500){
        nSueldo = sueldo * 1.08;
        aumento = sueldo * 0.08;
    } else{
        nSueldo = sueldo * 1.05;
        aumento = sueldo * 0.05;
    }
    lienzo.innerHTML = `Sueldo anterior: $${sueldo} 
    Aumento: $${aumento} 
    Nuevo sueldo: $${nSueldo}`
}