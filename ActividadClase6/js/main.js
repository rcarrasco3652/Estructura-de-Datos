import Punto from "./Punto.js";


class Main {
    constructor() {
        this._puntos = new Array();
        document.getElementById('btn').addEventListener('click', () => {
            console.log("jala")
            let xUno = Number(document.getElementById('x').value);
            let yUno = Number(document.getElementById('y').value);
        
            let print = document.querySelector("#print")
            
            nuevoPunto(xUno, yUno, this._puntos);
        })

        function nuevoPunto(xUno, yUno, puntos) {
            let p = new Punto(xUno,yUno);
            puntos.push(p);
            // this._puntos.push(new Punto(xUno,yUno));
            console.log(puntos)
            return sumaDistancias(puntos)
        }

        function sumaDistancias(puntos){
            let sum = 0
            for(let i = 0; i < puntos.length -1; i++){
                sum += puntos[i].distancia(puntos[i+1])
            }
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