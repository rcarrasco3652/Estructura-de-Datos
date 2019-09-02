import Punto from "./Punto.js";
let posUno = new Punto(1);
let posDos = new Punto(2);

class Main {
    constructor() {

        document.getElementById('btn').addEventListener('click', () => {
            let xUno = Number(document.getElementById('xUno').value);
            let yUno = Number(document.getElementById('yUno').value);
            let xDos = Number(document.getElementById('xDos').value);
            let yDos = Number(document.getElementById('yDos').value);
            let print = document.querySelector("#print")

            print.innerHTML += nuevasCordenadas(xUno, yUno, xDos, yDos);
        })

        function nuevasCordenadas(xUno, yUno, xDos, yDos) {
            posUno.nuevaX = xUno;
            posUno.nuevaY = yUno;

            posDos.nuevaX = xDos;
            posDos.nuevaY = yDos

            return `${posUno.geToStrings()} , ${posDos.geToStrings()} y la distancia entre los dos puntos es de: ${distancia()}`
        }

        function distancia() {
            let distancia = Math.sqrt(
                Math.pow((posDos.x - posUno.x), 2) + Math.pow((posDos.y - posUno.y), 2)
                );
            return distancia;
        }
    }
}
let m = new Main;