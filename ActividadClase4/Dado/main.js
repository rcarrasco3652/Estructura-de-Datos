import Dado from "../Dado/dado.js"
document.getElementById("btn").addEventListener('click', () => { 
    let lanzamientos = document.getElementById("lanzamientos").value
    sacarLanzamientos(lanzamientos)
})

function sacarLanzamientos(lanzamientos){
    let m = new Dado();
    let numeros = [0,0,0,0,0,0]
    
    for(let i = 0; i<lanzamientos; i++){
        let d = m.lanzar()
        numeros[d-1]++
        
    }
    for (let i=0;i<6;i++)
        console.log("cara " + (i+1) + " = " + numeros[i])
}
