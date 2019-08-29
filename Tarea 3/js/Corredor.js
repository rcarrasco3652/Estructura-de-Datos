export default class Corredor{
    constructor(numeroCorredor){
        this._numeroCorredor = numeroCorredor;
        this._posicion = 0
        this._recorrer = [3,1,1,2,2,2]
    }
    correr(){
        this._posicion = this._posicion + this._recorrer[Math.trunc(Math.random()*6)]
        console.log(  this._posicion)
    }
    nuevaCarrera(){
        this._posicion = 0
    }
}