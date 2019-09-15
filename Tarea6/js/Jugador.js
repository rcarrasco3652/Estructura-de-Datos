import Dado from "./Dado.js"
var dado = new Dado();
export default class Jugador {
    constructor(nombre) {
        this._nombre = nombre
        this._posicion = 0

    }
    get nombre() {
        return this._nombre
    }
    get posicion() {
        return this._posicion
    }

    subirEsacalera(cant) {
        this._posicion += cant
    }

    bajarPorSerpiente(cant) {
        this._posicion -= cant;
    }

    avanzar() {
        this._posicion += dado.lanzar()


    }



}