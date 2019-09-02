import Corredor from "../js/Corredor.js"

class Main {
    constructor() {
        let corredorUno = new Corredor(1);
        let corredorDos = new Corredor(2)

        document.getElementById("btnActivar").addEventListener('click', () => {
            while (corredorUno.posicion < 100 && corredorDos.posicion < 100) {
                corredorUno.correr();
                corredorDos.correr();

                console.log(`Corredor 1: ${corredorUno.posicion}   Corredor 2: ${corredorDos.posicion}`)
            }
            if (corredorUno.posicion >= 100 && corredorDos.posicion >= 100) {
                console.log("Es un empate")
            }else if (corredorUno.posicion >= 100) {
                console.log(`El corredor 1 gano!!!`)
            } else if (corredorDos.posicion >= 100) {
                console.log(`El corredor 2 gano!!!`)
            }

        })


        document.getElementById("btnReiniciar").addEventListener('click', () => {

            corredorUno.nuevaCarrera()
            corredorDos.nuevaCarrera()

        })
    }
}
let m = new Main();