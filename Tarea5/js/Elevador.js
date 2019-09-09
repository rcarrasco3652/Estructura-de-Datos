
export default class Elevador{
    constructor(totalPisos, capacidad){
        this._totalPisos=totalPisos;
        this._capacidad=capacidad;
        this._puerta=false;//cerrada
        this._pisoActual=0;
    }

    get totalPisos(){
        return this._totalPisos;
    }

    get pisoActual(){
        return this._pisoActual;
    }

    set pisoActual(valor){
        this._pisoActual = valor;
        return this._pisoActual;
    }

    get puerta(){
        return this._puerta;
    }

    abrirPuerta(){
        this._puerta=true;
    }

    cerrarPuerta(){
        this._puerta=false;
    }

    mover(destino){
        this._pisoActual=destino;
    }

    toString(puerta){
        if(puerta===true){
            return "Abierta";
        }else{
            return "Cerrada"
        }
    }
}