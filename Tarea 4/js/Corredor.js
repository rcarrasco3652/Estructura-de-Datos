export default class Corredor{
    constructor(id,nombre,edad){
        this._id = id,
        this._nombre = nombre,
        this._edad = edad
    }
    get id(){
        return this._id
    }
    set id(nuevoId){
        this._id = nuevoId
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    get edad(){
        return this._edad
    }
    set edad(nuevaEdad){
        this._edad = nuevaEdad
    }

    getToString(){
        return `Numero de corredor: ${this._id} 
Corredor: ${this._nombre} 
Edad: ${this._edad}
        `
    }
}