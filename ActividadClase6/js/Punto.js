export default class Punto {
    constructor(x,y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(valX) {
        if (valX <= 100 && valX >= -100) {
            this._x = valX;
        } else {
            return;
        }
    }

    get y() {
        return this._y;
    }
    set y(valY) {
        if (valY <= 100 && valY >= -100) {
            this._y = valY;
        }else{
            return
        }
    }

    geToStrings(){
        let imprimir = `La posicion del punto es (${this._x},${this._y})`
        return imprimir
    }
    
    distancia(punto) {
        let distancia = Math.sqrt(
            Math.pow((punto.x - this._x), 2) + Math.pow((punto.y - this._y), 2)
            );
        return distancia;
    }

}