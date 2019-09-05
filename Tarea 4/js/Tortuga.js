import Corredor from "../js/Corredor.js"

export default class Tortuga extends Corredor {
    constructor(id, nombre, edad) {
        super(id, nombre, edad);
        this._posicion = 0;

    }
    get posicion() {
        return this._posicion
    }

    correr() {
        let recorrido = Math.trunc((Math.random() * 100 + 1));

        if (recorrido <= 50) { // PASO RAPIDO
            this._posicion += 3;

        } else if (recorrido <= 70) { // RESVALON
            this._posicion -= 6;

        } else{ // PASO LENTO
            this._posicion += 1;

        }

        return recorrido
    }
    reset() {
        this._posicion = 0;
    }
}