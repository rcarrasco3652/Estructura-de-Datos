import Corredor from "../js/Corredor.js";

export default class Liebre extends Corredor {
    constructor(id, nombre, edad) {
        super(id, nombre, edad);
        this._posicion = 0;
    }
    get posicion() {
        return this._posicion;
    }

    correr() {
        let recorrido = Math.trunc((Math.random() * 100 + 1));

        if (recorrido <= 20) { // DORMIR
            return this._posicion;

        } else if (recorrido <= 40) { // SALTO GRANDE
            this._posicion += 9;

        } else if (recorrido <= 50) { // RESBALON GRANDE
            this._posicion -= 12;

        } else if (recorrido <= 85) { // SALTO PEQUEÑO
            this._posicion += 1;

        } else{ //RESBALON PEQUEÑO
            this._posicion -= 2;
        }

        return recorrido;
    }
    reset() {
        this._posicion = 0;
    }

}