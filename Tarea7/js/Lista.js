import Articulo from "./Articulo.js"

export default class Lista{
    constructor(tabla){
        this._tabla = tabla;
        this._articulos = [];   
    }
    get articulos(){
        return this._articulos;
    }

    _agregarArticulo(objArticulo){
        this._articulos.push(objArticulo);
    }

    _eliminarArticulo(posicion){
        this._articulos.splice(posicion,1);
    }

    _actualizarTabla(){
        // this._tabla.innerHTML = "";


        for(let i = 0; i < this._articulos.length; i++){

            let row = this._tabla.insertRow(-1);

            row.insertCell(0).innerHTML = this._articulos[i].codigo
            row.insertCell(1).innerHTML = this._articulos[i].nombre
            row.insertCell(2).innerHTML = this._articulos[i].precio
            row.insertCell(3).innerHTML = this._articulos[i].contenido + "gr o ml"
            row.insertCell(4).innerHTML = this._articulos[i].descripcion

        }
    }

    _editarArticulo(posicion, nuevArticulo){
        this._articulos[posicion].nombre = nuevArticulo.nombre;
        this._articulos[posicion].precio = nuevArticulo.precio;
        this._articulos[posicion].contenido = nuevArticulo.contenido;
        this._articulos[posicion].descripcion = nuevArticulo.descripcion;

        console.log(this._articulos);
        
    }
}