export default class Punto {
    constructor(id) {
        this._id = id;
        this._x = 0;
        this._y = 0;
    }
    get x() {
        return this._x;
    }
    set nuevaX(valX,) {
        if (valX <= 100 && valX >= -100) {
            this._x = valX;
        } else {
            return;
        }
    }

    get y() {
        return this._y;
    }
    set nuevaY(valY) {
        if (valY <= 100 && valY >= -100) {
            this._y = valY;
        }else{
            return
        }
    }

    geToStrings(){
        let imprimir = `La posicion del punto ${this._id} es (${this._x},${this._y})`
        return imprimir
    }

}