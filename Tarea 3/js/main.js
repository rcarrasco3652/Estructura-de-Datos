import Corredor from "../js/Corredor.js"

class Main {
    constructor() {
        let corredorUno = new Corredor(1);
        let corredorDos = new Corredor(2)

        document.getElementById("btnActivar").addEventListener('click', () => {
            if(corredorUno._posicion<100){
                corredorUno.correr()
            }else{
                alert(`El corredor 1 gano la carrera`)
                return
            }
            if(corredorDos._posicion<100){
                corredorDos.correr()
            }else{
                alert(`El corredor 2 gano la carrera`)
                return
            }
            
            
        })


        document.getElementById("btnReiniciar").addEventListener('click', () => {
            
            corredorUno.nuevaCarrera()  
            corredorDos.nuevaCarrera()
            
        })
    }
}
let m = new Main();